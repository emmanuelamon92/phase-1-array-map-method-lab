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

const titleCased = tutorials.map(individualPhrase => {

  const individualPhrase = example.split(' ')
  for (let i in individualPhrase){
    individualPhrase[i] = individualPhrase[i].charAt(0).toUpperCase() + individualPhrase[i].slice(1)
  }
  let newTutorials = individualPhrase.join(' ')
  return newTutorials;
  
})