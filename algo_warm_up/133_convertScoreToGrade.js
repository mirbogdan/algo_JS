/*
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
*/

function convertScoreToGrade(score) {
    // your code here
   if(score > 100 || score < 0){return "INVALID SCORE"}
   if(score >= 90){ return "A"}
   if(score >= 80){ return "B"}
   if(score >= 70){ return "C"}
   if(score >= 60){ return "D"}
   return "F";
  }

function convertScoreToGrade(score) {
  // your code here
  let result;
switch (true) {
  case ( score < 0):
    result = "INVALID SCORE"
    break
  case (score < 60):
    result = "F"
    break;
  case (score < 70):
    result = "D"
    break;
  case (score < 80):
    result = "C"
    break
  case (score < 90):
    result = "B"
    break;
  case (score <= 100):
    result = "A"
    break
  default:
    result = "INVALID SCORE";
}