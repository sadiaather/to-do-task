
let task = document.getElementById("task");
let addtask = document.getElementById("addtask");
let list = document.getElementById("list");
addtask.addEventListener("click",()=>{
    console.log(task);
    
 list.innerHTML += `<div class="main"><li>${task.value}</li> <div ><button onclick="edit(this)">edit</button>
  <button onclick= "delet(this)">delete</button></div></div>`
 task.value = " "

})
function edit(element){

 console.log(task.value);
 addtask.innerText = "edited"
let pre = element.parentNode.parentNode.firstChild
task.value = pre.innerHTML}




function delet(element){
let del = element.parentNode.parentNode.firstChild
task.value = del.innerHTML
del.innerHTML = "  "
 console.log(del.innerHTML)
}




// let task = document.getElementById("task");
// let addtask = document.getElementById("addtask");
// let list = document.getElementById("list");

// addtask.addEventListener("click",(edit)=>{
//     console.log(task)
//     if(addtask.innerHTML=="ADD TASK"){
//   list.innerHTML += `<div class="main"><li>${task.value}</li> <div> <button onclick="edit(this)">Edit</button> <button onclick ="delete(this)">Delete</button></div> </div>`;

// task.value = " "
// }
// else{
//     let updateToDo = task.value;
//     console.log(updateToDo)
//   let element = document.querySelector(".main").firstElementChild
//   console.log(element);
//   let periTask = element;
//   console.log(periTask);
//    console.log(updateToDo);
//   periTask.innerHTML = updateToDo
  
  
// }
// }
// );

// function edit(element){
//   // let pre = document.querySelector(".main").firstElementChild
// let pre = element.parentNode.parentNode.firstChild                  
//  console.log(task.value);

//  task.value = pre.innerHTML
// addtask.innerText = "save"
// }


// function delet(element){
// let del = document.querySelector(".main").firstElementChild
// task.value = del.innerHTML
// del.innerHTML = "  "
//  console.log(del.innerHTML)
// }


























