const apikey="ae91a84899e6f30417f89b38eb960448"
const inputBtn=document.getElementById("input-btn")
const getBtn=document.getElementById("getbtn")
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function checkweather(city){
    const response=await fetch( apiurl+ city+ `&appid=${apikey}`)
    var data=await response.json()
    console.log(data)
    document.getElementById("time").innerHTML=new Date().toLocaleString()
    document.querySelector("#city").innerHTML=data.name
    document.querySelector("#tempicon").src="thermometer.png"
    document.querySelector("#temp").innerHTML=data.main.temp +"°C"
    document.querySelector("#weather").innerHTML=data.weather[0].description
    document.querySelector("#windicon").src="wind.png"
    document.querySelector("#wind").innerHTML= data.wind.speed +"km/h"
    const Icon=document.querySelector("#icon")
    if(data.weather[0].description=="few clouds")
        Icon.src="cloudy.png"
    if(data.weather[0].description=="scattered clouds" || data.weather[0].description=="overcast clouds")
        Icon.src="scatteredcloud.png"
    if(data.weather[0].description=="broken clouds")
        Icon.src="brokencloud.png"
    else if(data.weather[0].description=="clear sky")
        Icon.src="sun.png"
    else if(data.weather[0].description=="light rain")
        Icon.src="raining.png"
    else if(data.weather[0].description=="thunderstorm")
        Icon.src="storm.png"
    else if(data.weather[0].description=="haze")
        Icon.src="clouds.png"
    else if(data.weather[0].description=="snow")
        Icon.src="snow.png"
}
getBtn.addEventListener('click', function(){
    checkweather(inputBtn.value)
})
checkweather('Kolkata')
// document.addEventListener("DOMContentLoaded", function(event) {
//     document.querySelectorAll('img').forEach(function(img){
//        img.onerror = function(){this.style.display='none';};
//     })
//  });
