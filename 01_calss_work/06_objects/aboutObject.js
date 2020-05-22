
console.log("--------------------application is running in npm nodemon---------------- ");

let user = {
    Name : "Harsh",
    LastName :"Trivedi",
    Age : 29,
    KnowsCoding : false,
    IDNumber : 121404
}
console.log(user);
// with "in" operator we can verify if key there in object
// with "delete" operator we can delete a key from the object
// we can chanfe the value by using object name.key and then thew value
// change or update the value of the key in a object by objectneme.key and then value
// keyword .this could be used inside an object to access data and change data 
// can use object in a function 
// can use function inside an object

// C reating an employee databade

let employee = function( empID, empName,empAddres,empDepartment){
    this.id = empID;
    this.name = empName;
    this.Address =empAddres;
    this.department =empDepartment;
};
let employeeOne = new employee(101,"mark Miller","101 main st","it");

console.log(employeeOne);

let car =function (make,model,color,engineType){
    this.carmake = make;
    this.carModel = model;
    this.carcolor = color;
    this.power =engineType;

};

let carOne = new car("Honda","odessey","black","V6");
let carTwo = new car("infiniti","QX50","red","V8");

console.log(carOne);
console.log(carTwo);


//Create an object calculator with three methods:
//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.

//27Apr class session;















































































