function forloop(){
    let value=[];
    for(let num=0;num<5;num++){
        value[num]=num;
    }
    for(let num=0;num<5;num++){
        console.log(value[num] +" ");
    }
}

function WhileLoop(){
    let num=0;
    while(num<5){
        console.log(num);
        num++;
    }
}



forloop();
WhileLoop();
