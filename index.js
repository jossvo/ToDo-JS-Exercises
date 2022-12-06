// Your code here
let toDoList = document.querySelector("#ToDoActivities")
let toDoInput = document.querySelector("#addToDo")

window.addEventListener("load", (event) => {
    addDeleteListener()
});

toDoInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && toDoInput.value!="" ) {
        let toDoAct = document.createElement("li")
        toDoAct.innerHTML=`<span><i class="fa fa-trash"></i></span> ${toDoInput.value}`
        toDoList.appendChild(toDoAct)
        toDoInput.value = "";
        addDeleteListener()
    }
})

let trashIcons = document.getElementsByClassName("fa fa-trash");
let trashBackground = document.getElementsByTagName("span");
function addDeleteListener(){
    for(let i=0;i<trashIcons.length;i++){
        trashIcons[i].addEventListener("click",(event)=>{
            event.target.parentElement.parentElement.remove()
            event.preventDefault();
        })
    }
    for(let i=0;i<trashBackground.length;i++){
        trashBackground[i].addEventListener("click",(event)=>{
            event.target.parentElement.remove()
            event.preventDefault();
        })
    }
}


