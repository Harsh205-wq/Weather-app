let valueSearch = document.getElementById("valueSearch");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.querySelector(".description");

let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

let form = document.querySelector("form");

let id = "9505fd1df737e20152fbd78cdb289b6a";
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${id}`;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (valueSearch.value != "") {
    searchWeather();
  }
});

const searchWeather = () => {
  fetch(`${url}&q=${valueSearch.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod == 200) {
        city.querySelector("figcaption").innerText = data.name;
        city.querySelector("img").src = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
        temperature.querySelector("img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temperature.querySelector("figcaption span").innerText = Math.round(data.main.temp);

        description.innerText = data.weather[0].description;
        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;

         } else {
        alert("City not found.");
      }

    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      
    });
};
const initApp=()=>{
   valueSearch.value='Lucknow';
   searchWeather();
}
initApp();
