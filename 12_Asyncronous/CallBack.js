/**
 * couple of more examples of callback
 * limitation and issues with callback
 * introduction to new promise API() which is part of es6
 *
 */

/**
 * 1>benifits about promise
 *   -improve the code readability
 * -better controll opver conditional flow
 * -(if else or try catch built in)
 * -promise api copmes of try-catch or error handle
 *
 * 2>>phase of state of promise
 * >fullfiled :action realated to promise has been completes
 * >rejected:action realated to promise has been rejected
 * > pending:action is still in progress and not complketes
 * settled: aAction is fullfilled or rejected..
 */

/*
let demoPromise = new Promise(function (resolve, rejected) {
    if (!resolve) {
        setTimeout(function () {
            console.log("done");

        }, 2000);
    } else {
        console.log("rejected or not done" + rejected);

    }
});

//call to the example...

printAfterSec.then(function (result) {
    console.log(result);

}).catch(function (rejected) {
    console.error(rejected);

});

//Example Two

let isDBB_Online = false;

//promise top connect to db and find the result.
/**
 * check if isDBOnline is true or false
 * if true .....promise should throe resolve with dbConectInfo
 * if False....promise shopuld throw rejected with dbOfline Error
 */

/*
let conectDb = new Promise(function (rtesolve, rejected) {
    if (isDB - Online) {
        let dbConectInfo = {
            userName: "Admin",
            password: "UserOne"
        };
        resolve(dbConnectInfo);
    } else {
        let dbOfline = new Error("server is down our tem is workin on the issue");
        rejected(dbOfline);
    }
});

//when only want to know about resolve

conectDb.then(function (result) {
    console.log(result);

})
    .catch(function (result) {
        console.log(result);

    })
    .finally(function () {
        console.log("the process is completed...");

    });
// same call with arrow function

conectDb.then((result) => {
    console.log(result);

})
    .catch((result) => {
        console.log(result);

    })
    .finally(() => {
        console.log(" completed...");

    });

*/

//promise chaining

new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((result) => {
    console.log(result); //1
    return result * 2; //1*2
  })
  .then((result) => {
    console.log(result); //2
    return result * 2; // 2*2
  })
  .then((result) => {
    console.log(result + " final result"); //4
  })

  .catch((error) => {
    console.log(error);
  });

// two functions
// 1. will generate random number between 1 and 6...
// 2. will promise function that will check if number is even then it is resolved if number is odd then it is
//    rejected.

function rollTheDice() {
  return Math.floor(math.random() * 6 + 1);
}

let checkTheNumber = new Promise((resolve, rejected) => {
  let roll = rollTheDice();
  if (roll % 2 === 0) {
    resolve("it is an even number roll" + roll);
  } else {
    rejected(new Error("it is an odd number roll") + roll);
  }
});
checkTheNumber
  .then((result) => {
    console.log(result);
    return result;
  })
  .catch((error) => {
    console.log(error);
  });

  /**
   * 
   * METHODS OF PROMISE
   * 
   */

//ANCHOR : 
/**
1.promise.all; return result of multiple promise as a single object..
2. promise.allsettled(); will return result of all the promise only when promise is settled...(will not give you pending status)
3. promise.race(); very similar to all()..but only return the first settled promise result

*/ 

// Example of promise.all(); >>>>>>>>> three promise in one array

// promise.all(that takes multiple promisses as args. or an array);
/**
let promiseAll = Promise.all([
    new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("one");
        },3000);
    })
    new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Two");
        },2000);
    })
    new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("Three");
        },1000)
    }),
]);

 */


 //NOTE : 

 /**
  * 
  * about async and await and when to usae it.
  * 
  * 1.async
  * 2.await
  * 
  * //when used before function then return will always be promise
  */


  function getElement(arr){
    if (Array.isArray(arr)){
      return arr;    
    }else{
      throw new Error("this is not an array...");
    }
  }

  //try{
   // console.log(getElement([11,22,33,44]));
    //console.log(getElement("someString goes here"));
  //}  
   //catch(error){
    //console.log(error.message);
    //}
    //getElement([11,22,33,44]).then((result)) => {
      //console.log(result);
    //});
  
    getElement("[11,22,33,44]")
    .then((result) =>{
      console.log(result);
      
    })
.catch((error) =>{
  console.log(error.message);
  
})  

.finally(() => {
  console.log("done!!");
  
})

console.log("code Should continue running");

//will return promise
async function getFileREader(){
  //read the file and its takes somewhwre arounf 1 sec to 10 sec 
  await getFileREader; //await for prom,ise to completed.
  return "file reader is done!!"
}

getFileREader() .then((result) =>{
  console.log(result);
  
})
//NOTE : await only works wirh peomise and async function only...

//await with return function

function waitFor3sec(){
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve("some Task...");
    },3000);
  });
}

saync function callWaitFunction(){
  let result = await waitFor3sec();
  console.log(result);// "Some Task.."
  
}

callWaitFunction();


