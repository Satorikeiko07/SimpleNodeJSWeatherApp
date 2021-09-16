const axios = require('axios');
const mySecret = process.env['key']

axios.get('https://api.openweathermap.org/data/2.5/weather?q=San%20Vicente,SV,SV&appid=' + mySecret + '&lang=en&units=metric')
  .then(r => {
		let unix_timestamp = r.data.sys.sunrise
		var date = new Date(unix_timestamp * 1000);
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		var seconds = "0" + date.getSeconds();
		var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

		let unix_timestamp1 = r.data.sys.sunset
		var date1 = new Date(unix_timestamp1 * 1000);
		var hours1 = date1.getHours();
		var minutes1 = "0" + date1.getMinutes();
		var seconds1 = "0" + date1.getSeconds();
		var formattedTime1 = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);

    console.log('The weather right now is: ' + r.data.weather[0].description);
    console.log('Temperature: ' + r.data.main.temp + '°C ≈ ' + r.data.main.feels_like);
		console.log('Humidity: ' + r.data.main.humidity + '%')
		console.log('Cloudiness: ' + r.data.clouds.all + '%')
		console.log('Wind speed: ' + r.data.wind.speed + ' m/s')
		console.log('Location: ' + r.data.name + ', ' + r.data.sys.country)
		console.log('Lon: ' + r.data.coord.lon)
		console.log('Lat: ' + r.data.coord.lat)
		console.log('Sunrise: ' + formattedTime + ' - AM')
		console.log('Sunset: ' + formattedTime1 + ' - PM')
		console.log('http://openweathermap.org/img/wn/' + r.data.weather[0].icon + '@4x.png')
  })
.catch(error => {
  console.log(error);
});

axios.get('http://api.openweathermap.org/data/2.5/air_pollution?lat=33.9925&lon=-117.5164&appid=' + mySecret)
  .then(response2 => {
		let airQ = `${response2.data.list[0].main.aqi}`

		if(airQ.includes('1')) {
			console.log('Air quality: ' + response2.data.list[0].main.aqi + ' Good')
		} if(airQ.includes('2')) {
			console.log('Air quality: ' + response2.data.list[0].main.aqi + ' Fair')
		}	if(airQ.includes('3')) {
			console.log('Air quality: ' + response2.data.list[0].main.aqi + ' Moderate')
		} if(airQ.includes('4')) {
			console.log('Air quality: ' + response2.data.list[0].main.aqi + ' Poor')
		} if(airQ.includes('5')) {
			console.log('Air quality: ' + response2.data.list[0].main.aqi + ' Very Poor')
		}
  })
  .catch(error => {
    console.log(error);
  });
