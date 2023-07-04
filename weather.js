// 날씨 정보를 얻기 위해서 OpenWeather 사이트에서 API를 이용합니다.
const API_KEY = "43c6c36df6ff6085e883c5cf1f6479fb";

// user의 위치를 얻는 함수입니다. 
function onGeoOk(position){
    // 위도
    const lat = position.coords.latitude;
    // 경도
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // fetch() 메서드로 url을 호출할 수 있습니다.
    // 서버의 응답을 기다리고 응답을 받아서 json(날씨 정보)을 받습니다.
    // json을 받았으면 name(지역), weather[0](날씨) 등을 받아 변수에 저장합니다.
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// 브라우저에 위치 좌표를 줍니다.
// getCurrentPosition() 함수에는 정상일 때와 에러가 났을 때 수행할 함수를 인자를 받습니다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);