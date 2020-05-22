console.log("==============This is demo of .filetr in array======================");


// find/ filter function in an array - filter elements through function , return first/all values that make it return true

// let points =[50,40,45,38,20] .filter value > 30
//result new arraay [50,40,45,38] so it will give out values graater than 30

let numberListArray = [23,4,5,23,5,6,8,98,10];

// remove number which are les than 5 and keep remaining in other array

function aboutFilter(){
    let result =[];
    for (let i = 0; i< numberListArray.length; i++){
        if (numberListArray [i] >5) {
            result.push(numberListArray[i]);
        }
    }
    return result;
}
console.log(aboutFilter());

//filter function in one line

function moreThan5 (number){
    return number >5;
}
console.log(moreThan5(6));

let finalArray = () =>{
    return numberListArray.filter(moreThan5);

};
console.log(finalArray());












//filter the boject

let userNameList=[
    {id:1,name:"John"},
    {id:2,name:"mark"},
    {id:3,name:"Bill"},
];
console.log(userNameList);
let upDatedList = userNameList.filter((user) => {
    return user.id < 3;
});
console.log(upDatedList);

//for each function in a array-- calls function for every element, doesnot return anything. to transform array

const array1=["a","b","c"];
const aboutForEach = () => {
    console.log("demo of forEach function");
    array1.forEach((element)=>{
        console.log(element);
        
    });
    
};
aboutForEach();

// code test for .forEach

const items =["item1","item2","item3"];
const copyItems =[];

//simple for loop function

//              for (let i=0; i < items.length ; i ++ ){
//
//                copyItems.push(items[i]);
//              };
//                console.log(copyItems);



//using the for each loop


items.forEach(function(index){
    copyItems.push(index);
});
console.log(" this is .forEach " + "  " + copyItems);





// .map method in an array which takes function as an arguemnet

//map function creates a new array from results of calling function for every element.

const arrayList =[1,2,3,4,6];
//map with function

const newArrayList = arrayList.map(
    function(index){
        return index + 2;
        }
    );

    console.log(newArrayList);

    const newArrayListRound = arrayList.map(Math.round);
    console.log(newArrayListRound);

    //sort function - sorts the array in place then returns it
        //sort function will return an array with first ascending order(takes first number of each value)
console.log("=================================sorting Function========================================");

        let monthSort ={
        1 :  "January",
        12:"December",
        3 : "March",
        5 : "May",
        6 : "June",
        7 :"July",
        2 :"Febuary",
        8 :"August",
        9 :"september",
        4 : "april",
        10:"october",
        11:"november"
         };
 
        console.log(monthSort);

        
    /*
        monthSort.sort((a, b) => {
            if (a > b)
                return -1;
            if (a < b)
                return 1;
            return 0;
        });
        */
      
        






















































