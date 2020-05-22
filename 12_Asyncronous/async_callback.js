/**
 * callback function
 *      callback function is call within the fuinction
 */




const post={
    {title:"postOne",body:"some text about postOne"},
    {title:"postTwo",body:"some text about postTwo"}

};

let outPut ="";
function printPost() {
    setTimeout(( => {
        post.forEach((post) =>{
            outPut += `<li>${post.title} :=> ${post.body}</li>`;
        });
        document.body.innerHTML = outPut;
    },1000)
    );
    
}

function createPost(post,callback){
    setTimeout(() =>{
        post.push(post);
        callback();
    },2000);
}

let postThree ={title:"postThree",body:"some text about post Three"};

//createpost(postThree);
//printPost();

createPost(postThree,printPost);



