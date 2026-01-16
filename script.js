// quotes is defined in quotes.js

function loadQuotes() {
    // Check if quotes are loaded
    if (typeof quotes !== 'undefined' && quotes.length > 0) {
        displayRandomQuote();
        document.getElementById('quote-container').classList.add('show');
    } else {
        console.error('Quotes not loaded');
        document.getElementById('quote-display').innerText = "Failed to load wisdom. Spencer must be sleeping.";
        document.getElementById('quote-container').classList.add('show');
    }
}

function displayRandomQuote() {
    if (typeof quotes === 'undefined' || quotes.length === 0) return;

    const quoteDisplay = document.getElementById('quote-display');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    // Fade out
    quoteDisplay.style.opacity = 0;

    setTimeout(() => {
        quoteDisplay.innerText = quote;
        // Fade in
        quoteDisplay.style.opacity = 1;
    }, 200); // Wait for fade out
}

// Add CSS transition for opacity to the quote display
document.addEventListener('DOMContentLoaded', () => {
    const quoteDisplay = document.getElementById('quote-display');
    quoteDisplay.style.transition = 'opacity 0.2s ease';

    loadQuotes();
});
