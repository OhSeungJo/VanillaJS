//loginForm 이라는 변수에 id가 login-form인 Element를 저장합니다.
const loginForm = document.querySelector("#login-form");
//loginInput 이라는 변수에 id가 login-form의 하위 input Element를 저장합니다.
const loginInput = document.querySelector("#login-form input");
//greeting 이라는 변수에 id가 greeting인 Element를 저장합니다.
const greeting = document.querySelector("#greeting");


// 반복해서 사용하는 문자열을 변수로 지정하여 실수를 방지합니다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// submit을 눌렀을 때 수행시킬 함수 생성
function onLoginSubmit(event){
    // evnet의 기본 행동이 수행되는 것을 막아주는 함수(새로고침과 같은 행동)
    event.preventDefault();
    // classList 속성을 통해 "hidden"이라는 클래스를 추가해줍니다. 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // input에 들어온 이름을 username이라는 변수에 저장합니다.
    const username = loginInput.value;
    // localStorage 속성을 통해 브라우저에 "사용자 이름" : "입력된 이름" 형태로 저장합니다. 
    localStorage.setItem(USERNAME_KEY, username);
    // paintGreetings 함수 호출
    paintGreetings(username);
}

// 반복되는 코드를 함수로 작성
function paintGreetings(username){
    // class="hidden"을 제거하여 css(display:none)를 적용하지 않도록 합니다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // 따옴표, 쌍따옴표가 아닌 백틱(``)을 사용하여 문자열과 변수를 연결합니다.
    greeting.innerText = `Welcome ${username}`;
}

// localStorage속성에서 "사용자 이름" 키를 통해 값을 가져옵니다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 브라우저에 저장된 값이 없다면 login-form을 보여주고
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
// 브라우저에 저장된 값이 있다면 h1 태그를 보여줍니다.
else{
    paintGreetings(savedUsername);
}