const listContainer = document.getElementById("list-container");

let todoNum = localStorage.getItem("todoNum");
const todayTodoNum = document.getElementById("today");

// input에 입력한 할일을 추가하고 기존의 input창과 버튼은 삭제해주는 함수
function addTask() {
  // li 태그를 만든다.
  var li = document.createElement("li");

  // input 태그와 input에 입력된 값을 가져온다.
  var input = document.getElementById("task-input");
  var task = input.value;

  // span 태그를 만들고 내용을 사용자가 입력한 task로 채운다.
  var span = document.createElement("span");
  span.innerText = task;

  // li 태그의 자식으로 span 태그를 넣는다.
  li.appendChild(span);

  // listContainer의 자식으로 li 태그를 넣는다.
  listContainer.appendChild(li);

  // 기존의 input 태그와 button 태그를 제거한다.
  listContainer.removeChild(input.parentNode);

  saveData();
}

// + 버튼을 클릭하면 입력창을 만들어주는 함수
function createInput() {
  // li 태그를 만든다.
  let li = document.createElement("li");

  // input 태그를 만들고 type, id, placeholder를 지정해준다.
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "task-input");
  input.setAttribute("placeholder", "할일을 입력해주세요");

  // button 태그를 만들고 type, innerText, 이벤트리스너를 지정해준다.
  var button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerText = "+";
  button.addEventListener("click", addTask); // 버튼을 클릭하면 addTask함수가 실행된다.

  // li 태그의 자식으로 input과 button을 차례로 넣는다.
  li.appendChild(input);
  li.appendChild(button);

  // listContainer의 자식으로 li 태그를 넣는다.
  listContainer.appendChild(li);
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.value === "" ? todoNum++ : todoNum--; //한 일 수 처리
    todayTodoNum.innerText = todoNum;

    e.target.classList.toggle("checked");

    saveData();
  }
  //   }else if (e.target.tagName === "SPAN") {
  //     e.target.parentElement.remove();
  //     saveData();
  //   }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.setItem("todoNum", todayTodoNum.innerText);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  todayTodoNum.innerText = localStorage.getItem("todoNum") | 0;
}

showTask();
