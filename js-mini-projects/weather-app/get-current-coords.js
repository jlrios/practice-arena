// Retrieves the user's current coordinates and resolves the city name using Nominatim (OpenStreetMap)
async function getCurrentCoords() {
  // Clear and focus the search input
  searchInput.value = "";
  searchInput.focus();

  // Check if geolocation is supported
  if (!navigator.geolocation) {
    console.warn("Geolocation is not supported by this browser.");
    return;
  }

  try {
    // Wrap getCurrentPosition in a Promise for cleaner async/await syntax
    const position = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );

    // Extract latitude and longitude
    const { latitude, longitude } = position.coords;

    // Build the reverse geocoding API URL
    const urlGeoAPI = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    // Fetch the data from OpenStreetMap
    const response = await fetch(urlGeoAPI);
    const data = await response.json();

    // Verify that valid data exists
    if (data && data.address) {
      // Determine the most accurate name available
      const currentCity =
        data.address.city || data.address.town || data.address.village || "Unknown";

      // Get the state or administrative area
      const admin1 = data.address.state || "Unknown";

      console.log(`Detected location: ${currentCity}, ${admin1}`);

      // Call the weather function with coordinates and location info
      getWeather(latitude, longitude, currentCity, admin1);
    } else {
      console.warn("No location data found for the given coordinates.");
    }
  } catch (error) {
    // Handle different geolocation errors
    if (error.code === 1) {
      console.warn("User denied access to location.");
    } else if (error.code === 2) {
      console.warn("Position unavailable.");
    } else if (error.code === 3) {
      console.warn("Geolocation request timed out.");
    } else {
      console.error("Error fetching geolocation data:", error);
    }
  }
}
