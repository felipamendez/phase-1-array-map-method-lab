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
// need to split words in each array, not array, so gotta iterate that somehow??
// const titleCased (tutorials) => {
//   let tutorials[i] = tutorials[i idk].split(" ") //apparently dont need i with map, need i with original for loop syntax. map doesnt need one bc callback func, candyList.map((candy) = {}) it feeds each candy into callback function
//   for (let i = 0; i < words.length; i += 1) {
//   const titleCasedDeclatation //somehow declare the function  
//   }
//   return tutorials
// }

// const titleCasedDeclaration = tutorials.map((word) => word[0].toUpperCase)



// console.log(titleCasedDeclaration)

const titleCased = () => {
return tutorials.map(tutorial =>
  {
    return tutorial.split(" ").map(word => word.substring(0,1).toUpperCase() + word.substring(1, word.length)).join(' ')
  })
}

titleCased(tutorials);