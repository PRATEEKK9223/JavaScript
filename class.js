class person{
    constructor(name,age){
        this.pname=name;
        this.page=age;
    }
}

class Employee extends person{
    constructor(name,age,role,contact){
        super(name,age);
        this.role=role;
        this.Econtact=contact;
    }

     getDetails(){
        console.log("Name : "+this.pname);//here this keyword is used to refer the current object
        console.log("Age : "+this.page);
         console.log("Role : "+this.role);
          console.log("Contact : "+this.Econtact);

    }
}

//Employee.getDetails();

let obj=new Employee("prateek",19,"Developer",763346754);

obj.getDetails();

