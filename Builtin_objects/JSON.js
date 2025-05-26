let JSONonbj={
    "name":"prateek",
    "age":10
}
console.log(JSONonbj);
let strJSONobj=JSON.stringify(JSONonbj);
let obj=JSON.parse(strJSONobj);
console.log(obj);
console.log(typeof(strJSONobj));

