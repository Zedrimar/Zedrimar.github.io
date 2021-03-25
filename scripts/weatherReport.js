document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
	document.getElementById('getWeather').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var appID = "&appid=9d02e0a55c0b18cb01753ea4bbd24dfd";
		var zip = document.getElementById("zip").value;
        var city = document.getElementById("city").value;
        var payload;
        
        if(zip != 0)
		{
            payload = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us" + appID + '&units=imperial';
        }
        else
        {
            payload = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us" + appID + '&units=imperial';
        }
		req.open("GET", payload, true);
        
		req.addEventListener('load', function() {
			if (req.status >= 200 && req.status < 400) {
				var response = JSON.parse(req.responseText);
				displayWeather(response);
			} else {
				console.log("error");
			}
    });
		req.send();
		event.preventDefault();
});
}

function displayWeather(response)
{
    document.getElementById("mainTemp").textContent = response.main.temp;               
    document.getElementById("weatherHumidity").textContent = response.main.humidity;
    document.getElementById("weatherSpeed").textContent = response.wind.speed;
}
















