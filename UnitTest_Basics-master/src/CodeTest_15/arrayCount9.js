/**
Given an array of numbers, return the number of 9's in the array.


arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
 */

function arrayCount9(array) {
	//code ....
	let nineCounter =0;
	for (let i=0; i<array.length ; i++){
		if(array[i]===9){
			nineCounter++;
		}
	}
	return nineCounter;
	

}

exports.arrayCount9 = arrayCount9;
