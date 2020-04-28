// Set myNumber to 86.  Set myName to your name.
// now swap myNumber into myName & vice versa.

let myNumber = 86
let myName = "Luke"

const swap = (name, number) => {
    let init_name = name
    let init_num = number.toString()

    myName = "my name is: " + init_num
    myNumber = "my number is: " + init_name

    console.log(myName)
    console.log(myNumber)
}

swap(myName, myNumber)