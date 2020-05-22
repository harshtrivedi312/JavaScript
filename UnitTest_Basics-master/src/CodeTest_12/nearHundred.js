/**

Given an variable  n, return true if it is within 10 of 100 or 200. 
Note: Math.abs(num) computes the absolute value of a number.

nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false
 */

function nearHundred(n) {
	//  Code....
	if (n >= 90 && n <= 100 || n>=100 && n<=110)
	return true;

	else if (n >= 190 && n <= 200 || n>=200 && n<=210) 
		return true;
	else{
		return false;
	}
}


exports.nearHundred = nearHundred;
