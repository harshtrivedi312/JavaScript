// regex assignment

// check if first char of string is capital or not

function upperCase(str){

    Regexp = /^[A-Z]/;
    if (Regexp.test(str))
    {console.log("given string has first char in upper case");
    }
    else {
        console.log("given string has no first upper case");
        
    }
}

upperCase("Abcd");
upperCase("abcd");

// check credit card number

// first chek if all are number
// chek if it is more than one
// check if total numbers entered are 16

function chkCCNumber(ccNumber){

    //return typeof(ccNumber)=== 'number';
    if (ccNumber === 'number' && ccNumber.length > 1 && ccNumber.tostring().length === 16)
    return true;
    else{
        return false;
    }


}

console.log(chkCCNumber(1234567890111213));

//

//check email address

function valid_email(str)
{
let emailmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
// \w includes special characters 
// [\.-] search special characters 
// [@] find this sign
// [\.-] after the address
// [ ] three or two leters at the end

if(emailmail.test(str))
{  
console.log("Valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}

valid_email();









































