let array=[10,3,4,5];

let newArray=array.reduce((prev,cur)=>{
    return prev+cur;
})

console.log(array);
console.log(newArray);