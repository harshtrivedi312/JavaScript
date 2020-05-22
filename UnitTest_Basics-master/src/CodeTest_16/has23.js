/**
Given an int array length 2, return true if it contains a 2 or a 3.

has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false
 */
/*
function has23(nums) {
	//code hear..

	if (nums[0]==2 || nums[0]==3 || nums[1]==2 || nums[1]==3){

	return true;
}
	 else {
		return false;
	}
};
*/


const has23 = (abc)=>{

	for( let i= 0 ; i = abc.length ; i++){
	if (abc[0]==2 || abc[0]==3 || abc[1]==2 || abc[1]==3)

	return true;


	else{
		return false;
	}
	}

};

exports.has23 = has23;


