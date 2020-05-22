

//Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array

let array123 = (nums) {

    // variables declaration.
    result = false;
    counter = 0,
    index = 0;
    arr = [1,2,3];

     // base condition check. like array length should not be less than 3.
    if(nums.length < 3){
         return result;
    }

    //for loop for iterating over array and finding desired pattern
    for(let i = 0; i < nums.length; i++){

        //pattern found in array
        if(counter == 3){
          result = true;
          return result;
        }

        if(nums[i] == arr[counter]){
             index++; 
             counter++;
        }
        else if(counter != 0){
             i = index-1;
             counter = 0;
        }
    }     
    if (counter == 3) {
        result = true;
        return result;
    }  
};
