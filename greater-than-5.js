//First I'm gonna assign my inputs that i'll be testing a name (a & b) to write into the code.
//Second I'll make an if statement for if the value of both inputs are equal to 5 to have the console log print 'true'
//Next I'll make an else if statement for if a is equal to 5 and b is greater than 5 to have the console print 'true'
//Next I'll do another else if statement with the roles in the previous step for a & b reversed.
//Next I'll do a final else if statment for if both values are greater than 5 to have the console print 'true' again
//Last for the code I'll make an else statement for the console to print 'false' if both values are not greater than or equal to 5.
//Then we test some values in the debugger to see if everything is correct.
const a=5
const b=5
if (a === 5 && b === 5) {
    console.log("True!")
} else if (a === 5 && b > 5) {
    console.log("True!")
} else if (a > 5 && b === 5) {
    console.log("True!")
} else if (a > 5 && b > 5) {
    console.log("True!")
} else {
    console.log("False!")
}