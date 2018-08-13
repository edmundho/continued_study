// You are given a string representing an attendance record for a student.The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

//   Example 1:
// Input: "PPALLP"
// Output: True

// Example 2:
// Input: "PPALLL"
// Output: False

var checkRecord = function (s) {
  let array = s.split('');

  let numAbsent = 0;
  let threeConsecLates = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "A") numAbsent++;
    if (array[i] === "L") {
      if (array[i + 1] === "L" && array[i + 2] === "L") threeConsecLates = true;
    }
  }

  return !(numAbsent > 1 || threeConsecLates);
};

console.log(checkRecord("PPALLP"));
console.log(checkRecord("PPALLL"));