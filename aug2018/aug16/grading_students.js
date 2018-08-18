function gradingStudents(grades) {
  let finalGrades = [];

  for (let i = 0; i < grades.length; i++) {
    let current = grades[i];
    if (current < 38) {
      finalGrades.push(current);
    } else if (current % 5 < 3) {
      finalGrades.push(current);
    } else if (current % 5 === 3) {
      finalGrades.push(current + 2);
    } else if (current % 5 === 4) {
      finalGrades.push(current + 1);
    }
  }
  return finalGrades;
}