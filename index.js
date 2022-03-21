//question1 ( percentile)

a=[ 13, 5, 67, 100, 82]

let percentile = []; //empty array
let low = 0;  
let high = 10;
let count = 0;

for ( let i =0; i<10; i++){
    let count = 0

    for(let value of a){
        if(value > low && value <= high){ //comparing every element of array
            count += 1 //if success count goes one
        }
    }

    percentile.push(count)
    low +=10;
    high +=10;
}

//question 2 (regarding fibonacci)

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
let fibArray = [];
let numberArray = [];
console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    fibArray.push(n1) //pushing into empty array
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

console.log(fibArray)

for( let i=1; i<= number; i++){
    if(fibArray.includes(i)){ //if it includes -1 or not 
        numberArray.push(-1);
    }else{
        numberArray.push(i)
    }
}

console.log(numberArray)