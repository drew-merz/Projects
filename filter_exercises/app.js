// function fiveAndGreaterOnly(arr) {
//     const fiveAbove = arr.filter(function(num){
//         if(num >= 5){
//             return num
//         }
//     }) 
//     return fiveAbove
//   }
//   
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
////////////////////////////////////////////////////////////////////
// function evensOnly(arr) {
//     const justEvens = arr.filter(function(num){
//         if(num % 2 === 0)
//         return num
//     })
//     return justEvens
//   }
  
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
////////////////////////////////////////////////////////////////////////
// function fiveCharactersOrFewerOnly(arr) {
//     const fiveCharsOnly = arr.filter(function(word){
//         if(word.length <= 5){
//             return word
//         }
//     })
//     return fiveCharsOnly
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
/////////////////////////////////////////////////////////////////////////
// function peopleWhoBelongToTheIlluminati(arr){
//     const clubMembers = arr.filter(function(person){
//         if(person.member == true){
//             return person
//         }
//     })
//     return clubMembers
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));
//   // =>
//   //[ { name: 'Angelina Jolie', member: true },
//   //  { name: 'Paris Hilton', member: true },
//   //  { name: 'Bob Ziroll', member: true } ]
//////////////////////////////////////////////////////////////////////
function ofAge(arr){
    const oldEnough = arr.filter(function(person){
        if(person.age >= 18){
            return person
        }
    })
    return oldEnough
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
  