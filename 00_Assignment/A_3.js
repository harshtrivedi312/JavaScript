console.log("-------Question1------");
/*
Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

answerCell(false, false, false) → true
answerCell(false, false, true) → false
answerCell(true, false, false) → false
*/


function answerCall (isMom,isMorning,isAsleep){ 

if (isMom && isMorning && isAsleep)
{
    return true;
}
else if ((!isMom) && isMorning && isAsleep)
{
    return false;
}
else if ((!isMorning) && isMom && isAsleep)
{
    return true;
}
else
{
    return true;
}
}
console.log(answerCall(false,false,false));


console.log("------Question2------");
/*
Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, 
with the exception that if “bOk” is true, b does not need to be greater than a.

inOrder(1, 2, 4, false) → true
inOrder(1, 2, 1, false) → false
inOrder(1, 1, 2, true) → true
*/


function GraterThan(intA,intB,intC,bOK){
    
    if(bOK) 
 {
    return intC > intB;
     
}

else {
    return intB > intA && intC > intB;
    
}
}

console.log(GraterThan(1,2,4,false));
console.log(GraterThan(1,2,1,false));
console.log(GraterThan(1,1,2,true));

console.log("----------class Session----------");


