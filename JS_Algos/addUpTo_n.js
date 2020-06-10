// Suppose we want to write a function that calculates 
// the sum of all numbers from 1 up to (and including) some number n

// for -loop
function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

// different method (quicker?)
function addUpTo(n){
    return n * (n + 1) / 2;
}
