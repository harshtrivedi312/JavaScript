
console.log("HTML Document");

let element;
// form tags and tag inside the form 
element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].action;

// link tags

element = document.links;
element = document.links[0];
element = document.links[0].id;
element = document.links[0].classList;
element = document.links[0].className;


//script tags

let src = document.scripts;

let scrArray = Array.form(Document.scripts);

scrArray.forEach(function(src){
    console.log(src.getAttribute('src'));
    
    })

document.getElementsByClassName("collection-item").style.background ="red";



console.log(elements);


