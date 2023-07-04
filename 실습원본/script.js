const listContainer = document.getElementById("list-container");

function createInput() {
  let li = document.createElement("li");
  let input = document.createElement("input");

  input.setAttribute("type", "text");
  input.setAttribute("id", "input-box");
  input.setAttribute("placeholder", "Add your text");

  li.appendChild(input);
  listContainer.appendChild(li);
}
