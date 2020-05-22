
//REVIEW 
/*
> exception handeling in JavaScript
1>try_catch Block
2>try_catch...finally block
3> "throw" KeyWord
4>

*/

// differance betwnn Error and Exception
// Error which application can not recover and will fail to start or execute
//exception can be handled by the code

let a = 55;
let b= "0";

console.log(a/b);

/*
*always try block will run first then if any error then catch block will run...
//if or else will run
//try will always run and if there is an erroe then the catch block will run...
*/

try{
    console.log("try block is running");
    console.log(numOne);
    
    
}
catch(error){
    console.log(error.message);
    
}
//console.log(numOne);


//NOTE : try catch block will not run incase compiler or syntax error
// will only work is the code is syntax error free..




console.log("this is printing outside try_catch_block");

try {
    console.log("start the try block");

}
catch (error){
    console.log("error has occur");
    
}


//Error Class
let person = '{"name:","mike","age:" "34"}';


try {
    console.log(person);
    console.log(typeof person);

    //willl convert string into object json.parse

    let employee = JSON.parse(person);
    console.log(employee);
    console.log(typeof employee);
    console.log(employee.name);
    console.log(employee.age);
    
} catch (error) {
    console.log("can not parse string into object");
    }

// varify that username and password are correct if not throw an exception
// verify that username length is more than 8 char and password length is more than 7 char

function userAuthentication(username, password){

try {
    if (username.length >= 8 && password.length >= 7) {
        if (username === "admin" && password === "admin1234") {
            console.log("Login SucessFull");}

            else {
                throw new Error ("incorrect username and password");
            }}
            else {
                throw new Error ("username or password too short");
            }}
            catch (error){
                console.log(error.name);
                console.log(error.message);
                //console.log(error.stack);
                
            }
}
userAuthentication("user","admin1234")


















































































