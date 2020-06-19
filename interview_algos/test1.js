// 1. Write a function which takes a list of numbers and returns the 
//length of the longest continuous stretch of a single number.  
//For example, on the input [1,7,7,3], the correct return is 2, 
//because there are two 7's in a row. On the input [1,7,7,3,9,9,9,4,9], 
//the correct return is 3, since there are three 9’s in a row.

function longestRow(arr){
    let longestStretch = 0  // current longest is 0. 
    let count = 1  // set a counter. 
    let prevNum; // set a previous number to set value as when making comparison for later.
    for (const val of arr){ // learned this in an algorithm course i'm taking, instead of using the usual for (let i = 0; i < arr.length;i++){}
        if (val == prevNum){ // compares the value to previous number.
            count++
        } else if (count > longestStretch){ // if counter is greater than the stretch, set the new stretch as count
            longestStretch = count
            count = 1 // reset counter. 
        }
        prevNum = val // set previous number as value, before looping again.
    }
    return longestStretch 
}

// 2. Given a list of peoples' birth year and death year, find the year(s) 
//in which the most people were alive at the same time. ex: [[1910, 1950], [1900, 1951], [1945, 2000]] 
//would return [1945, 1946, 1947, 1948, 1949, 1950]

function mostPeopleLiving(arrOfArr){   
    let answer = []
    let allYears = []

    for (let val of arrOfArr){ // utilized what i learned in previous question.
        for (let i = val[0]; i <= val[1]; i++){ 
            allYears.push(i) // push all numbers between birth, and death date. to new array.
        }
    }

    allYears.sort(function(a, b){ // sort the array in numeric order
        return a - b
    })

    let count = 1
    let dupe = arrOfArr.length // arrOfArr.length gives us how many people there are.
    let prevNum;

    for (let val of allYears){
        if (val == prevNum){
            count++ // only count if value is equivalent to previous number

            if (count === dupe){
                answer.push(val)
            }

        } else {
            count = 1
        }
        prevNum = val
    }
    return answer
}

mostPeopleLiving( [[1910, 1950], [1900, 1951], [1945, 2000]] )
