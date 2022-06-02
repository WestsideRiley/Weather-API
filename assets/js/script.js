document.getElementById("Austin").addEventListener('click',FillAustin);
document.getElementById("Chicago").addEventListener('click',FillChicago);
document.getElementById("NewYork").addEventListener('click',FillNewYork);
document.getElementById("Orlando").addEventListener('click',FillOrlando);
document.getElementById("SanFrancisco").addEventListener('click',FillSanFrancisco);
document.getElementById("Seattle").addEventListener('click',FillSeattle);
document.getElementById("Atlanta").addEventListener('click',FillAtlanta);
document.getElementById("Denver").addEventListener('click',FillDenver);


function FillAustin(){
  clear();
  document.getElementById("city").append("Austin");
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';
  
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
  
  //Adds the date to each panel of the five day forecast
    {
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
    }
  
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
  
  //Code for adding temperature data to each panel of the five day forecast
    {
      var DailyTemp1 = data.daily[0].temp.day;
      var ForeTemp1 = document.getElementById("temp1");
      var DailyTemp1=(DailyTemp1-273.15)*(9/5)+32; 
      var DailyTemp1=Math.trunc(DailyTemp1);
      ForeTemp1.append(DailyTemp1);
  
      var DailyTemp2 = data.daily[1].temp.day;
      var ForeTemp2 = document.getElementById("temp2");
      var DailyTemp2=(DailyTemp2-273.15)*(9/5)+32; 
      var DailyTemp2=Math.trunc(DailyTemp2);
      ForeTemp2.append(DailyTemp2);
  
      var DailyTemp3 = data.daily[2].temp.day;
      var ForeTemp3 = document.getElementById("temp3");
      var DailyTemp3=(DailyTemp3-273.15)*(9/5)+32; 
      var DailyTemp3=Math.trunc(DailyTemp3);
      ForeTemp3.append(DailyTemp3);
  
      var DailyTemp4 = data.daily[3].temp.day;
      var ForeTemp4 = document.getElementById("temp4");
      var DailyTemp4=(DailyTemp4-273.15)*(9/5)+32; 
      var DailyTemp4=Math.trunc(DailyTemp4);
      ForeTemp4.append(DailyTemp4);
  
      var DailyTemp5 = data.daily[4].temp.day;
      var ForeTemp5 = document.getElementById("temp5");
      var DailyTemp5=(DailyTemp5-273.15)*(9/5)+32; 
      var DailyTemp5=Math.trunc(DailyTemp5);
      ForeTemp5.append(DailyTemp5);
    } 
   
  //Code for adding temperature data to each panel of the five day forecast
    {
      var WindspeedDay1 = data.daily[0].wind_speed;
      var Windspeed1 = document.getElementById("wind1");
      Windspeed1.append(WindspeedDay1);
  
      var WindspeedDay2 = data.daily[1].wind_speed;
      var Windspeed2 = document.getElementById("wind2");
      Windspeed2.append(WindspeedDay2);
  
      var WindspeedDay3 = data.daily[2].wind_speed;
      var Windspeed3 = document.getElementById("wind3");
      Windspeed3.append(WindspeedDay3);
  
      var WindspeedDay4 = data.daily[3].wind_speed;
      var Windspeed4 = document.getElementById("wind4");
      Windspeed4.append(WindspeedDay4);
  
      var WindspeedDay5 = data.daily[4].wind_speed;
      var Windspeed5 = document.getElementById("wind5");
      Windspeed5.append(WindspeedDay5);
    }  
  
  //Code for adding the Humidity to the five day forecast
    {
      var HumidityDay1 = data.daily[0].humidity;
      var Humidity1 = document.getElementById("humid1");
      Humidity1.append(HumidityDay1);
  
      var HumidityDay2 = data.daily[1].humidity;
      var Humidity2 = document.getElementById("humid2");
      Humidity2.append(HumidityDay2);
  
      var HumidityDay3 = data.daily[2].humidity;
      var Humidity3 = document.getElementById("humid3");
      Humidity3.append(HumidityDay3);
  
      var HumidityDay4 = data.daily[3].humidity;
      var Humidity4 = document.getElementById("humid4");
      Humidity4.append(HumidityDay4);
  
      var HumidityDay5 = data.daily[4].humidity;
      var Humidity5 = document.getElementById("humid5");
      Humidity5.append(HumidityDay5);
    }
  }
  );
  }

