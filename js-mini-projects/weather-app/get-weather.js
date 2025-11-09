const searchInput = document.getElementById("input-city");
const citiesBox = document.querySelector(".suggestions");
const searchButton = document.getElementById("search-city");

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
  if (cityName.length > 0 || cityName.trim() !== "") {
    searchCity(cityName); 
  } else {
    alert("Please enter a city name.");
    searchInput.focus();
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
  let nameCity = cityName.split(",")[0].trim();
  let cityAdmin1 = cityName.split(",")[1].trim(); 
  const urlGeoAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${nameCity}&count=10&language=en&format=json`
  getGeoLocation(urlGeoAPI, nameCity, cityAdmin1);
}

async function getGeoLocation(urlGeoAPI, nameCity, cityAdmin1) {
  try {
    const response = await fetch(urlGeoAPI);
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      console.warn("No results found for the provided query.");
      return null;
    }
    const match = data.results.find(({ name, admin1, country_code }) =>
      country_code === "MX" &&
      name.trim().toLowerCase() === nameCity.toLowerCase() &&
      admin1.trim().toLowerCase() === cityAdmin1.toLowerCase()
    );
    if (match) {
      const { name, latitude, longitude, admin1 } = match;
      getWeather(latitude, longitude, name, admin1);
    } else {
      console.warn("No matching city found in Mexico.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching geolocation data:", error);
    return null;
  }
}

async function getWeather(latitude, longitude, currentCity, admin1) {
  const urlWeatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,cloud_cover,rain,precipitation,showers,snowfall`
  try {
    const response = await fetch(urlWeatherAPI);
    const data = await response.json();
    showWeatherData(data, currentCity, admin1);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function showWeatherData(data, currentCity, admin1) {
  console.log(data);
  const containerWeatherIcon = document.querySelector(".weather-icon");
  const tempElem = document.getElementById("temp");
  const currentCityElem = document.getElementById("city");
  const humidityElem = document.querySelector(".humidity");
  const windSpeedElem = document.querySelector(".wind");
  if (data.current.is_day === 1) {
    containerWeatherIcon.innerHTML = '<i class="fa-solid fa-sun fa-10x"></i>';
  } else {
    containerWeatherIcon.innerHTML = '<i class="fa-solid fa-moon fa-10x"></i>';
  }
  currentCityElem.textContent = `${currentCity}, ${admin1}`;
  tempElem.textContent = `${data.current.temperature_2m}°C`;
  humidityElem.textContent = `${data.current.relative_humidity_2m}%`;
  windSpeedElem.textContent = `${data.current.wind_speed_10m}km/h`;
}

getCurrentCoords();