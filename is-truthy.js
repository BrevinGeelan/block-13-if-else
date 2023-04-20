const a1 = 'null'
if(a1 = 'false') {
    console.log("The boolean value 'false' is falsy")
}
else if(a1 = 'null') {
    console.log("The 'null' value is falsy")
}
else if(a1 = 'undefined') {
    console.log("'undefined' is falsy")
} 
else if(a1 = '0') {
    console.log("The number '0' is falsy (the only falsy number)")
} else if(a1 = '""') {
    console.log("the empty string is falsy (the only falsy string)")
} 
else {
console.log("true")
}