function FillChicago(){
  clear();
  document.getElementById("city").append("Chicago");
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=-87.6298&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';
  
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
  
  //Adds the date to each panel of the five day forecast
    {
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
    }
  
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
  
  //Code for adding temperature data to each panel of the five day forecast
    {
      var DailyTemp1 = data.daily[0].temp.day;
      var ForeTemp1 = document.getElementById("temp1");
      var DailyTemp1=(DailyTemp1-273.15)*(9/5)+32; 
      var DailyTemp1=Math.trunc(DailyTemp1);
      ForeTemp1.append(DailyTemp1);
  
      var DailyTemp2 = data.daily[1].temp.day;
      var ForeTemp2 = document.getElementById("temp2");
      var DailyTemp2=(DailyTemp2-273.15)*(9/5)+32; 
      var DailyTemp2=Math.trunc(DailyTemp2);
      ForeTemp2.append(DailyTemp2);
  
      var DailyTemp3 = data.daily[2].temp.day;
      var ForeTemp3 = document.getElementById("temp3");
      var DailyTemp3=(DailyTemp3-273.15)*(9/5)+32; 
      var DailyTemp3=Math.trunc(DailyTemp3);
      ForeTemp3.append(DailyTemp3);
  
      var DailyTemp4 = data.daily[3].temp.day;
      var ForeTemp4 = document.getElementById("temp4");
      var DailyTemp4=(DailyTemp4-273.15)*(9/5)+32; 
      var DailyTemp4=Math.trunc(DailyTemp4);
      ForeTemp4.append(DailyTemp4);
  
      var DailyTemp5 = data.daily[4].temp.day;
      var ForeTemp5 = document.getElementById("temp5");
      var DailyTemp5=(DailyTemp5-273.15)*(9/5)+32; 
      var DailyTemp5=Math.trunc(DailyTemp5);
      ForeTemp5.append(DailyTemp5);
    } 
   
  //Code for adding temperature data to each panel of the five day forecast
    {
      var WindspeedDay1 = data.daily[0].wind_speed;
      var Windspeed1 = document.getElementById("wind1");
      Windspeed1.append(WindspeedDay1);
  
      var WindspeedDay2 = data.daily[1].wind_speed;
      var Windspeed2 = document.getElementById("wind2");
      Windspeed2.append(WindspeedDay2);
  
      var WindspeedDay3 = data.daily[2].wind_speed;
      var Windspeed3 = document.getElementById("wind3");
      Windspeed3.append(WindspeedDay3);
  
      var WindspeedDay4 = data.daily[3].wind_speed;
      var Windspeed4 = document.getElementById("wind4");
      Windspeed4.append(WindspeedDay4);
  
      var WindspeedDay5 = data.daily[4].wind_speed;
      var Windspeed5 = document.getElementById("wind5");
      Windspeed5.append(WindspeedDay5);
    }  
  
  //Code for adding the Humidity to the five day forecast
    {
      var HumidityDay1 = data.daily[0].humidity;
      var Humidity1 = document.getElementById("humid1");
      Humidity1.append(HumidityDay1);
  
      var HumidityDay2 = data.daily[1].humidity;
      var Humidity2 = document.getElementById("humid2");
      Humidity2.append(HumidityDay2);
  
      var HumidityDay3 = data.daily[2].humidity;
      var Humidity3 = document.getElementById("humid3");
      Humidity3.append(HumidityDay3);
  
      var HumidityDay4 = data.daily[3].humidity;
      var Humidity4 = document.getElementById("humid4");
      Humidity4.append(HumidityDay4);
  
      var HumidityDay5 = data.daily[4].humidity;
      var Humidity5 = document.getElementById("humid5");
      Humidity5.append(HumidityDay5);
    }
  }
  );
  }

