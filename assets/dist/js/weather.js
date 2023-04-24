// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "Hello, world!");
// encodedParams.append("target", "fa");
// encodedParams.append("source", "en");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': 'b0668bc7acmshec441258b062a63p187f98jsn276e8cb392be',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

$(document).ready(function () {
  weather();
  $("#getStarted").click(function () {
    $("#introdutingWeather").addClass("animate__animated animate__backOutLeft");
    $("section#getWeather div#introdutingWeather h1").css("padding", 0);
    setTimeout(() => {
      $("#mainWeather").css("display", "block");
      $("#mainWeather").addClass("animate__animated animate__bounceIn");
    }, 1000);
  });

  async function weather() {
    const resultIp = await getApi();
    const resultWeather = await getWeather(resultIp.lat, resultIp.lon);
    const Structure = await makeStructure(resultIp, resultWeather);
    $("#mainWeather").html(Structure);
  }

  function getApi() {
    const request = $.getJSON(
      "http://ip-api.com/json/?fields=61439",
      function (data, success) {
        if (success) {
          return data;
        }
      }
    );
    return request;
  }

  async function getWeather(lat, lon) {
    const apiKey = "bed0e303695d7582bd6db0b6e6badff1";
    const request = $.getJSON(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      function (data, success) {
        if (success) {
          return data;
        }
      }
    );
    return request;
  }

  function makeStructure(ip, weatherRE) {
    const { query, city, country, countryCode } = ip;
    const { main, weather } = weatherRE;
    const makeLater = countryCode.toString().toLowerCase();
    const make = `<div id="information" class='container'>
    <div id="image">
      <img src="https://flagcdn.com/256x192/${makeLater}.png "  width="256"
      height="192" class='mx-auto d-block img-fluid img-thumbnail rounded' alt="Can't up load ${country}'s flag" sizes="400" />
    </div>
    <div id="weatherLocation">
    <table class='my-4 table table-hover table-borderless'> 
        <tbody>
         <tr>
            <th scope="row">
            کشور
            :
            </th>
            <td>${country}</td>
         
        </tr>
        <tr>
            <th>    
             شهر  
             :
            </th>
            <td>
                ${city}
            </td>
        <tr>

        <tr>
            <th>    
                اب و هوا 
                :
            </th>
            <td>
                ${weather[0].main}
            </td>
        <tr>

        <tr>
            <th>    
                شرح 
                :
            </th>
            <td>
                ${weather[0].description}
            </td>
        <tr>

        <tr>
            <th>    
            درجه
          :
            </th>
            <td>
            ${main.temp}
            </td>
        <tr>

        </tbody>
    </table>
    </div>
        <div class='mt-3' id="userIp">
            <h3> 
            ای پی شما 
            :
            ${query}
            </h3>
        </div>
    </div>`;
    return make;
  }
});
