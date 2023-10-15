//Dependencies
const mathLibrary = require('./lib/math'); 
const quotesLibrary = require('./lib/quotes'); //by default quotes/index.js

//App object - Module scaffolding (building basic sketelon structure)
const app = {}; 

//configuration
app.config = { //property added 
  timeBetweenQuotes:1000, 
};

//Function that prints a random quotes 
app.printOneQuote = function printOneQuote(){
  //get all the quotes
  const allQuotes = quotesLibrary.allQuotes(); //allQuotes return an array 
  //get the length of the quotes 
  const quotesLength = allQuotes.length; 
  //pick random quotes
  const randomNumber = mathLibrary.getRandomNumber(1,quotesLength); 
  // Get the quote at that position in the array (minus one)
  const selectedQuotes = allQuotes[randomNumber-1]; 
  console.log(selectedQuotes); 
}

//function that loop indefinitely,calling the printOneQuote()
app.indefiniteLoop = function indefiniteLoop(){
  //create the interval, using the config variable defined above
  setInterval(app.printOneQuote, app.config.timeBetweenQuotes);
}
app.indefiniteLoop(); 