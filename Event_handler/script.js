let btn=document.getElementById("btn");

let mode="light";

// This code toggles the background color and text color of the document body
// between light and dark modes when the button is clicked.
btn.onclick=()=>{
    if(mode==="light"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        mode="dark";
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        mode="light";
    }
}

let main=document.getElementById("main");

let p1=main.children[0];
let p2=main.children[1];

let para1=document.getElementById("para1");
let para2=document.getElementById("para2");

p1.onclick=()=>{
    para1.style.display="block";
    para2.style.display="none";
}
p2.onclick=()=>{
    para1.style.display="none";
    para2.style.display="block";
}