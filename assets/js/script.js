document.getElementById("city").append("Atlanta");

var requestUrl = 'http://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
       console.log(data);

       var CurrentSkies = data.current.weather[0].main;
       var TodaySkies = document.getElementById("CurrentSkies");
       TodaySkies.append(CurrentSkies);


       if(data.current.weather[0].main==="Thunderstorm"){
            var SkyImage = document.getElementById("Skies");
            SkyImage.src = "./assets/images/5729387_cloudy_lightning_weather_cloud_forecast_icon.png"; 
        }

        if(data.current.weather[0].main==="Drizzle"){
            var SkyImage = document.getElementById("Skies");
            SkyImage.src = "./assets/images/5729390_drip_cloud_drop_forecast_weather_icon.png"; 
        }

        if(data.current.weather[0].main==="Rain"){
            var SkyImage = document.getElementById("Skies");
            SkyImage.src = "./assets/images/5729383_cloud_raining_weather_forecast_rain_icon.png";
        }

        if(data.current.weather[0].main==="Snow"){
              var SkyImage = document.getElementById("Skies");
              SkyImage.src = "./assets/images/5729380_cloudy_snow_winter_cloud_snowflake_icon.png"; 
          }

        if(data.current.weather[0].main==="Mist"||data.current.weather[0].main==="Smoke"||data.current.weather[0].main==="Haze"||data.current.weather[0].main==="Dust"||data.current.weather[0].main==="Fog"||data.current.weather[0].main==="Sand"||data.current.weather[0].main==="Dust"||data.current.weather[0].main==="Ash"||data.current.weather[0].main==="Squall"||data.current.weather[0].main==="Tornado"){
            var SkyImage = document.getElementById("Skies");
            SkyImage.src = "./assets/images/5729388_fog_foggy_forecast_weather_icon.png"; 
        }

        if(data.current.weather[0].main==="Clear"){
            var SkyImage = document.getElementById("Skies");
            SkyImage.src = "./assets/images/5729378_sun_sunny_weather_climate_forecast_icon.png"; 
        }        

         if(data.current.weather[0].main==="Clouds"){
            var SkyImage = document.getElementById("Skies");
            SkyImage.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
         }

         
       
       var CurrentHumidity = data.current.humidity;
       var TodayHumidity = document.getElementById("CurrentHumidity");
       TodayHumidity.append(CurrentHumidity);

       var CurrentUVindex = data.current.uvi;
       var TodayUV = document.getElementById("CurrentUV");
       TodayUV.append(CurrentUVindex);

       var CurrentWindSpeed = data.current.wind_speed;
       var TodayWindspeed = document.getElementById("CurrentWind");
       TodayWindspeed.append(CurrentWindSpeed);

       var CurrentTemp = data.current.temp;
       var TodayTemp = document.getElementById("CurrentTemp");
       var CurrentTemp=(CurrentTemp-273.15)*(9/5)+32; 
       var CurrentTemp=Math.trunc(CurrentTemp);
       TodayTemp.append(CurrentTemp);
    
    
    }
);

