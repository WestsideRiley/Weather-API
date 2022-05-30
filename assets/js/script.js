document.getElementById("city").append("Atlanta");

var requestUrl = 'http://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
       console.log(data);

  //Code for the main top panel of the page
  {     
  //Adds images and current skies
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

  //Adds the Current Humidity Data        
       var CurrentHumidity = data.current.humidity;
       var TodayHumidity = document.getElementById("CurrentHumidity");
       TodayHumidity.append(CurrentHumidity);

  //Adds the Current UV index Data      
       var CurrentUVindex = data.current.uvi;
       var TodayUV = document.getElementById("CurrentUV");
       TodayUV.append(CurrentUVindex);

  //Adds the Current Wind Speed Data      
       var CurrentWindSpeed = data.current.wind_speed;
       var TodayWindspeed = document.getElementById("CurrentWind");
       TodayWindspeed.append(CurrentWindSpeed);

  //Adds the Current Temperature Data       
       var CurrentTemp = data.current.temp;
       var TodayTemp = document.getElementById("CurrentTemp");
       var CurrentTemp=(CurrentTemp-273.15)*(9/5)+32; 
       var CurrentTemp=Math.trunc(CurrentTemp);
       TodayTemp.append(CurrentTemp);
    
    
      

  }

  var unixTime = data.daily[0].dt;
  var day1ms = new Date(unixTime*1000);
  var day1date = day1ms.toLocaleString()
  var ForecastPanelDate1 = document.getElementById("date1");
  ForecastPanelDate1.append(day1date);

  var unixTime = data.daily[1].dt;
  var day2ms = new Date(unixTime*1000);
  var day2date = day2ms.toLocaleString()
  var ForecastPanelDate2 = document.getElementById("date2");
  ForecastPanelDate2.append(day2date);

  var unixTime = data.daily[2].dt;
  var day3ms = new Date(unixTime*1000);
  var day3date = day3ms.toLocaleString()
  var ForecastPanelDate3 = document.getElementById("date3");
  ForecastPanelDate3.append(day3date);

  var unixTime = data.daily[3].dt;
  var day4ms = new Date(unixTime*1000);
  var day4date = day4ms.toLocaleString()
  var ForecastPanelDate4 = document.getElementById("date4");
  ForecastPanelDate4.append(day4date);

  var unixTime = data.daily[4].dt;
  var day5ms = new Date(unixTime*1000);
  var day5date = day5ms.toLocaleString()
  var ForecastPanelDate5 = document.getElementById("date5");
  ForecastPanelDate5.append(day5date);


