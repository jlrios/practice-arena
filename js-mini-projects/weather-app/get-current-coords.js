let currentCity = "";  

async function getCurrentCoords() {
  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser.');
    return;
  }
  navigator.geolocation.getCurrentPosition(async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const urlGeoAPI = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    try {
      const response = await fetch(urlGeoAPI);
      const data = await response.json();
      // console.log(data);
      if (Object.keys(data).length > 0) {
        currentCity = data.address.city;
        // console.log(`User's city: ${currentCity}`);
        // console.log(`Coordinates: Latitude ${latitude}, Longitude ${longitude}`);
        getWeather(latitude, longitude, currentCity); 
      } else {
        console.log('No results found for the given coordinates.');
      }
    } catch (error) {
      console.error('Error fetching geolocation data:', error);
    }
  });
}