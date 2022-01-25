var hello = "hello"



function upperCaseAndLowerCase() {
    var upperCaseHello = hello.toUpperCase()
    var lowerCaseHello = hello.toLowerCase()
    var lowerAndUpperHello = upperCaseHello.concat(lowerCaseHello)

    return lowerAndUpperHello
    
}
console.log(upperCaseAndLowerCase())

function findMiddleIndex() {
    var animal = "zebra"
    var letterArr = animal.split("")
    var middle = letterArr[Math.floor(letterArr.length / 2)]
    var middleIndex = letterArr.indexOf("b")
    
    
    

    return middleIndex
}
console.log(findMiddleIndex())

var helloWorld = "Hello World"
function returnFirstHalf(hello){
    var firstHalf = hello.slice(0, 2)

    return firstHalf

}
console.log(returnFirstHalf(hello))