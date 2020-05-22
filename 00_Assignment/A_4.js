/***********************************************TEST ONE********************************************************/

/*Objective
In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.
Task
Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
Input Format
Locked stub code in the editor reads string  from stdin and passes it to the function.
Output Format
First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).
Sample Input 0
javascriptloops
Sample Output 0
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
Explanation 0
Observe the following:
Each letter is printed on a new line.
Then the vowels are printed in the same order as they appeared in .
Then the consonants are printed in the same order as they appeared in .
*/

const vowelsAndConsonants = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // Check for vowels

  let letters = str.split("");
  let vowelsFound = [];
  let consonantsFound = [];

  for (let i in letters) {
    if (vowels.includes(letters[i])) {
      vowelsFound.push(letters[i]);
    } else {
      consonantsFound.push(letters[i]);
    }
  }

  console.log(vowelsFound.join("\n"));
  console.log(consonantsFound.join("\n"));
};

vowelsAndConsonants("JavaScriptLoops");

/*
first we are splitting our string JavaScriptLoops into an array. 
 s.split('') will convert it to an array.
then we find if vowels are present in array with .includes method and then if found we use .push to add it into new variable.
else we push remaining letter in array to new variable for consonents. then we join the string array with .join
and to print them in new line we use \n to itterate in new line.

*/

/**********************************************TEST TWO*******************************************************************/

/**
Student Enrollment process..
if student age is less then 18 and grade is less then 3.4 -> is not eligible 
if student age is more then 18 and grade is less then 3.4 -> is elidible with condition
if student age <= 18 and grade more then 3.4 GPA then student is eligible..for enrollment
Task: 1 Class with Enrollment Exception class
Task: 2 throw exception with explanation (With Detail)
*/

class notEligble extends Error {
  constructor(message) {
    super(message);
    this.name = "Student Not Eligible";
  }
}

function studentEligiblity(age, GPA) {
  try {
    if (age < 18 && GPA < 3.4) {
      console.log("age restriction and low GPA");
      throw new notEligble("Student Not Eligible");
    } else {
      if (age >= 18 && GPA < 3.4) {
        console.log("Required GPA Does Not Match Try Again Next Time");
        throw new notEligble("student not eligible");
      } else if (age >= 18 && GPA >= 3.4) {
        console.log("All required criteria match");
        //throw new notEligble("student Eligible for Enrollment");
      }
    }
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
  }
}

studentEligiblity(24,4);

/*
first we will make custom class for exception error
then make a function with try catch using if else and comparing age and gpa with requirements
if there is a error throw custom error message logingi details.
run the function with passing arguements.

*/
