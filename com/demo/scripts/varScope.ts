//Understand scoping
//run it in chrome/firefox

function sumVar(){
    for(var i=0; i<10; i++){
        var sum = 10;
        sum += i;
        console.log("printing value of sum for var...." + sum);
    }
    console.log("Value of sum for outside var loop...." + sum);
}

function sumLet(){
    for(let x=0; x<10; x++){
        let sum1 = 10;
        sum1 += x;
        console.log("printing value of sum for let...." + sum1);
    }
    console.log("Value of sum outside for loop...." + sum1);
}

sumVar();
sumLet();