/*


let array = [1, 2, 9];
let count = 0;
for (let i = 0; i < array.length; ++i) {
  if (array[i] == 9) count++;
}

console.log(count);

//////////////////////////////////////////////////////////////////////////////////////////////
let arr1 =[1,2,9,3,4];
let arr2 =[1,2,3,4,9];
let arr3 =[1,2,3,4,5];

function findNine(arr1, value) {
  const element = arr1.find((value) => {
      return value === 9;
  });
  return typeof element === "undefined" ? false : true;
}
console.log(findNine(arr1, 9));
console.log(findNine(arr2, 9));
console.log(findNine(arr3, 9));

*/
/*
function arreyfound(array){
    len = array.length;
    ninefound = false;
    if(len <4){
        for (i =0; i<=len; i++);{
            if (arrey[i]===9)
            ninefound = true;
        }
    }
    else if (len >= 4){
        for(i=0; i<4; i++){
            if (arrey[i] === 9)
            ninefound= true;
        }
    }
    return ninefound
}
console.log(ninefound);
*/



/*
function count() {
  elements1 = [1, 1, 2, 2, 1];
  elements2 = [1, 1, 2, 2, 2, 1];
  elements3 = [1, 1, 1, 2, 2, 2, 1];

  elements1.sort();

  let current = null;
  let count = 0;
  for (let i = 0; i < elements1.length; i++) {
    if (elements1[i] != current) {
      if (count > 0) {
        console.log(current + " comes = " + count + " times");
      }
      current = elements1[i];
      count = 1;
    } else {
      count++;
    }
  }
  if (count > 0) {
    console.log(current + " comes --> " + count + " times");
  }
}
count();
*/

function NoArguementWithReturn(){
    return 8
}
console.log(NoArguementWithReturn());

function WithArguementReturnNumber(number){
    return number + 10;
}
console.log(WithArguementReturnNumber(NoArguementWithReturn()));


function result(){
    total = NoArguementWithReturn() + WithArguementReturnNumber(10);
    return total;
}
console.log(result());












