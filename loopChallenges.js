// Print odds 1-20
function printOdds(){
    for(var i = 1; i<=20; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

// Decreasing multiples of 3
function divisibleBy3(){
    for(var i=100; i>-1; i--) {
        if(i % 3 == 0) {
            console.log(i);
        }
    }
}
//Print the sequence
function sequence(){
    for(var i=4; i>-4; i=i-1.5) {
        console.log(i);
    }
}

//Sigma
function sigmaSum(){
    let sum = 0;
for(var i=1; i<101; i++) {
    sum += i;
}
console.log(sum);
}

//Factorial
function factorial(){
    let product = 1;
for(var i=1; i<13; i++) {
    product = product * i;
}
console.log(product);
}

