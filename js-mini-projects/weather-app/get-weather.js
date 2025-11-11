// ================================
// Project 1
// Mini Weather App
// Author: José L. Ríos
// Date: November 2024
// Description: Fetches and displays weather data for cities in Mexico
// Last modified: November 2024  
// ================================

// DOM elements
const searchInput = document.getElementById("name-city");
const searchButton = document.getElementById("search-city");
const citiesSelect = document.querySelector(".cities-suggestions");

let suggestions = [];
let index = -1;

// -------------------------------
// Utility: Unified error handler
// -------------------------------
function handleError(error, context = "") {
  console.error(`[${context}]`, error.message || error);
}

// -------------------------------
// Utility: Debounce to reduce API calls
// -------------------------------
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// -------------------------------
// Render suggestions below the input
// -------------------------------
function renderSuggestions() {
  citiesSelect.innerHTML = "";

  if (suggestions.length === 0) {
    citiesSelect.style.display = "none";
    return;
  }

  citiesSelect.style.display = "block";

  suggestions.forEach((item, i) => {
    const div = document.createElement("div");
    div.textContent = `${item.name}, ${item.admin1}`;
    div.className = "suggestion";
    div.setAttribute("role", "option");

    if (i === index) {
      div.classList.add("active");
      div.setAttribute("aria-selected", "true");
      div.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    // Mouse selection
    div.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectSuggestion(`${item.name}, ${item.admin1}`);
    });

    citiesSelect.appendChild(div);
  });
}

// -------------------------------
// Handle suggestion selection
// -------------------------------
function selectSuggestion(city) {
  searchInput.value = city;
  citiesSelect.innerHTML = "";
  citiesSelect.style.display = "none";
  index = -1;
}

// -------------------------------
// Search for city coordinates
// -------------------------------
function searchCity(cityName) {
  const [nameCity, cityAdmin1 = ""] = cityName.split(",").map(str => str.trim());
  const urlGeoAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${nameCity}&count=10&language=en&format=json`;
  getGeoLocation(urlGeoAPI, nameCity, cityAdmin1);
}

// -------------------------------
// Display weather information
// -------------------------------
function showWeatherData(data, currentCity, admin1) {
  const weatherIcon = document.querySelector(".weather-details");
  const temperature = document.getElementById("current-temp");
  const location = document.getElementById("current-city");
  const humidity = document.getElementById("data-humidity");
  const windSpeed = document.getElementById("data-wind");

  // Set icon depending on time of day
  weatherIcon.innerHTML = data.current.is_day === 1
    ? '<i class="fa-solid fa-sun fa-6x"></i>'
    : '<i class="fa-regular fa-moon fa-6x"></i>';

  location.textContent = `${currentCity}, ${admin1}`;
  temperature.textContent = `${data.current.temperature_2m}°C`;
  humidity.textContent = `${data.current.relative_humidity_2m}%`;
  windSpeed.textContent = `${data.current.wind_speed_10m} km/h`;
}
// -------------------------------
// Search city button click handler
// -------------------------------
searchButton.addEventListener("click", () => {
  const cityName = searchInput.value.trim();
  if (cityName) {
    searchCity(cityName);
  } else {
    alert("Please enter a city name.");
    searchInput.focus();
  }
});

// -------------------------------
// Handle typing input (with debounce)
// -------------------------------
searchInput.addEventListener("input", debounce(async () => {
  const query = searchInput.value.trim();
  if (query.length < 2) {
    citiesSelect.innerHTML = "";
    citiesSelect.style.display = "none";
    return;
  }
  await fetchCities(query);
}, 300));

// -------------------------------
// Keyboard navigation in suggestions
// -------------------------------
searchInput.addEventListener("keydown", e => {
  if (citiesSelect.style.display === "none") return;

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
  } else if (e.key === "Escape") {
    citiesSelect.innerHTML = "";
    citiesSelect.style.display = "none";
    index = -1;
  }
});

// -------------------------------
// Hide suggestions when clicking outside
// -------------------------------
document.addEventListener("click", e => {
  if (!e.target.closest(".cities-suggestions") && e.target !== searchInput) {
    citiesSelect.style.display = "none";
  }
});
// -------------------------------
// Fetch cities that match the query
// -------------------------------
async function fetchCities(query) {
  const urlGeoAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=100&language=en&format=json`;
  
  try {
    const response = await fetch(urlGeoAPI);
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    
    const data = await response.json();
    suggestions = (data.results || [])
      .filter(({ country_code }) => country_code === "MX") // Limit to Mexico
      .map(({ name, admin1, latitude, longitude, elevation }) => ({
        name,
        admin1,
        latitude,
        longitude,
        elevation
      }));
      
    renderSuggestions();
  } catch (error) {
    handleError(error, "City fetch");
  }
}

// -------------------------------
// Fetch geolocation data (coordinates)
// -------------------------------
async function getGeoLocation(urlGeoAPI, nameCity, cityAdmin1) {
  try {
    const response = await fetch(urlGeoAPI);
    if (!response.ok) throw new Error(`Network error: ${response.status}`);

    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      console.warn("No results found for the provided query.");
      return null;
    }

    const match = data.results.find(({ name, admin1, country_code }) =>
      country_code === "MX" &&
      name.trim().toLowerCase() === nameCity.toLowerCase() &&
      admin1?.trim().toLowerCase() === cityAdmin1.toLowerCase()
    );

    if (match) {
      const { name, latitude, longitude, admin1 } = match;
      console.log("Matching city found:", match);
      getWeather(latitude, longitude, name, admin1);
    } else {
      console.warn("No matching city found in Mexico.");
    }
  } catch (error) {
    handleError(error, "Geolocation fetch");
  }
}

// -------------------------------
// Fetch weather data from Open-Meteo API
// -------------------------------
async function getWeather(latitude, longitude, currentCity, admin1) {
  const urlWeatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,cloud_cover,rain,precipitation,showers,snowfall`;

  try {
    const response = await fetch(urlWeatherAPI);
    if (!response.ok) throw new Error(`Weather API error: ${response.status}`);
    const data = await response.json();
    showWeatherData(data, currentCity, admin1);
  } catch (error) {
    handleError(error, "Weather fetch");
  }
}

// -------------------------------
// Automatically detect current location on load
// -------------------------------
getCurrentCoords();
