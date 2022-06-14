const searchBox = $('#search-box');
let qoutes = ['Keep Breathing', 'Happiness is Free'];
let images = [
    'https://www.ynetnews.com/PicServer5/2017/02/08/7576628/8833456_8834696_rumble.jpg',
    'https://jooinn.com/images/nature-339.jpg',
];
let suggestions = [];

if (localStorage.getItem('images')) {
    images = JSON.parse(localStorage.getItem('images'));
} else if (localStorage.getItem('qoutes')) {
    qoutes = JSON.parse(localStorage.getItem('qoutes'));
}

if (localStorage.getItem('suggestions')) {
    suggestions = JSON.parse(localStorage.getItem('suggestions'));
}

// auto select from qoutes and images
const getImgAndQoute = i => {
    let targ = Math.floor(Math.random() * i.length);
    return i[targ];
};

// for search box
$('#search-btn').focus(() => {
    if ($('#search-box').val() !== '') {
        if ($('#search-box').val().includes('.com')) {
            let comRemoved = $('#search-box').val().split('.');
            let filtered = suggestions.filter(
                x => x.toLowerCase() !== $('#search-box').val().toLowerCase()
            );
            suggestions = filtered;
            suggestions.push($('#search-box').val());
            localStorage.setItem('suggestions', JSON.stringify(suggestions));
            location.href = `https://${comRemoved[0]}.com`;
        } else {
            let filtered = suggestions.filter(
                x => x.toLowerCase() !== $('#search-box').val().toLowerCase()
            );
            suggestions = filtered;
            suggestions.push($('#search-box').val());
            localStorage.setItem('suggestions', JSON.stringify(suggestions));
            location.href = `https://www.google.com/search?q=${$('#search-box').val()}`;
        }
    }
});

// for search box, animations
$('section').css('background-image', `url(${getImgAndQoute(images)})`);
$('#qoute').text(getImgAndQoute(qoutes));

function searchFocus() {
    // show search suggest
    $('#search-suggest').removeClass('d-none');
    $('#search-suggest').fadeIn();

    // hide qoute wrapper and footer
    $('#qoute-wrapper').slideUp();
    $('footer').fadeOut();
}

function searchBlur() {
    $('#qoute-wrapper').slideDown();
    $('footer').fadeIn();
    $('#search-suggest').fadeOut();
}

// when searc-box was on focus
searchBox.focus(function (e) {
    searchFocus();
});

// when searc-box was on blur
$('#search-box').blur(e => {
    searchBlur();
});

// saving qoute and images
$('#save-btn').on('click', e => {
    if ($('#new-qoute').val() !== '') {
        qoutes.push($('#new-qoute').val());
        localStorage.setItem('qoutes', JSON.stringify(qoutes));
    }
    if ($('#new-image').val() !== '') {
        images.push($('#new-image').val());
        localStorage.setItem('images', JSON.stringify(images));
    }
    location.reload();
});

// output suggestions

suggestions.reverse().forEach(x => {
    const li = document.createElement('li');
    li.classList = 'list';
    li.textContent = x;

    $('#suggestion-list').append(li);
});

$('#suggestion-list').on('click', e => {
    if (e.target.classList.contains('list')) {
        const text = e.target.textContent;
        $('#search-box').val(text);
    }
});

$('#search-box').on('keyup', e => {
    const list = document.querySelectorAll('.list');
    list.forEach(x => {
        if (!x.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            x.style.display = 'none';
        } else {
            x.style.display = '';
        }
    });
});

// date and time
const date = new Date();
$('#time').text(`${date.getHours()}:${date.getMinutes()}`);
$('#date').text(`${date.getMonth() + 1}/${date.getDay() + 12}/${date.getFullYear()}`);
