

//REVIEW 
/*
> Inheritance only applies to super class to child class
> one super class can have multiple child class
> child class can have its own function or method which is not ther in super class
> chils class can only inherit from one super calss

*/

/*
class Animal {
    constructor (name){
        this.name = name;
    }
    moveAnimal(moveType){
        this.move = moveType;
        console.log(`this animal can move like: ${this.move}`);

        
    }
    eatAnimal(foodType){
        this.eat =foodType;
        console.log(`this animal eats: ${this.eat}`);
        
    }
}

//keyword extends is used to make a child in an existing or the parent class

class Dog extends Animal{
    run(speed){
        this.speed = speed;
        console.log("this dog acn run:" + speed);
        
    }
}

let dogOne = new Dog("dog");
dogOne.moveAnimal("land animal");
dogOne.eatAnimal("dog Food");
dogOne.run(5);
console.log("dogOne",dogOne);

class Fish extends Animal {
    swim(swimSpeed) {
    this.swimSpeed = swimSpeed;
    console.log("this fish can swim:" + swimSpeed);
    }
}

let tuna = new Fish("Tuna Fish");
tuna.eatAnimal("sea Food");
tuna.moveAnimal("swim in water");
tuna.swim(10);
console.log("tuna".tuna);


let goldFish = new Fish("Gold Fish");
goldFish.eatAnimal("fish Food");
goldFish.moveAnimal("swim in water");
goldFish.swim(2);
console.log("goldFish",goldFish);
*/

/*
//NOTE :  
1>
    1.1>
    1.2>
    1.3>
    1.4>use methodOverridding....






*/

class Acount {
    constructor(accountName){
        this.name = accountName;
    }
    withdraw(amount){
        console.log("request to withdraw amount: "+ amount);
        
    }
    deposit(amount){
        console.log("request to deposite amount: "+ amount);
        
    }
    onlineAccess(accessLevel){
        console.log("online access level for this account is: " + accessLevel);
        
    }
}

class creditAccount extends account{
    constructor(name,accountType){
        super(name);
        this.accountType = accountType;
    }
    payOffLoan(amount){
        this.payOffAmount = amount;
        super.deposit(amount);
    }
}
let LoanOne = new creditAccount("car loan account", "Loan Account");
console.log("loanOne",LoanOne);
LoanOne.payOffLoan(2000);
console.log("loanOne",LoanOne);



class DebitAccount extends account{
    constructor(name,typeOfAccount){
    super(name);
     this.typeOfAccount = typeOfAccount;  
        }
        //method overriding
        //change in method which is in super class

        
        deposit(){
            super.deposit(100);
            console.log("money has been deposited");
            
        }
    }

    let userOneDebitAccount = 
    







class cerditCard extends Account{
    constructor(creditAccount)
}









































































