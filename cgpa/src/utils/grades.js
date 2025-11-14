export const GRADES = [
  { label: "A+", value: "A+", points: 4.0 },
  { label: "A", value: "A", points: 4.0 },
  { label: "A-", value: "A-", points: 3.7 },
  { label: "B+", value: "B+", points: 3.5 },
  { label: "B", value: "B", points: 3.0 },
  { label: "B-", value: "B-", points: 2.7 },
  { label: "C+", value: "C+", points: 2.5 },
  { label: "C", value: "C", points: 2.0 },
  { label: "C-", value: "C-", points: 1.7 },
  { label: "D", value: "D", points: 1.0 },
  { label: "F", value: "F", points: 0.0 }
];

export const gradeToPoints = (grade) => {
  const g = GRADES.find((x) => x.value === grade);
  return g ? g.points : 0;
};
