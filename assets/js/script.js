var requestUrl = 'http://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&exclude=hourly,minutely,alerts&id=524901&appid=80a501585cb91fa19fef28a3ad196dae';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
       console.log(data);

       var CurrentHumidity = data.current.humidity;
       var TodayHumidity = document.getElementById("CurrentHumidity");
       TodayHumidity.append(CurrentHumidity);
        
    for (var i = 0; i < data.length; i++) {
  
    
    }
 
  });

