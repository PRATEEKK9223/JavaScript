let num1=100;
let num2=100;

try{
    if(isNaN(num1)||isNaN(num2)){
        throw new Error("Not a number");
    }
    else{
        if(num2==0){
            throw "Division by 0 Error";
        }
        else{
            let res=num1/num2;
            console.log("result= "+res);     
        }
    }
}catch(e){
    console.log(e);
}
finally{
    console.log("Finnaly executed");
}