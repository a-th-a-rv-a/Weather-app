const dayIcons = {
    "clear sky" : "all/clear-day.svg",
    "overcast clouds" : "all/overcast-day.svg",
    "broken clouds" : "all/overcast-day.svg",
    "scattered clouds" : "all/cloudy.svg",
    "few clouds" : "all/partly-cloudy-day.svg",
    
    "tornado" : "all/tornado.svg",
    "squalls" : "all/tornado.svg",
    "volcanic ash" : "all/tornado.svg",

    "dust" : "all/dust-day.svg",
    "sand" : "all/dust-day.svg",
    "fog" : "all/fog-day.svg",
    "sand/dust whirls" : "all/dust-day.svg",
    "haze" : "all/haze-day.svg",
    "smoke" : "all/smoke.svg",
    "mist" : "all/mist.svg",
    "heavy shower snow" : "all/extreme-snow.svg",
    "shower snow" : "all/extreme-day-snow.svg",
    "light shower snow" : "all/overcast-day-snow.svg",
    "rain and snow" : "all/overcast-sleet.svg",
    "light rain and snow" : "all/overcast-sleet.svg",
    "shower sleet" : "all/extreme-day-sleet.svg",
    "light shower sleet" : "all/overcast-day-sleet.svg",
    "sleet" : "all/sleet.svg",
    "heavy snow" : "all/extreme-snow.svg",
    "snow" : "all/snow.svg",
    "light snow" : "all/snowflake.svg",
    "light rain" : "all/partly-cloudy-day-drizzle.svg",
    "moderate rain" : "all/partly-cloudy-day-rain.svg",
    "heavy intensity rain" : "all/overcast-day-rain.svg",
    "very heavy rain" : "all/extreme-day-rain.svg",
    "extreme rain" : "all/extreme-day-rain.svg",
    "freezing rain" : "all/snowflake.svg",
    "light intensity shower rain" : "all/overcast-drizzle.svg",
    "shower rain" : "all/overcast-day-rain.svg",
    "heavy intensity shower rain" : "all/extreme-day-rain.svg",
    "ragged shower rain" : "all/extreme-day-rain.svg",

    "light intensity drizzle" : "all/partly-cloudy-day-drizzle.svg",
    "drizzle" : "all/partly-cloudy-day-drizzle.svg",
    "heavy intensity drizzle" : "all/extreme-day-rain.svg",
    "light intensity drizzle rain" : "all/overcast-day-drizzle.svg",
    "drizzle rain" : "all/overcast-day-drizzle.svg",
    "heavy intensity drizzle rain" : "all/extreme-day-rain.svg",
    "shower rain and drizzle" : "all/overcast-drizzle.svg",
    "heavy shower rain and drizzle" : "all/extreme-day-rain.svg",
    "shower drizzle" : "all/overcast-day-drizzle.svg",

    "thunderstorm with light rain" : "all/thunderstorms-day-rain.svg",
    "thunderstorm with rain" : "all/thunderstorms-day-overcast-rain.svg",
    "thunderstorm with heavy rain" : "all/thunderstorms-day-extreme-rain.svg",
    "light thunderstorm" : "all/lightning-bolt.svg",
    "thunderstorm" : "all/thunderstorm-day.svg",
    "heavy thunderstorm" : "all/thunderstorms-day-extreme.svg",
    "ragged thunderstorm" : "all/thunderstorms-day-extreme.svg",
    "thunderstorm with light drizzle" : "all/thunderstorms-day-rain.svg",
    "thunderstorm with drizzle" : "all/thunderstorms-day-rain.svg",
    "thunderstorm with heavy drizzle" : "all/thunderstorms-day-extreme-rain.svg",



    
};