function FillNewYork(){
  clear();
  document.getElementById("city").append("New York");
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.7128&lon=-74.0060&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';
  
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
  
  //Adds the date to each panel of the five day forecast
    {
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
    }
  
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
  
  //Code for adding temperature data to each panel of the five day forecast
    {
      var DailyTemp1 = data.daily[0].temp.day;
      var ForeTemp1 = document.getElementById("temp1");
      var DailyTemp1=(DailyTemp1-273.15)*(9/5)+32; 
      var DailyTemp1=Math.trunc(DailyTemp1);
      ForeTemp1.append(DailyTemp1);
  
      var DailyTemp2 = data.daily[1].temp.day;
      var ForeTemp2 = document.getElementById("temp2");
      var DailyTemp2=(DailyTemp2-273.15)*(9/5)+32; 
      var DailyTemp2=Math.trunc(DailyTemp2);
      ForeTemp2.append(DailyTemp2);
  
      var DailyTemp3 = data.daily[2].temp.day;
      var ForeTemp3 = document.getElementById("temp3");
      var DailyTemp3=(DailyTemp3-273.15)*(9/5)+32; 
      var DailyTemp3=Math.trunc(DailyTemp3);
      ForeTemp3.append(DailyTemp3);
  
      var DailyTemp4 = data.daily[3].temp.day;
      var ForeTemp4 = document.getElementById("temp4");
      var DailyTemp4=(DailyTemp4-273.15)*(9/5)+32; 
      var DailyTemp4=Math.trunc(DailyTemp4);
      ForeTemp4.append(DailyTemp4);
  
      var DailyTemp5 = data.daily[4].temp.day;
      var ForeTemp5 = document.getElementById("temp5");
      var DailyTemp5=(DailyTemp5-273.15)*(9/5)+32; 
      var DailyTemp5=Math.trunc(DailyTemp5);
      ForeTemp5.append(DailyTemp5);
    } 
   
  //Code for adding temperature data to each panel of the five day forecast
    {
      var WindspeedDay1 = data.daily[0].wind_speed;
      var Windspeed1 = document.getElementById("wind1");
      Windspeed1.append(WindspeedDay1);
  
      var WindspeedDay2 = data.daily[1].wind_speed;
      var Windspeed2 = document.getElementById("wind2");
      Windspeed2.append(WindspeedDay2);
  
      var WindspeedDay3 = data.daily[2].wind_speed;
      var Windspeed3 = document.getElementById("wind3");
      Windspeed3.append(WindspeedDay3);
  
      var WindspeedDay4 = data.daily[3].wind_speed;
      var Windspeed4 = document.getElementById("wind4");
      Windspeed4.append(WindspeedDay4);
  
      var WindspeedDay5 = data.daily[4].wind_speed;
      var Windspeed5 = document.getElementById("wind5");
      Windspeed5.append(WindspeedDay5);
    }  
  
  //Code for adding the Humidity to the five day forecast
    {
      var HumidityDay1 = data.daily[0].humidity;
      var Humidity1 = document.getElementById("humid1");
      Humidity1.append(HumidityDay1);
  
      var HumidityDay2 = data.daily[1].humidity;
      var Humidity2 = document.getElementById("humid2");
      Humidity2.append(HumidityDay2);
  
      var HumidityDay3 = data.daily[2].humidity;
      var Humidity3 = document.getElementById("humid3");
      Humidity3.append(HumidityDay3);
  
      var HumidityDay4 = data.daily[3].humidity;
      var Humidity4 = document.getElementById("humid4");
      Humidity4.append(HumidityDay4);
  
      var HumidityDay5 = data.daily[4].humidity;
      var Humidity5 = document.getElementById("humid5");
      Humidity5.append(HumidityDay5);
    }
  }
  );
  }

