

let task = document.getElementById("task");
let addtask = document.getElementById("addtask");
let list = document.getElementById("list");

 
addtask.addEventListener("click",()=>{
    console.log(task);
    
if (addtask.innerHTML === "ADD TASK"){
        
 list.innerHTML += `<div class="main"><li>${task.value}</li> <div ><button onclick="edit(this)"><i class="fa-regular fa-pen-to-square"></i></button>
  <button onclick= "remove(this)"><i class="fa-regular fa-eraser"></i></button></div></div>`
 task.value = " "
}
else{
    let updateToDo = task.value;
    element = document.querySelector(".main").firstElementChild
    console.log(element);
    let periTask = element;
    console.log(updateToDo);
    console.log(periTask);
    periTask.innerHTML = updateToDo
    addtask.innerText = "ADD TASK"
     task.value = " "
      Swal.fire("Edited is done!");
    
}



})
function edit(element){
 console.log(task.value);
 addtask.innerText = "edited"
let pre = element.parentNode.parentNode.firstChild
task.value = pre.innerHTML


}



function remove(event){
event.parentNode.parentNode.innerHTML = " "
 Swal.fire("Delete is done!");
 
}
 





























