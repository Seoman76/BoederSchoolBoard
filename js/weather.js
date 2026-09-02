/* ==========================================
   Böder SchoolBoard
   Version 0.2.5
   Wettermodul
========================================== */

async function loadWeather() {

    try {

        const url =
            "https://api.open-meteo.com/v1/forecast" +
            "?latitude=50.673" +
            "&longitude=7.188" +
            "&current=temperature_2m,weather_code" +
            "&timezone=Europe%2FBerlin";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Wetter konnte nicht geladen werden.");
        }

        const data = await response.json();

        const temperature = Math.round(
            data.current.temperature_2m
        );

        const weatherCode = data.current.weather_code;

        let icon = "☀️";

        switch (weatherCode) {

            case 0:
                icon = "☀️";
                break;

            case 1:
            case 2:
                icon = "🌤️";
                break;

            case 3:
                icon = "☁️";
                break;

            case 45:
            case 48:
                icon = "🌫️";
                break;

            case 51:
            case 53:
            case 55:
            case 61:
            case 63:
            case 65:
                icon = "🌧️";
                break;

            case 71:
            case 73:
            case 75:
                icon = "❄️";
                break;

            case 95:
                icon = "⛈️";
                break;

        }

        const weather = document.getElementById("weather");

        if (weather) {

            weather.textContent =
                `${icon} ${temperature}°C • Königswinter`;

        }

    }

    catch (error) {

        console.error(error);

        const weather = document.getElementById("weather");

        if (weather) {

            weather.textContent =
                "⚠️ Wetter nicht verfügbar";

        }

    }

}
