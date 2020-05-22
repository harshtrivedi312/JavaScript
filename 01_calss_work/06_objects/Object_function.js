
// merging tow diff objects in to one
const empPersonalInfo ={
    Name:"Harsh Trivedi",
    Address:"101 Main st -MA 02020",
};
const empWorkInfo={
    ID:100011,
    dep:"It-Dev",
};

const empFullDetails = Object.assign(empPersonalInfo,empWorkInfo); //O in object should be caps Object.assign is inbuilt javaScript Function

console.log(empFullDetails);
console.log(empPersonalInfo);

//creating a new object from an existing object

const user ={
    isAdmin: false,
    printAdminAccess: function(){
        console.log((`${this.name} user is Admin Role:${this.isAdmin}`));  // ` $ sign will make placeholder to later assign 
        
    },
};

const empOne = Object.create(user);
console.log(empOne);
empOne.isAdmin =true;
empOne.name = "mark miller";
empOne.printAdminAccess();


//entries: to get an access to object keys as an array value

const priority ={ 1:"High", 2:"Medium", 3:"Low"};
console.log(Object.entries(priority)[0]);

// freeze function will lock the object and will be not mutable or changeable

const obj = {
    id:101111
};
Object.freeze(obj);
obj.id = 100112;//this will not change as the object is frozen
console.log(obj.id);

// is function will compare two objects and gives out answer as true or false also works as ===
console.log(Object.is(45,45));
console.log(Object.is(45,5));



const a={a:true};
const b={b:true};

console.log(Object.is(a,b)); // this will not compare complete objects but will only compare values

// keys function in an object will print the key names in an object
// values function in an object will print the value in an object

const nameList ={
    userOne :"mike",
    usertwo :"james",
    userThree:"josh"
};

console.log(Object.keys(nameList));
console.log(Object.values(nameList));



const numbers ={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
};

//for in loop (works with arrey as well);


for (const [i,val] of Object.entries(numbers)){
    console.log("keys to the object " + i);
    console.log(`key ${i} and value ${val}`);
    
}

//for each method this will print both key and the value of an object1
Object.entries(numbers).forEach(function(index){
    console.log(index);
    
})

// `$ can b used for making function to pass the arguement later

// simple way to write it

let firstName ="josh";
let lastName ="smith";
console.log("this is full Name " + firstName + " " + lastName);
firstname ="mike";
console.log("this is full Name " + firstName + lastName); //here it will change the name to mike

fname ="james";
lname ="wick";
let fullname =`this is the fullname ${fname} ${lname}`; //the below function in one line
console.log(fullname);

//rather than making a function we can write it in a single sentence using `${}`;
// function fullname(fName,lName){
  //  return fName = lName
// }
//console.log(fullname(fName,LName));  // this is the whole function







































