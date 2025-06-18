
export default async function handler(request, response) {
    const { city } = request.query;
    
    const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY; 
    const units = 'imperial'; 

    if (!city) {
        return response.status(400).json({ error: 'City parameter is required.' });
    }
    if (!OPENWEATHER_API_KEY) {
        return response.status(500).json({ error: 'Server configuration error: OpenWeather API key not found.' });
    }

    try {
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${OPENWEATHER_API_KEY}`);
        const currentWeatherData = await currentWeatherResponse.json();
        
        if (!currentWeatherResponse.ok) {
            return response.status(currentWeatherResponse.status).json({ error: currentWeatherData.message || 'Failed to fetch current weather data from OpenWeather.' });
        }

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${OPENWEATHER_API_KEY}`);
        const forecastData = await forecastResponse.json();
        
        if (!forecastResponse.ok) {
            return response.status(forecastResponse.status).json({ error: forecastData.message || 'Failed to fetch forecast weather data from OpenWeather.' });
        }

        response.status(200).json({ current: currentWeatherData, forecast: forecastData });

    } catch (error) {
        console.error("Serverless function error:", error);
        response.status(500).json({ error: `An unexpected server error occurred: ${error.message}` });
    }
}