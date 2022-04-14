// function total(arr) {
//     const result = arr.reduce(function(final, num){
//         final += num
//         return final
//     })
//     return result
//  }
 
//  console.log(total([1,2,3])); // 6
 ////////////////
//  function greatestToLeast(arr) {
//     const biggestToSmallest = arr.reduce(function(final, num){
//        let index = 0
//        while(index < final.length && num < final[index]) index++
//        final.splice(index, 0, num)
//        return final
//     }, [])
//     return biggestToSmallest
//   }
  
//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]
////////////////////
// function totalVotes(arr) {
//     const voted = arr.reduce(function(final, person){
//         if(person.voted){
//             final++
//         }
//         return final
//     }, 0)
//     return voted
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7
//////////////
// function shoppingSpree(arr) {
//     const totalPrice = arr.reduce((final, object) => final + object.price, 0)
//     return totalPrice
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005
//////////////
// function flatten(arr) {
//     const oneArray = arr.reduce(function(result, el){
//         return result.concat(el)
//     }, [])
//     return oneArray
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
////////////////////
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    const ageCategory = (age) => {
        if (age <= 25) return ['young', 'youngVotes']
        if (age <= 35) return ['middle', 'midvotes']
        return ['old', 'oldVotes']
    }
   
       const counter = voters.reduce((acc, { age, voted }) => {
           const [prop, voteProp] = ageCategory(age)
           acc[prop] = (acc[prop]|| 0) + 1
           if (voted){
               acc[voteProp] = (acc[voteProp]|| 0) + 1    
           }
           return acc
       }, {})
    return counter
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/