function FillOrlando(){
  clear();
  document.getElementById("city").append("Orlando");
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=28.5384&lon=-81.3789&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';
  
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
  
  //Adds the date to each panel of the five day forecast
    {
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
    }
  
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
  
  //Code for adding temperature data to each panel of the five day forecast
    {
      var DailyTemp1 = data.daily[0].temp.day;
      var ForeTemp1 = document.getElementById("temp1");
      var DailyTemp1=(DailyTemp1-273.15)*(9/5)+32; 
      var DailyTemp1=Math.trunc(DailyTemp1);
      ForeTemp1.append(DailyTemp1);
  
      var DailyTemp2 = data.daily[1].temp.day;
      var ForeTemp2 = document.getElementById("temp2");
      var DailyTemp2=(DailyTemp2-273.15)*(9/5)+32; 
      var DailyTemp2=Math.trunc(DailyTemp2);
      ForeTemp2.append(DailyTemp2);
  
      var DailyTemp3 = data.daily[2].temp.day;
      var ForeTemp3 = document.getElementById("temp3");
      var DailyTemp3=(DailyTemp3-273.15)*(9/5)+32; 
      var DailyTemp3=Math.trunc(DailyTemp3);
      ForeTemp3.append(DailyTemp3);
  
      var DailyTemp4 = data.daily[3].temp.day;
      var ForeTemp4 = document.getElementById("temp4");
      var DailyTemp4=(DailyTemp4-273.15)*(9/5)+32; 
      var DailyTemp4=Math.trunc(DailyTemp4);
      ForeTemp4.append(DailyTemp4);
  
      var DailyTemp5 = data.daily[4].temp.day;
      var ForeTemp5 = document.getElementById("temp5");
      var DailyTemp5=(DailyTemp5-273.15)*(9/5)+32; 
      var DailyTemp5=Math.trunc(DailyTemp5);
      ForeTemp5.append(DailyTemp5);
    } 
   
  //Code for adding temperature data to each panel of the five day forecast
    {
      var WindspeedDay1 = data.daily[0].wind_speed;
      var Windspeed1 = document.getElementById("wind1");
      Windspeed1.append(WindspeedDay1);
  
      var WindspeedDay2 = data.daily[1].wind_speed;
      var Windspeed2 = document.getElementById("wind2");
      Windspeed2.append(WindspeedDay2);
  
      var WindspeedDay3 = data.daily[2].wind_speed;
      var Windspeed3 = document.getElementById("wind3");
      Windspeed3.append(WindspeedDay3);
  
      var WindspeedDay4 = data.daily[3].wind_speed;
      var Windspeed4 = document.getElementById("wind4");
      Windspeed4.append(WindspeedDay4);
  
      var WindspeedDay5 = data.daily[4].wind_speed;
      var Windspeed5 = document.getElementById("wind5");
      Windspeed5.append(WindspeedDay5);
    }  
  
  //Code for adding the Humidity to the five day forecast
    {
      var HumidityDay1 = data.daily[0].humidity;
      var Humidity1 = document.getElementById("humid1");
      Humidity1.append(HumidityDay1);
  
      var HumidityDay2 = data.daily[1].humidity;
      var Humidity2 = document.getElementById("humid2");
      Humidity2.append(HumidityDay2);
  
      var HumidityDay3 = data.daily[2].humidity;
      var Humidity3 = document.getElementById("humid3");
      Humidity3.append(HumidityDay3);
  
      var HumidityDay4 = data.daily[3].humidity;
      var Humidity4 = document.getElementById("humid4");
      Humidity4.append(HumidityDay4);
  
      var HumidityDay5 = data.daily[4].humidity;
      var Humidity5 = document.getElementById("humid5");
      Humidity5.append(HumidityDay5);
    }
  }
  );
  }

