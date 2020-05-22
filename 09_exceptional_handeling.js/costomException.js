
//REVIEW :
/*
//inbuilt exception class in javascript
1> Error
2> SyntaxError
3> RangeError
4> TypeError


*/

//can write exception without try catch as well

function ExceptionTypes(number) {
    try {
        if (number >= 50 && number <= 100) {
            throw new RangeError("Number must be more than 100 or less than 50");
        }
        //throw new SyntaxError"this is syntax error");

    } catch (error) {
        console.log(error.name);
        console.log(error.message);


    }
}


ExceptionTypes(5);

function checkValues(args) {
    let nameArray = ["JS", "JAVA", "HTML", "CSS"];
    let updatedValue = args.toUpperCase();
    try {
        if (nameArray.includes(updatedValue)) {
            console.log(updatedValue + " Agruement found in given Array");


        } else {
            throw new RangeError("Element Name not found");
        }
    } catch (error) {
        console.log(error.name);
        console.log(erroe.message);



    }
}

checkValues("CSS");



console.log("--------------CLASS TEST 1-----------------");



/*
Function call getGrade(score)..
  Task One...
  Constraints; score <= 0 score <= 30;
  0 = 5 = F
  5 = 10 = E
  10 = 15 = D
  15 to 20 = C
  20 to 25 = B
  25 to 30 = A..
  Task Two...
  if score value is not range then throw exception..
  that score is not value value
  Task Three..
  if score is less then C grade then shoe throw exception 
  you must improve the score..


*/


function ScoreCard(score) {

    try {
        if (score < 0 || score > 30) {
            throw new RangeError("Score not in valid range");
        } else {
            if (score >= 0 && score <= 5) {
                console.log("You recieved F Grade");
                throw new RangeError("you did fail the exam");
            }
            else if (score >= 6 && score <= 10) {
                console.log("You recieved E Grade");
                throw new RangeError("you need to re-do exam");
            }
            else if (score >= 11 && score <= 15) {
                console.log("You recieved D Grade");
                throw new RangeError("you need to improve");
            }
            else if (score >= 16 && score <= 20) {
                console.log("You recieved C Grade");
                throw new RangeError("You can do a better");
            }
            else if (score >= 21 && score <= 25) {
                console.log("You recieved B Grade");
                throw new RangeError("You did good");
            }
            else if (score >= 26 && score <= 30) {
                console.log("You recieved A Grade");
                throw new RangeError("You did very good ");
            }


        }

    } catch (error) {

        console.log(error.message);
    }

}

ScoreCard(30);


console.log("-----------------CLASS TEST 2 ---------------------");


// function call reverse string(str)
/*
task 1> if string is number than reverse the number and return back
task 2> if string is not a number than return SyntaxError

example
str ="1234";
out = "4321" == its a number

str = SomeString1234;
out Exception SyntaxError

*/

// function reverseString(str)
/*****************************************************
 * 
 * creating costom exception class 
 
 * 
 * ****************************************************
 */







console.log("---------------CUSTOM EXCEPTION CLASS---IN CLASS TEST-------------");


/**
 * shipping the product
 * if weight of the product is less than 100 it is good to ship
 * if it is more than 100 you throw custom exception class called 
 * InvalidProductException...
 * 
 * 
 * task 1 create custom exception class
 * task 2 create function that check the product weight and return error or sucess based on product weight
 */


class InvalidProductException extends Error {
    constructor(message) {
        super(message)
        this.message = message;
        this.name = "product exception class"
    }

}

function productShipment(weight) {
    try {
        if (weight < 100) {
            console.log("ship it!!");

        } else {
            throw new InvalidProductException("product weight is more than max weight");
        }

    } catch (error) {
        console.log(error.name);
        console.log(error.message);


    }
}

productShipment(500);















