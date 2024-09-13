const result = document.getElementById("result");
const error = document.getElementById("errors");
const city = document.getElementById("city");
const apiKey = "a333ea03deda44d092f92834240609";

async function getWeather() {
    if (!city.value) {
        error.innerHTML = "Please enter a city name";
        result.innerHTML = "";
        return;
    }

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error("City Not Found");
        }

        console.log(data.current);

        result.innerHTML = `
            <h2>${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Weather: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
        `;
        error.innerHTML = ""; // Clear any previous error messages
    } catch (error) {
        console.log(error);
        error.innerHTML = error.message;
        result.innerHTML = ""; // Clear any previous results
    }
}