function FillSanFrancisco(){
  clear();
  document.getElementById("city").append("San Francisco");
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.7749&lon=-122.4194&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';
  
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
  
  //Adds the date to each panel of the five day forecast
    {
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
    }
  
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
  
  //Code for adding temperature data to each panel of the five day forecast
    {
      var DailyTemp1 = data.daily[0].temp.day;
      var ForeTemp1 = document.getElementById("temp1");
      var DailyTemp1=(DailyTemp1-273.15)*(9/5)+32; 
      var DailyTemp1=Math.trunc(DailyTemp1);
      ForeTemp1.append(DailyTemp1);
  
      var DailyTemp2 = data.daily[1].temp.day;
      var ForeTemp2 = document.getElementById("temp2");
      var DailyTemp2=(DailyTemp2-273.15)*(9/5)+32; 
      var DailyTemp2=Math.trunc(DailyTemp2);
      ForeTemp2.append(DailyTemp2);
  
      var DailyTemp3 = data.daily[2].temp.day;
      var ForeTemp3 = document.getElementById("temp3");
      var DailyTemp3=(DailyTemp3-273.15)*(9/5)+32; 
      var DailyTemp3=Math.trunc(DailyTemp3);
      ForeTemp3.append(DailyTemp3);
  
      var DailyTemp4 = data.daily[3].temp.day;
      var ForeTemp4 = document.getElementById("temp4");
      var DailyTemp4=(DailyTemp4-273.15)*(9/5)+32; 
      var DailyTemp4=Math.trunc(DailyTemp4);
      ForeTemp4.append(DailyTemp4);
  
      var DailyTemp5 = data.daily[4].temp.day;
      var ForeTemp5 = document.getElementById("temp5");
      var DailyTemp5=(DailyTemp5-273.15)*(9/5)+32; 
      var DailyTemp5=Math.trunc(DailyTemp5);
      ForeTemp5.append(DailyTemp5);
    } 
   
  //Code for adding temperature data to each panel of the five day forecast
    {
      var WindspeedDay1 = data.daily[0].wind_speed;
      var Windspeed1 = document.getElementById("wind1");
      Windspeed1.append(WindspeedDay1);
  
      var WindspeedDay2 = data.daily[1].wind_speed;
      var Windspeed2 = document.getElementById("wind2");
      Windspeed2.append(WindspeedDay2);
  
      var WindspeedDay3 = data.daily[2].wind_speed;
      var Windspeed3 = document.getElementById("wind3");
      Windspeed3.append(WindspeedDay3);
  
      var WindspeedDay4 = data.daily[3].wind_speed;
      var Windspeed4 = document.getElementById("wind4");
      Windspeed4.append(WindspeedDay4);
  
      var WindspeedDay5 = data.daily[4].wind_speed;
      var Windspeed5 = document.getElementById("wind5");
      Windspeed5.append(WindspeedDay5);
    }  
  
  //Code for adding the Humidity to the five day forecast
    {
      var HumidityDay1 = data.daily[0].humidity;
      var Humidity1 = document.getElementById("humid1");
      Humidity1.append(HumidityDay1);
  
      var HumidityDay2 = data.daily[1].humidity;
      var Humidity2 = document.getElementById("humid2");
      Humidity2.append(HumidityDay2);
  
      var HumidityDay3 = data.daily[2].humidity;
      var Humidity3 = document.getElementById("humid3");
      Humidity3.append(HumidityDay3);
  
      var HumidityDay4 = data.daily[3].humidity;
      var Humidity4 = document.getElementById("humid4");
      Humidity4.append(HumidityDay4);
  
      var HumidityDay5 = data.daily[4].humidity;
      var Humidity5 = document.getElementById("humid5");
      Humidity5.append(HumidityDay5);
    }
  }
  );
  }

