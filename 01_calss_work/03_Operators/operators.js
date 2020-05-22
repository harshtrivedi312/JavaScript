/* This is about JavaScript Operators*/

/**
 * ?: = is used as short cut for if else
 * , is used for multiple arguements
 * delete = delete the object key and value
 * in = check if the object is given poperty
 * instance of = check if the instance is given object or not
 * new = create the instance from the class
 * type of = check what type of object
 * void = return no value
 
 */

if (20 == 20)
{
    console.log("condition IS TRUE");
    
}
else{
    console.log("condition is false");
    
}

let bool = 20 ==21 ? console.log('it is true') : console.log("it is false");

// * 2 , (,) = apply multiple arguements

let n,m = 10;
console.log(m);
console.log(n);

function demo( argsOne, argsTwo){
    argsOne =15;
    argsTwo = 20;
    console.log(argsOne + argsTwo);
    
}
demo(

);

// * 3 = delete= delete the object key and value

let user = {
    id:10,
    name:"mark miller"
}

console.log(user);

delete user.id;

console.log(user);
//remove entire object
// user = null
// log (user)

// in = check if th eobject is given property

console.log('name' in user);
console.log('id' in user);



// * 5 instance of = check if th einstance is given object
























































