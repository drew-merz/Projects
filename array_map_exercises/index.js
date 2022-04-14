// ////////////////Double Numbers////////////
// function doubleNumbers(arr){
//     const result = arr.map(function(num){
//         return num * 2
//     }) 
//     return result
// } 
// console.log(doubleNumbers([2, 5, 100]));
// // //////////////Stringify////////////////////////////////
// function stringItUp(arr){
//     const newString = arr.map(function(num){
//         let myString = "" + num
//         return myString
//     })
//     return newString
//   }
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
// ///////////////Proper Grammar////////////////////////
// function capitalizeNames(arr){
//     const newArr = arr.map(name => name.charAt(0).toUpperCase() + name.substr(1).toLowerCase())
//     return newArr
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
//   Output:
//   ["John", "Jacob", "Jingleheimer", "Schmidt"]
// // /////////////////Names Only!!////////////////////////////////
// function namesOnly(arr){
//     const justNames = arr.map(function(prop){
//         return prop["name"]
//     })
//     return justNames
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// // /////////////////////Are You Old Enough///////////////////////////
// function makeStrings(arr){
//     const oldEnough = arr.map(function(prop){
//         if(prop["age"] >= 17){
//             return prop["name"] + " can go to the Matrix"
//         } else(prop["age"] <= 17)
//             return prop["name"] + " is under age!!"
//     })
//     return oldEnough
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
//   // ["Angelina Jolie can go to The Matrix",
//   // "Eric Jones is under age!!",
//   // "Paris Hilton is under age!!",
//   // "Kayne West is under age!!",
//   // "Bob Ziroll can go to The Matrix"]
// /////////////////////Stand Out/////////////////////////////////
function readyToPutInTheDOM(arr){
    
    const newDom = arr.map(function(prop){
        let domContainer = document.createElement("div")
        domContainer.id = "domContainer"
        if(prop === "name"){
            let h1s = document.createElement("h1")
            const nameText = document.createTextNode(prop["name"])
            h1s.appendChild(nameText)
            document.getElementById("domContainer").appendChild(h1s)
        } else(prop === "age")
            let h2s = document.createElement("h2")
            const 
            const ageText = document.createTextNode(prop["age"])
            h2s.appendChild(ageText)
            document.getElementById("domContainer").appendChild(h2s)
    })
    return newDom  
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
//   // ["<h1>Angelina Jolie</h1><h2>80</h2>",
//   // "<h1>Eric Jones</h1><h2>2</h2>",
//   // "<h1>Paris Hilton</h1><h2>5</h2>",
//   // "<h1>Kayne West</h1><h2>16</h2>",
//   // "<h1>Bob Ziroll</h1><h2>100</h2>"]









