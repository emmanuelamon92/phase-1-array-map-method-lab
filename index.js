//iterate through array
//iterate through string for words
//iterate in iteration
//capitalize first letter
//foreach vs map
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(){ 
//   return tutorials.map(function(tutorial){
//       tutorial = tutorial.split(' ')

//       const upperWord = tutorial.map(function(word){
//         word = word.charAt(0).toUpperCase() + word.slice(1)
//         return word
//       })

//       // for (let word in tutorial){
//       //   tutorial[word] = tutorial[word].charAt(0).toUpperCase() + tutorial[word].slice(1)
//       // }

//       // let newTutorials = tutorial.join(' ')
//       // console.log(newTutorials)
//       // return newTutorials;
//       return upperWord.join(' ')
//   })
// }

// const titleCased = () => tutorials.map(tutorial => {

//   tutorial = tutorial.split(' ')
//   for (let word in tutorial){
//     console.log(word)
//     tutorial[word] = tutorial[word].charAt(0).toUpperCase() + tutorial[word].slice(1)
//   }
//   // const upperWord = tutorial.map(word => {
//   //   word = word.charAt(0).toUpperCase() + word.slice(1)
//   //   return word
//   // })
//   let newTutorials = tutorial.join(' ') 
//   return newTutorials;
//   // return upperWord.join(' ')
// })

const titleCased = () => tutorials.map(tutorial => {
  let wordArray = tutorial.split(' ')
  let titlizedArray = wordArray.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return titlizedArray.join(" ")

})