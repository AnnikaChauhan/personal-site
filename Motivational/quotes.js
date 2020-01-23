// test to see if it's linked
// console.log("Hello");

//this will hide the quote box until we want it to start appearing again
document.getElementById("quotebox").hidden = true;

let quotes = ["If you want to achieve greatness stop asking for permission. - Anonymous", "All our dreams can come true if we have the courage to pursue them. - Walt Disney", "Only I can change my life. - Anonymous", "Opportunities don't happen, you create them - Chris Grosser", "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison", "If you're going through hell keep going. - Winston Churchill", "The distance between insanity and genius is measured only by success. - Bruce Feirstein", "To live a creative life, we must lose our fear of being wrong. - Anonymous", "You can do anything, but not everything. - Anonymous", "Courage is resistance to fear, mastery of fear - not absence of fear. - Mark Twain", "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt", "The ones who are crazy enough to think they can change the world, are the ones who do. - Anonymous", "What seems to us as bitter trials are often blessings in disquise. - Oscar Wilde", "The way to get started is to quit talking and begin doing. - Walt Disney", "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill", "Don't let yesterday take up too much of today. - Will Rogers", "Be yourself; everyone else is already taken. - Oscar Wilde", "Be the change that you wish to see in the world. - Mahatma Gandhi", "Everything you can imagine is real. - Pablo Picasso", "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw", "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill"];


// figure out how to move this into an object with the quoter
let quoteObject = {};

//console.log(quotes.length);

let generator = () => {
    let Qindex = Math.floor(Math.random()* (quotes.length));
    return Qindex;
};

// test the function works
//console.log(generator());

// test it logs to the console 
//console.log(quotes[generator()]);

const button = document.querySelector("button");

//test how to inject content into the box 
//document.getElementById("quotebox").innerHTML = "hello";

// on clicking the button you unhide the quotebox and fill it with a quote
button.onclick = function() {
    document.getElementById("quotebox").hidden = false;
    document.getElementById("quotebox").innerHTML = quotes[generator()];
};
