// Seperate set For day And set for night
const nightAndDaySet = () => {
    // const time = new Date().getHours();

    // if (time > 6 && time < 18) {
    //     return infoSet.filter(set => set.for === 'day');
    // } else {
    //     return infoSet.filter(set => set.for === 'night');
    // }

    return infoSet;
};

// Pick Set Randomly
const finalSet = () => {
    let set = nightAndDaySet();

    //Picker
    const targ = Math.floor(Math.random() * set.length);

    return set[targ];
};

// Dom Elements
const qouteCatcher = document.querySelector('#qoute-catcher');
const body = document.querySelector('body');
const dateCatcher = document.querySelector('#date-catcher');

// Bring Set to Dom
function pushSet(set) {
    const cDate = new Date();
    const image = set.img;
    const qoute = set.qoute;

    body.style.backgroundImage = `url(${image})`;
    qouteCatcher.textContent = qoute;
    dateCatcher.textContent = `${cDate.getMonth()}/${cDate.getUTCDate()}/${cDate.getFullYear()}-${cDate.getHours()}:${cDate.getMinutes()}`;
}

pushSet(finalSet());
