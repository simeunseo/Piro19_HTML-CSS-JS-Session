const addTaskBtn = document.getElementById("addTask-btn");
addTaskBtn.addEventListener("click", createInput);

// #list-container를 잡아온다.
const listContainer = document.getElementById("list-container");

// + 버튼을 입력하면 입력창을 만들어주는 함수
function createInput() {
  // li 태그를 만든다.
  const li = document.createElement("li");

  // input 태그를 만든다.
  const input = document.createElement("input");
  // type, placeholder를 지정해준다.
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "할일을 입력해주세요");
  // id를 지정해준다.
  input.setAttribute("id", "task-input");

  // button 태그를 만든다.
  const button = document.createElement("button");
  // type, innerText를 지정해준다.
  button.setAttribute("type", "button");
  button.innerText = "+";
  // Event Listener를 지정해준다.
  button.addEventListener("click", addTask); // 버튼을 클릭하면 addTask함수가 실행된다.

  // li 태그의 자식으로 input 태그를 넣는다.
  li.appendChild(input);
  // li 태그의 자식으로 button 태그를 넣는다.
  li.appendChild(button);

  // #list-container의 자식으로 li 태그를 넣는다.
  listContainer.appendChild(li);
}

// input에 입력한 할일을 목록으로 추가하고, 기존의 input과 button은 삭제하는 함수
function addTask() {
  // 사용자가 입력한 텍스트를 가져온다.
  const input = document.getElementById("task-input");
  const task = input.value;

  if (task === "") {
    alert("할 일을 적어주세요.");
  } else {
    // 입력한 텍스트를 innerText로 하는 li 태그를 생성한다.
    const li = document.createElement("li");
    li.innerText = task;

    // #list-conatiner의 자식으로 li 태그를 넣는다.
    listContainer.appendChild(li);

    // input과 button은 제거한다.
    listContainer.removeChild(input.parentElement);
  }

  saveData();
}

let todoNum = localStorage.getItem("todoNum");
const todayTodoNum = document.getElementById("today");

function checkTodoNum() {
  // const todayTodoNum = document.getElementById("today"); // 처음엔 이렇게 해놓고, ㅣocalStorage할때 밖으로 뺌
  // let todoNum = 0; // 처음엔 이렇게 해놓고, ㅣocalStorage할때 밖으로 뺌
  listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      //나중에 같이 트슈하면서 추가하기
      e.target.classList.value === "" ? todoNum++ : todoNum--;
      todayTodoNum.innerText = todoNum;

      e.target.classList.toggle("checked");
      saveData();
    }
  });
}

checkTodoNum();

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.setItem("todoNum", todayTodoNum.innerText);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  todayTodoNum.innerText = localStorage.getItem("todoNum") || 0;
}

showTask();
