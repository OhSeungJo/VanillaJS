const clock = document.querySelector("h2#clock");

function getClock(){
    // Date 객체는 날짜와 관련된 메서드를 제공해주는 내장 객체입니다.
    const date = new Date();
    // padStart(길이, "문자") : 지정한 길이가 아니면 문자열 앞에 부족한 길이만큼 문자를 추가합니다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/* // setInterval은 실행할 함수와 ms초를 인자로 받습니다.
// setInterval은 지정한 밀리초마다 함수를 호출합니다.
setInterval(sayHello, 5000); */

/* // setTimeout은 실행할 함수와 ms초를 인자로 받습니다.
// setTimeout은 지정한 밀리초 뒤에 함수를 한 번 호출합니다.
setTimeout(sayHello, 5000); */

getClock();
setInterval(getClock, 1000);