function FillSeattle(){
  clear();
  document.getElementById("city").append("Seattle");
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=47.6062&lon=-122.3321&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';
  
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
  
  //Adds the date to each panel of the five day forecast
    {
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
    }
  
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
  
  //Code for adding temperature data to each panel of the five day forecast
    {
      var DailyTemp1 = data.daily[0].temp.day;
      var ForeTemp1 = document.getElementById("temp1");
      var DailyTemp1=(DailyTemp1-273.15)*(9/5)+32; 
      var DailyTemp1=Math.trunc(DailyTemp1);
      ForeTemp1.append(DailyTemp1);
  
      var DailyTemp2 = data.daily[1].temp.day;
      var ForeTemp2 = document.getElementById("temp2");
      var DailyTemp2=(DailyTemp2-273.15)*(9/5)+32; 
      var DailyTemp2=Math.trunc(DailyTemp2);
      ForeTemp2.append(DailyTemp2);
  
      var DailyTemp3 = data.daily[2].temp.day;
      var ForeTemp3 = document.getElementById("temp3");
      var DailyTemp3=(DailyTemp3-273.15)*(9/5)+32; 
      var DailyTemp3=Math.trunc(DailyTemp3);
      ForeTemp3.append(DailyTemp3);
  
      var DailyTemp4 = data.daily[3].temp.day;
      var ForeTemp4 = document.getElementById("temp4");
      var DailyTemp4=(DailyTemp4-273.15)*(9/5)+32; 
      var DailyTemp4=Math.trunc(DailyTemp4);
      ForeTemp4.append(DailyTemp4);
  
      var DailyTemp5 = data.daily[4].temp.day;
      var ForeTemp5 = document.getElementById("temp5");
      var DailyTemp5=(DailyTemp5-273.15)*(9/5)+32; 
      var DailyTemp5=Math.trunc(DailyTemp5);
      ForeTemp5.append(DailyTemp5);
    } 
   
  //Code for adding temperature data to each panel of the five day forecast
    {
      var WindspeedDay1 = data.daily[0].wind_speed;
      var Windspeed1 = document.getElementById("wind1");
      Windspeed1.append(WindspeedDay1);
  
      var WindspeedDay2 = data.daily[1].wind_speed;
      var Windspeed2 = document.getElementById("wind2");
      Windspeed2.append(WindspeedDay2);
  
      var WindspeedDay3 = data.daily[2].wind_speed;
      var Windspeed3 = document.getElementById("wind3");
      Windspeed3.append(WindspeedDay3);
  
      var WindspeedDay4 = data.daily[3].wind_speed;
      var Windspeed4 = document.getElementById("wind4");
      Windspeed4.append(WindspeedDay4);
  
      var WindspeedDay5 = data.daily[4].wind_speed;
      var Windspeed5 = document.getElementById("wind5");
      Windspeed5.append(WindspeedDay5);
    }  
  
  //Code for adding the Humidity to the five day forecast
    {
      var HumidityDay1 = data.daily[0].humidity;
      var Humidity1 = document.getElementById("humid1");
      Humidity1.append(HumidityDay1);
  
      var HumidityDay2 = data.daily[1].humidity;
      var Humidity2 = document.getElementById("humid2");
      Humidity2.append(HumidityDay2);
  
      var HumidityDay3 = data.daily[2].humidity;
      var Humidity3 = document.getElementById("humid3");
      Humidity3.append(HumidityDay3);
  
      var HumidityDay4 = data.daily[3].humidity;
      var Humidity4 = document.getElementById("humid4");
      Humidity4.append(HumidityDay4);
  
      var HumidityDay5 = data.daily[4].humidity;
      var Humidity5 = document.getElementById("humid5");
      Humidity5.append(HumidityDay5);
    }
  }
  );
  }

