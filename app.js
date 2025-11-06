let task = document.getElementById("task");
let addtask = document.getElementById("addtask");
let list = document.getElementById("list");


addtask.addEventListener("click", (edit) => {
  console.log(task);
  if (addtask.innerHTML == "ADD TASK") {
    list.innerHTML += `<div class="main"><li>${task.value}</li> <div> <button onclick="edit(this)">Edit</button> <button onclick ="remove(this)">Delete</button></div> </div>`;

    task.value = " ";
  } else {
    let updateToDo = task.value;
    console.log(updateToDo);
    let element = document.querySelector(".main").firstElementChild;
    console.log(element);
    let periTask = element;
    console.log(periTask);
    console.log(updateToDo);
    periTask.innerHTML = updateToDo;
  }
});
function edit(element) {
  console.log(task.value);
  addtask.innerText = "edited";
  let pre = element.parentNode.parentNode.firstChild;
  task.value = pre.innerHTML;
}

function remove(element) {
  console.log("hello");

  let del = element.parentNode.parentNode;

  del.innerHTML = "  ";
}