//Criteria for selecting the correct image for the five day forecast
  {
  //picture criteria for the first forecast panel
  {
      if(data.daily[0].weather[0].main==="Clear"){
        var Forecast1 = document.getElementById("pic1");
        Forecast1.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
      }

      if(data.daily[0].weather[0].main==="Thunderstorm"){
        var Forecast1 = document.getElementById("pic1");
        Forecast1.src = "./assets/images/5729387_cloudy_lightning_weather_cloud_forecast_icon.png"; 
    }

    if(data.daily[0].weather[0].main==="Drizzle"){
        var Forecast1 = document.getElementById("pic1");
        Forecast1.src = "./assets/images/5729390_drip_cloud_drop_forecast_weather_icon.png"; 
    }

    if(data.daily[0].weather[0].main==="Rain"){
        var Forecast1 = document.getElementById("pic1");
        Forecast1.src = "./assets/images/5729383_cloud_raining_weather_forecast_rain_icon.png";
    }

    if(data.daily[0].weather[0].main==="Snow"){
        var Forecast1 = document.getElementById("pic1");
        Forecast1.src = "./assets/images/5729380_cloudy_snow_winter_cloud_snowflake_icon.png"; 
      }

    if(data.daily[0].weather[0].main==="Mist"||data.daily[0].weather[0].main==="Smoke"||data.daily[0].weather[0].main==="Haze"||data.daily[0].weather[0].main==="Dust"||data.daily[0].weather[0].main==="Fog"||data.daily[0].weather[0].main==="Sand"||data.daily[0].weather[0].main==="Dust"||data.daily[0].weather[0].main==="Ash"||data.daily[0].weather[0].main==="Squall"||data.daily[0].weather[0].main==="Tornado"){
        var Forecast1 = document.getElementById("pic1");
        Forecast1.src = "./assets/images/5729388_fog_foggy_forecast_weather_icon.png"; 
    }

    if(data.daily[0].weather[0].main==="Clear"){
        var Forecast1 = document.getElementById("pic1");
        Forecast1.src = "./assets/images/5729378_sun_sunny_weather_climate_forecast_icon.png"; 
    }        

     if(data.daily[0].weather[0].main==="Clouds"){
        var Forecast1 = document.getElementById("pic1");
        Forecast1.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
     }

  }
  //picture criteria for the second forecast panel
  {
    if(data.daily[1].weather[0].main==="Clear"){
      var Forecast2 = document.getElementById("pic2");
      Forecast2.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
    }

    if(data.daily[1].weather[0].main==="Thunderstorm"){
      var Forecast2 = document.getElementById("pic2");
      Forecast2.src = "./assets/images/5729387_cloudy_lightning_weather_cloud_forecast_icon.png"; 
  }

  if(data.daily[1].weather[0].main==="Drizzle"){
      var Forecast2 = document.getElementById("pic2");
      Forecast2.src = "./assets/images/5729390_drip_cloud_drop_forecast_weather_icon.png"; 
  }

  if(data.daily[1].weather[0].main==="Rain"){
      var Forecast2 = document.getElementById("pic2");
      Forecast2.src = "./assets/images/5729383_cloud_raining_weather_forecast_rain_icon.png";
  }

  if(data.daily[1].weather[0].main==="Snow"){
      var Forecast2 = document.getElementById("pic2");
      Forecast2.src = "./assets/images/5729380_cloudy_snow_winter_cloud_snowflake_icon.png"; 
    }

  if(data.daily[1].weather[0].main==="Mist"||data.daily[1].weather[0].main==="Smoke"||data.daily[1].weather[0].main==="Haze"||data.daily[1].weather[0].main==="Dust"||data.daily[1].weather[0].main==="Fog"||data.daily[1].weather[0].main==="Sand"||data.daily[1].weather[0].main==="Dust"||data.daily[1].weather[0].main==="Ash"||data.daily[1].weather[0].main==="Squall"||data.daily[1].weather[0].main==="Tornado"){
      var Forecast2 = document.getElementById("pic2");
      Forecast2.src = "./assets/images/5729388_fog_foggy_forecast_weather_icon.png"; 
  }

  if(data.daily[1].weather[0].main==="Clear"){
      var Forecast2 = document.getElementById("pic2");
      Forecast2.src = "./assets/images/5729378_sun_sunny_weather_climate_forecast_icon.png"; 
  }        

   if(data.daily[1].weather[0].main==="Clouds"){
      var Forecast2 = document.getElementById("pic2");
      Forecast2.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
   }

  }
  //picture criteria for the third forecast panel
  {
    if(data.daily[2].weather[0].main==="Clear"){
      var Forecast3 = document.getElementById("pic3");
      Forecast3.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
    }

    if(data.daily[2].weather[0].main==="Thunderstorm"){
      var Forecast3 = document.getElementById("pic3");
      Forecast3.src = "./assets/images/5729387_cloudy_lightning_weather_cloud_forecast_icon.png"; 
  }

  if(data.daily[2].weather[0].main==="Drizzle"){
      var Forecast3 = document.getElementById("pic3");
      Forecast3.src = "./assets/images/5729390_drip_cloud_drop_forecast_weather_icon.png"; 
  }

  if(data.daily[2].weather[0].main==="Rain"){
      var Forecast3 = document.getElementById("pic3");
      Forecast3.src = "./assets/images/5729383_cloud_raining_weather_forecast_rain_icon.png";
  }

  if(data.daily[2].weather[0].main==="Snow"){
      var Forecast3 = document.getElementById("pic3");
      Forecast3.src = "./assets/images/5729380_cloudy_snow_winter_cloud_snowflake_icon.png"; 
    }

  if(data.daily[2].weather[0].main==="Mist"||data.daily[2].weather[0].main==="Smoke"||data.daily[2].weather[0].main==="Haze"||data.daily[2].weather[0].main==="Dust"||data.daily[2].weather[0].main==="Fog"||data.daily[2].weather[0].main==="Sand"||data.daily[2].weather[0].main==="Dust"||data.daily[2].weather[0].main==="Ash"||data.daily[2].weather[0].main==="Squall"||data.daily[2].weather[0].main==="Tornado"){
      var Forecast3 = document.getElementById("pic3");
      Forecast3.src = "./assets/images/5729388_fog_foggy_forecast_weather_icon.png"; 
  }

  if(data.daily[2].weather[0].main==="Clear"){
      var Forecast3 = document.getElementById("pic3");
      Forecast3.src = "./assets/images/5729378_sun_sunny_weather_climate_forecast_icon.png"; 
  }        

   if(data.daily[2].weather[0].main==="Clouds"){
      var Forecast3 = document.getElementById("pic3");
      Forecast3.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
   }

  }
  //picture criteria for the fourth forecast panel
  {
    if(data.daily[3].weather[0].main==="Clear"){
      var Forecast4 = document.getElementById("pic4");
      Forecast4.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
    }

    if(data.daily[3].weather[0].main==="Thunderstorm"){
      var Forecast4 = document.getElementById("pic4");
      Forecast4.src = "./assets/images/5729387_cloudy_lightning_weather_cloud_forecast_icon.png"; 
  }

  if(data.daily[3].weather[0].main==="Drizzle"){
      var Forecast4 = document.getElementById("pic4");
      Forecast4.src = "./assets/images/5729390_drip_cloud_drop_forecast_weather_icon.png"; 
  }

  if(data.daily[3].weather[0].main==="Rain"){
      var Forecast4 = document.getElementById("pic4");
      Forecast4.src = "./assets/images/5729383_cloud_raining_weather_forecast_rain_icon.png";
  }

  if(data.daily[3].weather[0].main==="Snow"){
      var Forecast4 = document.getElementById("pic4");
      Forecast4.src = "./assets/images/5729380_cloudy_snow_winter_cloud_snowflake_icon.png"; 
    }

  if(data.daily[3].weather[0].main==="Mist"||data.daily[3].weather[0].main==="Smoke"||data.daily[3].weather[0].main==="Haze"||data.daily[3].weather[0].main==="Dust"||data.daily[3].weather[0].main==="Fog"||data.daily[3].weather[0].main==="Sand"||data.daily[3].weather[0].main==="Dust"||data.daily[3].weather[0].main==="Ash"||data.daily[3].weather[0].main==="Squall"||data.daily[3].weather[0].main==="Tornado"){
      var Forecast4 = document.getElementById("pic4");
      Forecast4.src = "./assets/images/5729388_fog_foggy_forecast_weather_icon.png"; 
  }

  if(data.daily[3].weather[0].main==="Clear"){
      var Forecast4 = document.getElementById("pic4");
      Forecast4.src = "./assets/images/5729378_sun_sunny_weather_climate_forecast_icon.png"; 
  }        

   if(data.daily[3].weather[0].main==="Clouds"){
      var Forecast4 = document.getElementById("pic4");
      Forecast4.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
   }

  }
  //picture criteria for the fifth forecast panel
  {
    if(data.daily[4].weather[0].main==="Clear"){
        var Forecast5 = document.getElementById("pic5");
        Forecast5.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
    }

    if(data.daily[4].weather[0].main==="Thunderstorm"){
        var Forecast5 = document.getElementById("pic5");
        Forecast5.src = "./assets/images/5729387_cloudy_lightning_weather_cloud_forecast_icon.png"; 
    }

    if(data.daily[4].weather[0].main==="Drizzle"){
        var Forecast5 = document.getElementById("pic5");
        Forecast5.src = "./assets/images/5729390_drip_cloud_drop_forecast_weather_icon.png"; 
    }

    if(data.daily[4].weather[0].main==="Rain"){
        var Forecast5 = document.getElementById("pic5");
        Forecast5.src = "./assets/images/5729383_cloud_raining_weather_forecast_rain_icon.png";
    }

    if(data.daily[4].weather[0].main==="Snow"){
        var Forecast5 = document.getElementById("pic5");
        Forecast5.src = "./assets/images/5729380_cloudy_snow_winter_cloud_snowflake_icon.png"; 
      }

    if(data.daily[4].weather[0].main==="Mist"||data.daily[4].weather[0].main==="Smoke"||data.daily[4].weather[0].main==="Haze"||data.daily[4].weather[0].main==="Dust"||data.daily[4].weather[0].main==="Fog"||data.daily[4].weather[0].main==="Sand"||data.daily[4].weather[0].main==="Dust"||data.daily[4].weather[0].main==="Ash"||data.daily[4].weather[0].main==="Squall"||data.daily[4].weather[0].main==="Tornado"){
        var Forecast5 = document.getElementById("pic5");
        Forecast5.src = "./assets/images/5729388_fog_foggy_forecast_weather_icon.png"; 
    }

    if(data.daily[4].weather[0].main==="Clear"){
        var Forecast5 = document.getElementById("pic5");
        Forecast5.src = "./assets/images/5729378_sun_sunny_weather_climate_forecast_icon.png"; 
    }        

    if(data.daily[4].weather[0].main==="Clouds"){
        var Forecast5 = document.getElementById("pic5");
        Forecast5.src = "./assets/images/5729391_cloudy_weather_cloud_forecast_rain_icon.png"; 
    }

  }
 }


}
);

