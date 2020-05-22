

console.log("this is intro to class in javascript");


//normal Object


class printer{
    constructor (){}

    print(){
        console.log("this will print");
        
    }
    
    scan(){
        console.log("this will scan");
        
    }
    copy(){
        console.log("this will log");
        
    }
    fax(){

        console.log("this will fax");
        
    }
    wireless(){

        console.log("this is wireless function");

        
    }

}

let OrderOne =new printer();
console.log("orderOne");
OrderOne.scan()+""+OrderOne.print()+""+OrderOne.fax();





