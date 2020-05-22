// this is javaScript code test file

it('codeTest One' , ()=>{
    expect(2).toEqual(2);
    expect(44).toEqual(44);
});

/// to create new array from original array from only even numbers
//find even number and print in one array

let ArrOne =[12,24,45,67,86,89,24,12];

// will follow test driven method TDD (test driven devlopment)(write test first and code later)

test(" find even numbers " ,() =>{
    expect(evenNumbers([12,24,45,67,86,89,24,12])).toEqual([
        12,
        24,
        86,
        24,
        12
    ]);
});

const evenNumbers =(array) =>{
    let arr =[];
    for (i =0; i < array.length; i++) {
        if(array [i] % 2 === 0){
            arr.push(array[i]);
        }
    }

console.log(arr);

return arr;

};

//new test

let nameList = ["c","c++","JAVA","JS"];

test(" verify the indexOf ", ()=>{
    expect(aboutIndexOf("Java")).toEqual(2);
});

const aboutIndexOf =(element) => {
    let result = ["C","C++","Java","JS"];

    let indexNUm =result.indexOf(element);
    console.log(indexNUm);
    return indexNUm;
};

test(" verify the last index () ", () =>{

    expect(aboutLastIndexOf(["C","C++","JAVA","JS","C++","JS"],"JS")).toEqual(5);

});

const aboutLastIndexOf = (array, element) => {
    let lastIndex = array.lastIndexOf(element);
    console.log(lastIndex);
    return lastIndex;
    
}























































