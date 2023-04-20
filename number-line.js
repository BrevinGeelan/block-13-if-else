const a=1
const b=-1
const sum = a + b
if (a + b > 100) {
    console.log(sum + " is greater than 100")
} 
else if(a + b < -1000) {
    console.log(sum + " is less than -1000")
} 
else if(a + b < 0) {
    console.log(sum + " is a negative number")
}
else if(sum > 0) {
    console.log(sum + " is greater than 0")
}
else if(sum === 0) {
    console.log(sum + " is equal to 0")
}