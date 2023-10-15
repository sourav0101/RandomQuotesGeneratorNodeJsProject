//Dependencies
const fs = require('fs'); 

//Quotes object - Module scaffolding 
const quotes = {}; 

//Gets all the quotes and return to the user
quotes.allQuotes = function allQuotes(){
    //read the quotes.txt 
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`,'utf8');
    //turn the String into the array 
    const arrayStore = fileContents.split(/\r?\n/);
    //return the array 
    return arrayStore; 
};
module.exports = quotes; 

