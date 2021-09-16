## About
This is a simple JavaScript weather app that uses [Open Weather Map](https://openweathermap.org/api) 
API to run and show you the forecast of your area, you're welcome to fork this project and make whatever
modifications you wish to make as long as it doesn't interfere with the source code
## Usage
First download the script and you can edit the following in line 4 of the code: <br>
```
axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mira%20Loma,CA,US&appid=' + mySecret + '&lang=en&units=metric')
```
You can change the location
```
q=Mira%20Loma,CA,US
// replace all of the spaces with '%20'
```
The ```appid``` is your api key that you can get for free at [Open Weather Map](https://home.openweathermap.org/api_keys)
```
&appid=' + mySecret + 
```
The ```mySecret``` function is my personal key kept within a ```.env``` file and looks like this
```
const mySecret = process.env['key']
```
you can also change the units of measument between; standard, metric and inperial
```
&units=metric
&units=imperial
&units=standard //this one is the default one you will get if you dont specify
```
the ```&lang=en``` specifies the language you want the results in.<br><br>
