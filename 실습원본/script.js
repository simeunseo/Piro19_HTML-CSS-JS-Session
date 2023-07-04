const listContainer = document.getElementById("list-container");

function addTask() {
  var li = document.createElement("li");

  var input = document.getElementById("input-box");
  var text = input.value;

  var span = document.createElement("span");
  span.textContent = text;

  li.appendChild(span);

  listContainer.appendChild(li);

  // 기존의 <input> 태그와 <button> 태그를 제거합니다.
  listContainer.removeChild(input.parentNode);
}

function createInput() {
  let li = document.createElement("li");

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input-box");
  input.setAttribute("placeholder", "할일을 입력해주세요");

  var button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "확인";
  button.addEventListener("click", addTask);

  li.appendChild(input);
  li.appendChild(button);
  listContainer.appendChild(li);
}
