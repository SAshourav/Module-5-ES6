const loadQuotes = () =>{
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
loadQuotes();
const displayQuotes = data => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = data.quote;
}