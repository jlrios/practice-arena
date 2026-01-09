const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-task");

addButton.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value.trim() === '') {
    alert("You must write something!")
  } else {
    let li = document.createElement("li");

    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");

    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  inputBox.focus();

  saveTasks();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTasks();
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTasks();
  }
}, false);

function saveTasks() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasksList() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}

showTasksList();