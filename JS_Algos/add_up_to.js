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

// speed test
var t1 = performance.now();
addUpTo(1000000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000 } seconds.`)