function FillDenver(){
  clear();
  document.getElementById("city").append("Denver");
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.7392&lon=-104.9903&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';
  
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
  
  //Adds the date to each panel of the five day forecast
    {
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
    }
  
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
  
  //Code for adding temperature data to each panel of the five day forecast
    {
      var DailyTemp1 = data.daily[0].temp.day;
      var ForeTemp1 = document.getElementById("temp1");
      var DailyTemp1=(DailyTemp1-273.15)*(9/5)+32; 
      var DailyTemp1=Math.trunc(DailyTemp1);
      ForeTemp1.append(DailyTemp1);
  
      var DailyTemp2 = data.daily[1].temp.day;
      var ForeTemp2 = document.getElementById("temp2");
      var DailyTemp2=(DailyTemp2-273.15)*(9/5)+32; 
      var DailyTemp2=Math.trunc(DailyTemp2);
      ForeTemp2.append(DailyTemp2);
  
      var DailyTemp3 = data.daily[2].temp.day;
      var ForeTemp3 = document.getElementById("temp3");
      var DailyTemp3=(DailyTemp3-273.15)*(9/5)+32; 
      var DailyTemp3=Math.trunc(DailyTemp3);
      ForeTemp3.append(DailyTemp3);
  
      var DailyTemp4 = data.daily[3].temp.day;
      var ForeTemp4 = document.getElementById("temp4");
      var DailyTemp4=(DailyTemp4-273.15)*(9/5)+32; 
      var DailyTemp4=Math.trunc(DailyTemp4);
      ForeTemp4.append(DailyTemp4);
  
      var DailyTemp5 = data.daily[4].temp.day;
      var ForeTemp5 = document.getElementById("temp5");
      var DailyTemp5=(DailyTemp5-273.15)*(9/5)+32; 
      var DailyTemp5=Math.trunc(DailyTemp5);
      ForeTemp5.append(DailyTemp5);
    } 
   
  //Code for adding temperature data to each panel of the five day forecast
    {
      var WindspeedDay1 = data.daily[0].wind_speed;
      var Windspeed1 = document.getElementById("wind1");
      Windspeed1.append(WindspeedDay1);
  
      var WindspeedDay2 = data.daily[1].wind_speed;
      var Windspeed2 = document.getElementById("wind2");
      Windspeed2.append(WindspeedDay2);
  
      var WindspeedDay3 = data.daily[2].wind_speed;
      var Windspeed3 = document.getElementById("wind3");
      Windspeed3.append(WindspeedDay3);
  
      var WindspeedDay4 = data.daily[3].wind_speed;
      var Windspeed4 = document.getElementById("wind4");
      Windspeed4.append(WindspeedDay4);
  
      var WindspeedDay5 = data.daily[4].wind_speed;
      var Windspeed5 = document.getElementById("wind5");
      Windspeed5.append(WindspeedDay5);
    }  
  
  //Code for adding the Humidity to the five day forecast
    {
      var HumidityDay1 = data.daily[0].humidity;
      var Humidity1 = document.getElementById("humid1");
      Humidity1.append(HumidityDay1);
  
      var HumidityDay2 = data.daily[1].humidity;
      var Humidity2 = document.getElementById("humid2");
      Humidity2.append(HumidityDay2);
  
      var HumidityDay3 = data.daily[2].humidity;
      var Humidity3 = document.getElementById("humid3");
      Humidity3.append(HumidityDay3);
  
      var HumidityDay4 = data.daily[3].humidity;
      var Humidity4 = document.getElementById("humid4");
      Humidity4.append(HumidityDay4);
  
      var HumidityDay5 = data.daily[4].humidity;
      var Humidity5 = document.getElementById("humid5");
      Humidity5.append(HumidityDay5);
    }
  }
  );
  }

