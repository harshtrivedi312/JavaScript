console.log("====This is example for string objects functions====");

let str = "SomeString";
console.log(str.charAt(5));

const aboutChar =( ) => {
    for( let index in str ) {
        if (str[index] === "t"){
            console.log("found t in string");
            
        }
    }
};
aboutChar();

//concat the string
// concat is used to join two or more strings
// This method does not change the existing strings, but returns a new string containing the text of the joined strings.

console.log(str.concat("  Hello World"));
console.log("user" + " Details");

console.log("=============this is .indexOf() and .lastIndesOf function method=======================");
//indexOf() and lastIndexOf()

console.log(str.indexOf("m"));
console.log(str.lastIndexOf("S"));


console.log("=============this is .search() function method=======================");

//search(); function


str ="JavaScript is a scripting language, javaScript is fun!!"

console.log(str.search("is"));
console.log(str.search(/JavaScript/));



console.log("=============this is .match() function method=======================");

//match (regx)

srt ="JavaScript";

console.log(str.match("Script"));

//replace() takes two arguements

console.log("=============this is .replace() function method=======================");

str = "JavaScript ES5"

//original string to the string to be replaced with

console.log(str.replace("ES5","ES6"));

console.log("=============this is .toLowerCase() and .toUpperCase function method=======================");

//.toLowerCase()  

console.log(str.toLowerCase());

//.toUpperCase()

console.log(str.toUpperCase());

// print some in upper case and string in lowercase

let text = "someString"

let answer = text.split("String")
.map((a) =>
 a == a.toUpperCase() 
 ? a.toLowerCase()
 : a.toUpperCase()
).join("String")

console.log(answer)


// conver any datatype into string

// .tostring() ...number boolean object into string

str =5;
console.log(typeof str);
console.log(typeof str.toString());

str = true;
console.log(typeof str);
console.log(typeof str.toString());

//trim() will remove space from string
str = "   string with space  hello "
console.log(str);
console.log(str.trim());
//trimLeft() //trimRight()


















