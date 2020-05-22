?? NOTE 
//regular expressions will not work any thing other than 
//string, it will only work with string 

//REVIEW : 
/**
 * Regex class with constructor 
 * // takes two args = it could be a "pattern" "flags"
 * 
 * 
 * 
 * 
 */

// let name ="someName";
 let name = new string ("somename");
console.log("name",typeof name);
//let reg = new regExp("pattern", "flag");
let reg =/pattern/;
console.log(typeof reg);
console.log();

let str = "we have some task to finish , we will do it later"
//find we in the string..

console.log(str.match(/have/));
console.log(str.match(/we/i));
console.log(str.match(/we/gi));

//NOTE :
/**
 * i = ignore the case from char
 * g = global search
 * m = multiline search
 * s = new line with . value
 * u = unicode utf-8..
 * ? = represents and
 * 
 */

 //NOTE :
 /**
  * functions that are part of regular epressions
  * .match = will match the string and will return array if ont then NULL
  * .test = search the srting and will return boolen
  *.replace = will find the string and will replace with given string
 * .search = return index value of string and if not found then it will return -1
 * .split = will split the string into char..array
 
  */

  //NOTE :
  /** 
  character classes in regular expression
    in built class that wil provide built in search
    \d = only search digit
    \s = space will be found
    \w = only search word and ignore digit and spl characters
    \D = will only search non digit value
    \S = will only search non space value
    \W = only search non words or space

NOTE :
//range with[]
[ ] will find one or any char from search
[^] will ignore given char
[a-z] match a-z char
[A-Z] match A-Z char
[0-9] matchh all numbeers
[a-z0-9] matchh  a-z and all numbers

^ outside the range will always search from the start
$ will search frommm tthe end outsidee the rnge
m search from thee multi line 



*/


 str = "we will,we will";
 //find the we nad replace with i..

 console.log(str.replace(/we/ig,"I"));

str ="i like JavaScript";
reg = /like/i;
console.log(reg.test(reg));

let PhoneNumber = "+123-456-7890";
reg = /\d/g;
console.log(PhoneNumber.match(reg));
console.log(PhoneNumber.match(reg).join(""));

/**
 * write a javascript program to test the first char of a string is upper case 
 * someStr = false
 * Html = true as first char is upper case
 *  */












 




