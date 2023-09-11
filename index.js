
const input = document.querySelector(".search-input");

function googleSearch () {
    window.location.href = 'http://google.com/search?q='+ input.value;
}

