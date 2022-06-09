const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');

function getSearchText(text) {
    if (text) {
        location.href = `https://www.google.com/search?q=${text}`;
        searchBox.value = '';
    } else {
        searchBox.focus();
    }
}

searchBtn.addEventListener('click', e => {
    getSearchText(searchBox.value);
});

searchBox.addEventListener('keyup', e => {
    if (e.which === 13) {
        getSearchText(searchBox.value);
    }
});
