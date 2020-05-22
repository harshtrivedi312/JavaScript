console.log("============this is about number object function methods in javascript========");

let value = 50;
console.log(typeof value);

//isfinite() can be count as a finite number

console.log(Number.isFinite(value));
value = Infinity;
console.log(Number.isFinite(value));

value=12.99;

console.log(value);

    //integer means it is a round number
    // float means it has a decomal value

    console.log(Number.isInteger(value));
    
    //.tofix() to manage the number of decimals points

    console.log(value.toFixed(1));
    console.log(value.toFixed(4));

    //parseInt( ) parsefloat()

    value ="50";
    console.log(typeof value);

    //convert string into number

    console.log(Number.parseInt(value));
    value ="50.99"
    console.log(Number.parseFloat(value));
    
    // math object function
   
    console.log("this is match object function");
   
    
    console.log(Math.sqrt(5));
    console.log(Math.random());

    //floor and ceil
    //floor will provide us a lower value
    //ceil will provide high value

    let numOne = 4.66;

    console.log(Math.floor(numOne));
    console.log(Math.ceil(numOne));


//0.50 if leass then lower if value more upper

numOne = 4.49;
console.log(Math.round(numOne));
numOne = 4.55;
console.log(Math.round(numOne));

//abs() // absolute will turn positive from negative

numOne = -33.99;
console.log(Math.abs(numOne));
















































    
    
    

    
    
    
    
    
    



















