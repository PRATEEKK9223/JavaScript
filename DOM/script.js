let h1=document.querySelector("h1");
console.log(h1.getAttribute("class"));
h1.setAttribute("class","newclass");//this will overrides the privious class name give new class name as specified
console.log(h1.getAttribute("class"));


let newElement=document.createElement("button");//this will create a new button element
newElement.innerText="click me";
document.body.prepend(newElement);

console.log(h1.classList);

h1.classList.add("newclass2");
console.log(h1.classList);
h1.classList.add("newclass3");
console.log(h1.classList);
h1.classList.remove("newclass2");
console.log(h1.classList);







