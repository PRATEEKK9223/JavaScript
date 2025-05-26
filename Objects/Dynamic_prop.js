
let student={
    name:"parteek",
    sex:"male"
}

let dinamicproperty="age";
student[dinamicproperty]=20;

console.log(student.age);

// New version

let dynamic="age";

let Employee={
    EId:101,
    Ename:"RAyan",
    [dynamic]:34
}

console.log(Employee.age);

//Differnt ways of Invoking the propertices of Objects

console.log(Employee["Ename"]);  //this by using bracket operator
console.log(Employee.Ename); // this is using dot Operator