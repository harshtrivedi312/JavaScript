/*

static 
instance

public and private static feilds/variables
public and private instance variables
public and private instance methods
public and private static methods

inheretance of class to class





import { tsMethodSignature, tsConstructorType } from "@babel/types"
import { CodeGenerator } from "@babel/generator"

//block of code is not allowed inside a class without function/method

//NOTE 1: class can only have variables or Method. not block of CodeGenerator.length
//NOTE 2: class can only we called via (new) keyword
//NOTE 3: class can have static or instance variable
//NOTE 4: static variable or function always attatch with class and not instance of class



class DemoOne {
    
    Constructor(){

        console.log("this is class DemoOne");
        
    }

// instance method .function

    myFunOne() {
        if (true) {
            console.log(true);
            
        }
        else{

        }
    }
}

/*
//let obj = DemoOne(); without keyword "new"
let obj = new DemoOne(); //new will call to constructor function
console.log(obj);

obj.myFunOne();
//demoOne.myFunOne(); function without instance..
*/

/*

1. accept the username and password
2. store the username in database
3. password we should have encryption key
4. store the password to database
5. function that will return that username and password are stored correctly.



class userAuthorization{

//make private

    #encryptionKey ="256key"


constructor ( userName, password){

    this.userName = userName;
    this.password = password;

    }

    //function to store the username and database

    saveUserName(){

        console.log(this.username + "save into Database");
        
    }

    saveEncryptedPasswordInDB(){
        console.log(this.password + );
        
    }



}

let userOne = new userAuthorization("testUser","Pasword123");
console.log(userOne);

userOne.saveUserName();
console.log(userOne.encryptionKey);
*/


class phone{
    appQty = 0;
    constructor(batteryLevel){
        this.power=batteryLevel;
    }

}

let Iphone = new phone(80);
console.log("Iphone", Iphone);
Iphone.appQty = 20;
console.log("iphone",Iphone);

let samsung = new phone(88);
samsung.appQty = 25;
console.log("samsung", samsung);

//NOTE encspsulation DONOT allow the class variable to access directly to the instance.

// make the variable proctecxted and only allow access vias GET and SET method

class Employee{
    //for private variable use # for proctected we use _

    _empDPT ="";
    constructor (id){
        this.id =id;
    }
 set empDept(deptName){
     this._empDPT = deptName;
 }
get empDept(){
    return this._empDPT;
    }
}

let empOne = new Employee(101);
empOne.empDept = "IT"
console.log("empOne",empOne);
console.log(empOne.empDept);


let empTwo = new Employee(102);
empTwo.empDept ="Marketing"
console.log("empTwo",empTwo);

class AboutArray{
    numberList =[25,45];
//we want to create method what will display the last element of array..

get lastElement(){
    if(this.numberList[this.numberList.length -1]);
}
set 

}



















































