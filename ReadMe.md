# Weather Hangout Predictor

## Project Overview

The Weather Hangout Predictor is a static web application designed to help predict time to hang out with farmers. It fetches real-time and forecasted weather data for a given city and, based on precipitation predictions, calculates a "Hangout Chance" percentage. The core idea is that more rain means less farming work, thus a higher likelihood of free time for social activities.

## Features

- **Current Weather Display**: Shows real-time temperature, conditions, humidity, and wind speed for the selected city.
- **"Hangout Chance" Calculation**: Dynamically calculates a percentage chance of getting to hang out based on the probability and volume of precipitation in the forecast.
- **5-Day Forecast**: Provides a detailed outlook for the upcoming five days, including min/max temperatures, weather descriptions, precipitation chance, and expected rainfall.
- **User City Input**: Allows the user to enter any city worldwide to get its specific weather and hangout forecast.
- **Responsive Design**: Styled with Tailwind CSS to ensure a clean and adaptive user interface across various devices.
- **Emoji-Rich Interface**: Uses intuitive emojis to visually represent weather and activity suggestions.

## Technologies Used

### Frontend

- HTML5  
- CSS3 (via Tailwind CSS CDN)  
- JavaScript (Vanilla JS)  

### Backend (for API Proxy)

- Node.js (for Serverless Function)

### APIs

- OpenWeatherMap API (5-day/3-hour forecast & Current Weather)

### Deployment

- Vercel (for static site hosting and serverless functions)

## Setup & Local Development

To run this application locally, you'll need Node.js installed on your machine.

### Clone the Repository

git clone https://github.com/YourUsername/WeatherHangoutPredictor.git
cd WeatherHangoutPredictor
Create Serverless Function File
Ensure you have an api directory in your project root, and inside it, a file named weather.js with the content for the serverless function.

WeatherHangoutPredictor/
├── index.html
└── api/
    └── weather.js
Set Up OpenWeather API Key
You will need an API key from OpenWeather. Sign up for a free account at https://openweathermap.org/api.

Deployment
This application is deployed on Vercel:
🔗 https://weather-hangout-preditor.vercel.app/

Usage
Open the deployed application in your browser.

The application will initially load the weather for "North Manchester."

Enter a different city name in the input field and click "Get Weather" to view its forecast and hangout chances.

Observe the current weather, daily forecast, "Hangout Chance" percentage, and suggested activities.

Future Improvements
Hourly Data for Day: Add a feature to show the hourly changes for the current day allowing for better details.

More Granular Activity Logic: Refine activity suggestions with more complex logic based on multiple weather parameters (e.g., wind, temperature ranges).

Weather Radar: Add a feature to allow users to see the weather radar instead of just the details.

User Preferences: Allow users to set their preferred activities or farming schedule to tailor hangout suggestions more accurately.