const nightIcons = {
    "clear sky" : "all/clear-night.svg",
    "overcast clouds" : "all/overcast-day.svg",
    "broken clouds" : "all/overcast-day.svg",
    "scattered clouds" : "all/cloudy.svg",
    "few clouds" : "all/partly-cloudy-night.svg",
    
    "tornado" : "all/tornado.svg",
    "squalls" : "all/tornado.svg",
    "volcanic ash" : "all/tornado.svg",

    "dust" : "all/dust-night.svg",
    "sand" : "all/dust-night.svg",
    "fog" : "all/fog-night.svg",
    "sand/dust whirls" : "all/dust-night.svg",
    "haze" : "all/haze-night.svg",
    "smoke" : "all/smoke.svg",
    "mist" : "all/mist.svg",
    "heavy shower snow" : "all/extreme-snow.svg",
    "shower snow" : "all/extreme-night-snow.svg",
    "light shower snow" : "all/overcast-night-snow.svg",
    "rain and snow" : "all/overcast-sleet.svg",
    "light rain and snow" : "all/overcast-sleet.svg",
    "shower sleet" : "all/extreme-night-sleet.svg",
    "light shower sleet" : "all/overcast-night-sleet.svg",
    "sleet" : "all/sleet.svg",
    "heavy snow" : "all/extreme-snow.svg",
    "snow" : "all/snow.svg",
    "light snow" : "all/snowflake.svg",
    "light rain" : "all/partly-cloudy-night-drizzle.svg",
    "moderate rain" : "all/partly-cloudy-night-rain.svg",
    "heavy intensity rain" : "all/overcast-night-rain.svg",
    "very heavy rain" : "all/extreme-night-rain.svg",
    "extreme rain" : "all/extreme-night-rain.svg",
    "freezing rain" : "all/snowflake.svg",
    "light intensity shower rain" : "all/overcast-drizzle.svg",
    "shower rain" : "all/overcast-night-rain.svg",
    "heavy intensity shower rain" : "all/extreme-night-rain.svg",
    "ragged shower rain" : "all/extreme-night-rain.svg",

    "light intensity drizzle" : "all/partly-cloudy-night-drizzle.svg",
    "drizzle" : "all/partly-cloudy-night-drizzle.svg",
    "heavy intensity drizzle" : "all/extreme-night-rain.svg",
    "light intensity drizzle rain" : "all/overcast-night-drizzle.svg",
    "drizzle rain" : "all/overcast-night-drizzle.svg",
    "heavy intensity drizzle rain" : "all/extreme-night-rain.svg",
    "shower rain and drizzle" : "all/overcast-drizzle.svg",
    "heavy shower rain and drizzle" : "all/extreme-night-rain.svg",
    "shower drizzle" : "all/overcast-night-drizzle.svg",

    "thunderstorm with light rain" : "all/thunderstorms-night-rain.svg",
    "thunderstorm with rain" : "all/thunderstorms-night-overcast-rain.svg",
    "thunderstorm with heavy rain" : "all/thunderstorms-night-extreme-rain.svg",
    "light thunderstorm" : "all/lightning-bolt.svg",
    "thunderstorm" : "all/thunderstorm-night.svg",
    "heavy thunderstorm" : "all/thunderstorms-night-extreme.svg",
    "ragged thunderstorm" : "all/thunderstorms-night-extreme.svg",
    "thunderstorm with light drizzle" : "all/thunderstorms-night-rain.svg",
    "thunderstorm with drizzle" : "all/thunderstorms-night-rain.svg",
    "thunderstorm with heavy drizzle" : "all/thunderstorms-night-extreme-rain.svg",



    
};




let weather = {
    "apikey": "YOUR_API_KEY",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey)
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;


        const now = new Date();
        const hours = now.getHours();

        const isDay = hours>=6 && hours<19;


        const iconUrl = isDay? dayIcons[description] : nightIcons[description];
        document.querySelector(".city").innerText = "Weather in " + name;
        const iconElement = document.querySelector(".icon");
        iconElement.src = iconUrl;
        iconElement.classList.add("weather-icon");
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        let fileName = `${description}-${isDay ? 'day' : 'night'}`;
        document.body.style.backgroundImage = `url('backgrounds/${fileName}.jpg')`;
    },

    search : function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("guwahati");
