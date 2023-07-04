const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// toDo들을 저장할 배열
// js를 시작할 때마다 배열이 비어있기 때문에 새로운 데이터를 넣으면 이전 데이터는 사라지게 된다.
// 새로운 데이터를 saveToDos에서 브라우저에 저장하기 때문에 이전 데이터는 사라진다.
// 따라서 const가 아닌 변할 수 있는 let으로 선언한다.
let toDos = [];

function saveToDos(){
    // 브라우저에 toDo들을 텍스트가 아닌 배열 형태로 저장하기 위해 JSON.stringify 메서드 사용
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 삭제할 ToDoList의 button을 눌렀을 때 삭제하는 함수
function deleteToDo(event){
    // 클릭했을 때 타겟을 알 수 있고 그 타겟의 부모 또한 알 수 있어서 이를 통해 삭제합니다.
    const li = event.target.parentElement;
    li.remove();
    // 클릭한 타겟의 li.id와 다른 toDo는 남기는 작업입니다. 
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // 삭제한 후에 브라우저에 남은 toDo를 저장하기 위해 saveToDos() 함수를 호출합니다.
    saveToDos();
}

// 입력한 ToDoList와 삭제할 버튼을 포함하고 있는 li 태그를 만드는 함수
function paintToDo(newTodo){
    // li 태그를 만들어 li 변수에 저장합니다.
    const li = document.createElement("li");
    li.id = newTodo.id;
    // span 태그를 만들어 span 변수에 저장합니다.
    const span = document.createElement("span");
    // span 태그에 입력한 newTodo(할 일)를 삽입합니다.
    span.innerText = newTodo.text;
    // button 태그를 만들어 button 변수에 저장합니다. 
    const button = document.createElement("button");
    // button 태그에 이모지 x를 삽입합니다.
    button.innerText = "❌";
    // button을 클릭하면 할 일을 삭제하는 이벤트를 생성합니다.
    button.addEventListener("click", deleteToDo);
    // li 태그에 자식으로 button 태그를 삽입합니다
    li.appendChild(button);
    // li 태그에 자식으로 span 태그를 삽입합니다.
    li.appendChild(span);
    // toDoList(ul)에 자식으로 li 태그를 삽입합니다.
    toDoList.appendChild(li);
}

// 할 일을 입력하고 엔터를 눌렀을 때 
function handleToDoSubmit(event){
    event.preventDefault();
    // input 값을 newTodo에 저장합니다.
    const newTodo = toDoInput.value;
    // input 값을 공백으로 바꾸어줍니다.
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

// 할 일을 입력하고 엔터를 눌렀을 때 발생하는 이벤트를 생성합니다.
toDoForm.addEventListener("submit", handleToDoSubmit);

// 브라우저에서 저장된 데이터를 가져옵니다.
const savedToDos = localStorage.getItem(TODOS_KEY);

// 브라우저에서 가져온 데이터가 비어있지 않다면
if (savedToDos !== null){
    // 가져온 데이터를 JSON.parse 메서드를 이용해 JS 문자열로 변환합니다.
    // 브라우저에 저장된 데이터는 JSON 문자열이기 때문입니다.
    const parsedToDos = JSON.parse(savedToDos);

    // 이전 ToDoList를 저장하여 사라지는 문제를 해결한다.
    toDos = parsedToDos;

    // forEach 함수는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
    // 혹은 배열을 순회하며 리스트를 만듭니다.
    parsedToDos.forEach(paintToDo);
}