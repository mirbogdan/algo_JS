/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (60  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if(score > 100 || score < 0){return 'INVALID SCORE'}
    if(score >= 98){return 'A+'}
    if(score >= 93){return 'A'}
    if(score >= 90){return 'A-'}
    if(score >= 88){return 'B+'}
    if(score >= 83){return 'B'}
    if(score >= 80){return 'B-'}
    if(score >= 78){return 'C+'}
    if(score >= 73){return 'C'}
    if(score >= 70){return 'C-'}
    if(score >= 68){return 'D+'}
    if(score >= 63){return 'D'}
    if(score >= 60){return 'D-'}
    return 'F';
  }
  

function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
let result;
  switch (true) {
  case ( score < 0 || score > 100):
    result = "INVALID SCORE"
    break
  case (score < 60):
    result = "F"
    break;
  case (score <= 69 ):
    result = score < 63 ? "D-" : score > 67 ? "D+" : "D"
    break;
  case (score <= 79):
    result = score < 73 ? "C-" : score > 77 ? "C+" : "C"
    break
  case (score <= 89):
    result = score < 83 ? "B-" : score > 87 ? "B+" : "B"
    break;
  case (score <= 100):
    result = score < 93 ? "A-" : score > 97 ? "A+" : "A"
    break
  default:
    result = "INVALID SCORE";
}
  return result;
}