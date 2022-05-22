// output weather data
function postData(data) {
    const description = document.querySelector('#description');
    const imageCatcher = document.querySelector('#img-catcher');
    const temperature = document.querySelector('#temperature');

    // console.log(data);
    if (data.success) {
        description.textContent = data.current.weather_descriptions;
        imageCatcher.setAttribute('src', data.current.weather_icons);
        temperature.textContent = `${data.current.temperature}°`;
    } else {
        description.textContent = 'Weather info not available';
        imageCatcher.style.display = 'none';
    }
}

// Catch weather data
async function getWeather() {
    const res = await fetch(
        'http://api.weatherstack.com/current?access_key=1c2de3e0fe8f9014b0b2b66bb8fe0ec4&query=philippines'
    );

    const data = await res.json();

    postData(data);
}

getWeather();
