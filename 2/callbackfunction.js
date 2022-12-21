function createQuote(quote, callback) {
    let myQuote = "Like I alwats sat, " + quote;
    callback(myQuote); //2
}

function logQuote(quote) {
    console.log(quote + ' Yes..');
}

createQuote(" you will getting better!", logQuote);