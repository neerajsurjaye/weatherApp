(()=>{"use strict";let t=(()=>{let t=async t=>{let e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=beb1e557a80ba5ac12c07a6650a5b8e8`,{mode:"cors"});return e=await e.json(),e};return{fetchWeather:t,getWeather:async e=>{let n;try{let o=await t(e);n={city:o.name,weather:o.weather[0].main,description:o.weather[0].description,sys:o.sys,main:o.main}}catch{n="not-found"}return n},toCelcius:t=>{let e=t-273.15;return e=e.toFixed(2),e+"C"},toFaren:t=>{let e=9*(t-273.15)/5+32;return e=e.toFixed(2),e+"F"}}})();(()=>{let e=0,n=async()=>{let e=document.getElementById("city-input").value,n=await t.getWeather(e);o(n)},o=n=>{document.getElementById("weather-box");let o=document.getElementById("wName"),a=document.getElementById("wCondition"),c=document.getElementById("wTemp");"not-found"===n?(o.textContent="NotFound",a.textContent="NotFound",c.textContent="NotFound"):(o.textContent=n.city,a.textContent=n.description,c.textContent=t.toCelcius(n.main.temp),e=n.main.temp,document.getElementById("toFar").checked=!1)},a=n=>{let o=document.getElementById("wTemp");n.target.checked?o.textContent=t.toFaren(e):o.textContent=t.toCelcius(e)};return{init:()=>{document.getElementById("search-button").addEventListener("click",n),document.getElementById("toFar").addEventListener("click",a)}}})().init()})();