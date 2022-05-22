let infoSet = [
    {
        qoute: 'Our greatest glory is not in never falling, but in rising every time we fall',
        img: 'https://wallpapercave.com/wp/wp2471726.jpg',
        for: 'day',
    },
    {
        qoute: `When you have a dream, you've got to grab it and never let go`,
        img: `https://hdqwalls.com/wallpapers/newyork-night-buildings-4k-mk.jpg`,
        for: `night`,
    },
];

// if True, Will Get the Set stored form local storage
if (localStorage.getItem('infoSet')) {
    infoSet = JSON.parse(localStorage.getItem('infoSet'));
}

// Dom Elements
const showModalBtn = document.querySelector('#add-set-btn');
const addSetModal = document.querySelector('#add-set');
const cancelModal = document.querySelector('#cancel-modal');
const qouteInput = document.querySelector('#qoute-input');
const imgInput = document.querySelector('#img-input');
const bestFor = document.querySelector('#best-input');
const addBtn = document.querySelector('#addSet');

// Show Add modal
showModalBtn.addEventListener(
    'click',
    e => (addSetModal.style.display = 'block')
);
// Hide Add Modal
cancelModal.addEventListener(
    'click',
    e => (addSetModal.style.display = 'none')
);

addBtn.addEventListener('click', e => {
    if (imgInput.value === '' || qouteInput.value === '') {
        alert('please fill all fields!');
    } else {
        infoSet.push({
            qoute: qouteInput.value,
            img: imgInput.value,
            // for: bestFor.value,
        });

        localStorage.setItem('infoSet', JSON.stringify(infoSet));

        addSetModal.style.display = 'none';
        imgInput.value = '';
        qouteInput.value = '';
    }
});
