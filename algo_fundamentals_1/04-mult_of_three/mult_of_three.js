// using a FOR loop, print multiples of 3 from -300 to 0.
// skip -3 and -6.

for(i = 0; i >= -300; i--){
    if((i != -3 && i != -6) && (i % 3 == 0)){
        console.log(i)
    }
}