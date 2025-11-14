import { useEffect, useState } from "react";
import Header from "./components/Header";
import SemesterCard from "./components/SemesterCard";
import CGPASummary from "./components/CGPASummary";
import SGPAChart from "./components/SGPAChart";
import { loadData, saveData } from "./utils/storage";
import { v4 as uuidv4 } from "uuid";
import jsPDF from "jspdf";
import { computeSGPA, totalCreditHours } from "./utils/gpa";

function uid() {
  try {
    return uuidv4();
  } catch {
    return Math.random().toString(36).slice(2);
  }
}

const DEFAULT_DATA = [
  {
    id: uid(),
    title: "Semester 1",
    courses: [
      { name: "English", grade: "A", creditHours: 3 },
      { name: "Math", grade: "B+", creditHours: 4 },
      { name: "Physics", grade: "B", creditHours: 3 }
    ]
  },
  {
    id: uid(),
    title: "Semester 2",
    courses: [
      { name: "Programming", grade: "A-", creditHours: 4 },
      { name: "Data Structures", grade: "A", creditHours: 3 },
      { name: "Discrete Math", grade: "B+", creditHours: 3 }
    ]
  }
];

export default function App() {
  const [semesters, setSemesters] = useState(() => loadData() || DEFAULT_DATA);

  useEffect(() => {
    saveData(semesters);
  }, [semesters]);

  const addSemester = () => {
    const nextIndex = semesters.length + 1;
    setSemesters((prev) => [
      ...prev,
      { id: uid(), title: `Semester ${nextIndex}`, courses: [] }
    ]);
  };

  const renameSemester = (semesterId, title) => {
    setSemesters((prev) =>
      prev.map((s) => (s.id === semesterId ? { ...s, title } : s))
    );
  };

  const addCourse = (semesterId, course) => {
    setSemesters((prev) =>
      prev.map((s) =>
        s.id === semesterId ? { ...s, courses: [...s.courses, course] } : s
      )
    );
  };

  const updateCourse = (semesterId, index, course) => {
    setSemesters((prev) =>
      prev.map((s) => {
        if (s.id !== semesterId) return s;
        const next = [...s.courses];
        next[index] = course;
        return { ...s, courses: next };
      })
    );
  };

  const deleteCourse = (semesterId, index) => {
    setSemesters((prev) =>
      prev.map((s) => {
        if (s.id !== semesterId) return s;
        const next = s.courses.filter((_, i) => i !== index);
        return { ...s, courses: next };
      })
    );
  };

  const deleteSemester = (semesterId) => {
    setSemesters((prev) => prev.filter((s) => s.id !== semesterId));
  };

  // 📄 Transcript-style PDF Export
  const exportPdf = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const leftMargin = 15;
    const rightMargin = pageWidth - 15;
    let y = 20;

    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(16);
    pdf.text("Official Transcript", leftMargin, y);
    y += 10;

    let overallCredits = 0;

    semesters.forEach((sem, idx) => {
      if (y > pageHeight - 40) {
        pdf.addPage();
        y = 20;
      }

      pdf.setFontSize(13);
      pdf.text(`${sem.title || "Semester " + (idx + 1)}`, leftMargin, y);
      y += 6;

      // Headers
      pdf.setFontSize(10);
      pdf.text("Course Name", leftMargin, y);
      pdf.text("Credit Hours", pageWidth * 0.62, y);
      pdf.text("Grade", pageWidth * 0.82, y);
      y += 4;
      pdf.line(leftMargin, y, rightMargin, y);
      y += 6;

      let semCredits = 0;
      sem.courses.forEach((c) => {
        if (y > pageHeight - 30) {
          pdf.addPage();
          y = 20;
        }
        const ch = Number(c.creditHours || 0);
        semCredits += ch;
        pdf.setFontSize(11);
        pdf.text(c.name || "-", leftMargin, y);
        pdf.text(`${ch}`, pageWidth * 0.62, y);
        pdf.text(c.grade || "-", pageWidth * 0.82, y);
        y += 6;
      });

      const sgpa = computeSGPA(sem.courses);
      overallCredits += semCredits;

      pdf.line(leftMargin, y, rightMargin, y);
      y += 6;
      pdf.setFontSize(11);
      pdf.text(`Total Credit Hours: ${semCredits}`, leftMargin, y);
      const sgpaText = `SGPA: ${sgpa.toFixed(2)}`;
      const sgpaWidth = pdf.getTextWidth(sgpaText);
      pdf.text(sgpaText, rightMargin - sgpaWidth, y);
      y += 12;
    });

    // CGPA
    const totals = semesters.reduce(
      (acc, s) => {
        const ch = totalCreditHours(s.courses);
        const sg = computeSGPA(s.courses);
        acc.pts += sg * ch;
        acc.ch += ch;
        return acc;
      },
      { pts: 0, ch: 0 }
    );
    const cgpa = totals.ch === 0 ? 0 : (totals.pts / totals.ch).toFixed(2);

    const bottomY = pageHeight - 20;

    pdf.setFontSize(12);
    pdf.text(`Overall Total Credit Hours: ${overallCredits}`, leftMargin, bottomY);
    const cgpaText = `CGPA: ${cgpa}`;
    const cgpaWidth = pdf.getTextWidth(cgpaText);
    pdf.text(cgpaText, rightMargin - cgpaWidth, bottomY);

    pdf.save("transcript.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/40 to-slate-50 text-slate-900">
      <Header onAddSemester={addSemester} onExportPdf={exportPdf} />

      <main className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-6 space-y-6">
        <section className="rounded-xl bg-white border border-slate-200 shadow-soft p-4">
          <p className="text-sm md:text-base text-slate-700">
            Add semesters and courses to track SGPA and CGPA. Data is saved automatically in
            your browser, so it persists after refresh. You can also export a transcript‑style
            PDF with semester‑wise tables and overall CGPA.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4">
          {semesters.map((sem) => (
            <SemesterCard
              key={sem.id}
              semester={sem}
              onAddCourse={addCourse}
              onUpdateCourse={updateCourse}
              onDeleteCourse={deleteCourse}
              onRenameSemester={renameSemester}
              onDeleteSemester={deleteSemester}
            />
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SGPAChart semesters={semesters} />
          <CGPASummary semesters={semesters} />
        </section>

        <footer className="text-center text-xs text-slate-500 py-6">
          SGPA & CGPA Tracker
        </footer>
      </main>
    </div>
  );
}
