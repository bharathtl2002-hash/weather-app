let get_weather_btn = document.getElementById("get_weather");
console.log(get_weather_btn);
let weather_container = document.getElementById("weather_container");
console.log(weather_container);
get_weather_btn.addEventListener("click", async () => {
  let city = document.getElementById("city").value;
  if (city === "") {
    document.getElementById("error").innerHTML = "Enter city name";
    return
  }
  const apiKey = "0135c0a7a5199009d87f7fcf4cd208b9";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    if (data.cod == 200) {
      console.log(data);
      weather_container.style.display = "flex";
      let condition = data.weather[0].main;
      if (condition === "Clear") {
        document.body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b')";
      } else if (condition === "Clouds") {
        document.body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63')";
      } else if (condition === "Rain") {
        document.body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29')";
      } else {
        document.body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9')";
      }
      weather_container.innerHTML = `
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
<h1>Cityname:${data.name}</h1>
<h2>Temp:${data.main.temp}</h2>
<h3>Descripition:${data.weather[0].description}</h3>
`;
      document.getElementById("error").innerHTML = "";
    } else {
      document.getElementById("error").innerHTML = "City not found";
    }
  } catch (error) {
    console.log(error);
  }
});
