let Car={
    color:"red",
    brand:"XUV",
    Model:"XI10",
    speed:40,
    Accelaration:function (speedcount){
        this.speed=this.speed+speedcount;
        return this.speed;
    }
}

console.log(Car.Accelaration(10));
console.log(Car.color);

let name="patee";
let age=30;
let contry="India";

let person={
    name:name,
    age:age,
    contry,//this is modren way 
}

console.log(person.age);
console.log(person.contry);