function FillAtlanta(){
  clear();
document.getElementById("city").append("Atlanta");

var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';

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

//Adds the date to each panel of the five day forecast
  {
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
  }

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

//Code for adding temperature data to each panel of the five day forecast
  {
    var DailyTemp1 = data.daily[0].temp.day;
    var ForeTemp1 = document.getElementById("temp1");
    var DailyTemp1=(DailyTemp1-273.15)*(9/5)+32; 
    var DailyTemp1=Math.trunc(DailyTemp1);
    ForeTemp1.append(DailyTemp1);

    var DailyTemp2 = data.daily[1].temp.day;
    var ForeTemp2 = document.getElementById("temp2");
    var DailyTemp2=(DailyTemp2-273.15)*(9/5)+32; 
    var DailyTemp2=Math.trunc(DailyTemp2);
    ForeTemp2.append(DailyTemp2);

    var DailyTemp3 = data.daily[2].temp.day;
    var ForeTemp3 = document.getElementById("temp3");
    var DailyTemp3=(DailyTemp3-273.15)*(9/5)+32; 
    var DailyTemp3=Math.trunc(DailyTemp3);
    ForeTemp3.append(DailyTemp3);

    var DailyTemp4 = data.daily[3].temp.day;
    var ForeTemp4 = document.getElementById("temp4");
    var DailyTemp4=(DailyTemp4-273.15)*(9/5)+32; 
    var DailyTemp4=Math.trunc(DailyTemp4);
    ForeTemp4.append(DailyTemp4);

    var DailyTemp5 = data.daily[4].temp.day;
    var ForeTemp5 = document.getElementById("temp5");
    var DailyTemp5=(DailyTemp5-273.15)*(9/5)+32; 
    var DailyTemp5=Math.trunc(DailyTemp5);
    ForeTemp5.append(DailyTemp5);
  } 
 
//Code for adding temperature data to each panel of the five day forecast
  {
    var WindspeedDay1 = data.daily[0].wind_speed;
    var Windspeed1 = document.getElementById("wind1");
    Windspeed1.append(WindspeedDay1);

    var WindspeedDay2 = data.daily[1].wind_speed;
    var Windspeed2 = document.getElementById("wind2");
    Windspeed2.append(WindspeedDay2);

    var WindspeedDay3 = data.daily[2].wind_speed;
    var Windspeed3 = document.getElementById("wind3");
    Windspeed3.append(WindspeedDay3);

    var WindspeedDay4 = data.daily[3].wind_speed;
    var Windspeed4 = document.getElementById("wind4");
    Windspeed4.append(WindspeedDay4);

    var WindspeedDay5 = data.daily[4].wind_speed;
    var Windspeed5 = document.getElementById("wind5");
    Windspeed5.append(WindspeedDay5);
  }  

//Code for adding the Humidity to the five day forecast
  {
    var HumidityDay1 = data.daily[0].humidity;
    var Humidity1 = document.getElementById("humid1");
    Humidity1.append(HumidityDay1);

    var HumidityDay2 = data.daily[1].humidity;
    var Humidity2 = document.getElementById("humid2");
    Humidity2.append(HumidityDay2);

    var HumidityDay3 = data.daily[2].humidity;
    var Humidity3 = document.getElementById("humid3");
    Humidity3.append(HumidityDay3);

    var HumidityDay4 = data.daily[3].humidity;
    var Humidity4 = document.getElementById("humid4");
    Humidity4.append(HumidityDay4);

    var HumidityDay5 = data.daily[4].humidity;
    var Humidity5 = document.getElementById("humid5");
    Humidity5.append(HumidityDay5);
  }
}
);
}


function clear(){
  console.clear();

  document.getElementById('city').innerHTML="";

  document.getElementById('CurrentSkies').innerHTML="Current Skies: ";
  document.getElementById('CurrentTemp').innerHTML="Temperature (°F): ";
  document.getElementById('CurrentWind').innerHTML="Wind Speed (mph): ";
  document.getElementById('CurrentHumidity').innerHTML="Humidity (%): ";
  document.getElementById('CurrentUV').innerHTML="UV index: ";

  document.getElementById('date1').innerHTML="";
  document.getElementById('date2').innerHTML="";
  document.getElementById('date3').innerHTML="";
  document.getElementById('date4').innerHTML="";
  document.getElementById('date5').innerHTML="";

  document.getElementById('temp1').innerHTML="Temperature (°F): ";
  document.getElementById('temp2').innerHTML="Temperature (°F): ";
  document.getElementById('temp3').innerHTML="Temperature (°F): ";
  document.getElementById('temp4').innerHTML="Temperature (°F): ";
  document.getElementById('temp5').innerHTML="Temperature (°F): ";

  document.getElementById('wind1').innerHTML="Wind Speed (mph): ";
  document.getElementById('wind2').innerHTML="Wind Speed (mph): ";
  document.getElementById('wind3').innerHTML="Wind Speed (mph): ";
  document.getElementById('wind4').innerHTML="Wind Speed (mph): ";
  document.getElementById('wind5').innerHTML="Wind Speed (mph): ";

  document.getElementById('humid1').innerHTML="Humidity (%): ";
  document.getElementById('humid2').innerHTML="Humidity (%): ";
  document.getElementById('humid3').innerHTML="Humidity (%): ";
  document.getElementById('humid4').innerHTML="Humidity (%): ";
  document.getElementById('humid5').innerHTML="Humidity (%): ";






  

  }