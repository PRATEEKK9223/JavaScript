//Literal property without shorthand 
function createCourse(name, status) {
    return {type: "JavaScript", name: name, status: status};
}
function reviewCourse(name) {
    return {type: "JavaScript", name: name};
}
/*Literal property with shorthand 
when the property and the value identifiers have the same name,  
the identifier can be omitted to make it implicit*/
 function createCourse2(name, status) {
    return {type: "JavaScript", name, status};
 }
function reviewCourse2(name) {
    return {type: "JavaScript", name};
 } 

console.log(createCourse("prateek","pass"));

console.log(createCourse2("prateek","pass"));


