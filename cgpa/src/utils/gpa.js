import { gradeToPoints } from "./grades";

/**
 * Compute SGPA for a semester: sum(gradePoints * creditHours) / sum(creditHours)
 */
export const computeSGPA = (courses) => {
  const totals = courses.reduce(
    (acc, c) => {
      const gp = gradeToPoints(c.grade);
      const ch = Number(c.creditHours || 0);
      acc.pts += gp * ch;
      acc.ch += ch;
      return acc;
    },
    { pts: 0, ch: 0 }
  );
  if (totals.ch === 0) return 0;
  return Number((totals.pts / totals.ch).toFixed(2));
};

/**
 * Compute CGPA across semesters: sum(SGPA_i * CH_i) / sum(CH_i)
 */
export const computeCGPA = (semesters) => {
  const totals = semesters.reduce(
    (acc, s) => {
      const ch = s.courses.reduce((t, c) => t + Number(c.creditHours || 0), 0);
      const sgpa = computeSGPA(s.courses);
      acc.pts += sgpa * ch;
      acc.ch += ch;
      return acc;
    },
    { pts: 0, ch: 0 }
  );
  if (totals.ch === 0) return 0;
  return Number((totals.pts / totals.ch).toFixed(2));
};

export const totalCreditHours = (courses) =>
  courses.reduce((t, c) => t + Number(c.creditHours || 0), 0);
