
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
// Defining an arrow function called 'titleCased'
const titleCased = () => {

  // Using map method to iterate over each element in the 'tutorials array'
  return tutorials.map((line) => {
    
    //spliting the current line into an array of words using the space bar as the separator
    const words = line.split(" ");

    //Mapping each token in the words array
    const capitalizedTokens = words.map(

      // For each word it capitalizes the first character to upperCase
      // Using the .slice to combines/ joins it with the rest of the words
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    //Joining of the capitalized words back together into a single string
    const response = capitalizedTokens.join(" ");
    return response;
  });
};