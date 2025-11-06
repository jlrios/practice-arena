const searchInput = document.getElementById("inputCity");
const citiesBox = document.getElementById("suggestions");
const searchButton = document.getElementById("searchCity");
let suggestions = [];
let index = -1;
let typingTimer;

async function fetchCities(q) {
  const urlGeoAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${q}&count=100&language=en&format=json`;
  const response = await fetch(urlGeoAPI);
  const data = await response.json();
  suggestions = (data.results || [])
    .filter(element => element.country_code === "MX")
    .map(element => ({
      name: element.name,
      admin1: element.admin1,
      latitude: element.latitude,
      longitude: element.longitude,
      elevation: element.elevation
    }));
  renderSuggestions();
}

function renderSuggestions() {
  citiesBox.innerHTML = "";
  if (suggestions.length === 0) {
    citiesBox.style.display = "none";
    return;
  }
  citiesBox.style.display = "block";
  suggestions.forEach((item, i) => {
    const div = document.createElement("div");
    div.textContent = `${item.name}, ${item.admin1}`;
    div.className = "suggestion";
    if (i === index) {
      div.classList.add("active");
    }
    div.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectSuggestion(`${item.name}, ${item.admin1}`);
    });
    citiesBox.appendChild(div);
  });
}

function selectSuggestion(city) {
  searchInput.value = city;
  citiesBox.innerHTML = "";
  citiesBox.style.display = "none";
  index = -1;
}

searchButton.addEventListener("click", () => {
  const cityName = searchInput.value.trim();
  if (cityName.length > 0) {
    searchCity(cityName);
  }
});

searchInput.addEventListener("input", async () => {
  clearTimeout(typingTimer);
  const q = searchInput.value.trim();
  if (q.length < 2) {
    citiesBox.innerHTML = "";
    citiesBox.style.display = "none";
    return;
  }
  typingTimer = setTimeout(async () => fetchCities(q), 300);
});

searchInput.addEventListener("keydown", e => {
  if (citiesBox.style.display === "none") return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    index = (index + 1) % suggestions.length;
    renderSuggestions();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    index = (index - 1 + suggestions.length) % suggestions.length;
    renderSuggestions();
  } else if (e.key === "Enter" || e.key === "Tab") {
    if (index >= 0) {
      e.preventDefault();
      selectSuggestion(`${suggestions[index].name}, ${suggestions[index].admin1}`);
    }
  } 
  else if (e.key === "Escape") {
    citiesBox.innerHTML = "";
    citiesBox.style.display = "none";
    index = -1;
  }
});

function searchCity(cityName) {
  const urlGeoAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`
  getGeoLocation(urlGeoAPI, cityName);
}

async function getGeoLocation(urlGeoAPI, cityName) {
  fetch(urlGeoAPI)
    .then(response => response.json())
    .then(data => {
      const filteredResults = data.results.filter(element => element.country_code === "MX");
      filteredResults.forEach(element => {
        let name = element.name;
        let latitude = element.latitude;
        let longitude = element.longitude;
        let elevation = element.elevation;
        let admin1 = element.admin1;
        let country = element.country_code;
        console.log(name, admin1, country);
        if (name.trim().toLowerCase() === cityName.toLowerCase() && admin1.trim().toLowerCase() === cityName.toLowerCase() && country === "MX") {
          console.log(`City: ${name}, Latitude: ${latitude}, Longitude: ${longitude}, Elevation: ${elevation}, State: ${admin1}, Country: ${country}`);
        }
      });
    }).catch(error => {
      console.error('Error fetching geolocation data:', error);
    });
}

async function getWeather(latitude, longitude, current) {
  const urlWeatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,cloud_cover,rain,precipitation,showers,snowfall`
  try {
    const response = await fetch(urlWeatherAPI);
    const data = await response.json();
    console.log('Current Weather Data:', data);
    showWeatherData(data, currentCity);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function showWeatherData(data, currentCity) {
  const tempElem = document.getElementById("temp");
  const currentCityElem = document.getElementById("city");
  const humidityElem = document.getElementById("humidity");
  const windSpeedElem = document.getElementById("wind-speed");
  currentCityElem.textContent = currentCity;
  tempElem.textContent = `${data.current.temperature_2m}°C`;
  humidityElem.textContent = `${data.current.relative_humidity_2m}%`;
  windSpeedElem.textContent = `${data.current.wind_speed_10m}km/h`;
}

getCurrentCoords();