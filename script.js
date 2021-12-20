// Get quotes from API

const newQuoteBtn = document.querySelector("#new-quote");
const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");

let apiQuotes = [];

getQuotes();

async function getQuotes() {


    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const res = await fetch(apiUrl);
        apiQuotes = await res.json();
        newQuote();
    } catch (err) {
        alert("Somethig is wrong");
    }


}

function newQuote() {


    // Pick random quote

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if (!quote.author) {
        quoteAuthor.textContent = 'unknown';
    } else {
        quoteAuthor.textContent = quote.author;
    }


    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;


}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}



newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);



