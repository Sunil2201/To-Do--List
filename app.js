const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList= document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


function addTodo(event){
   

    //Create a todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check trash Button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear Todo input
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
    }

    //Check  Mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(e){

    const todos = todoList.childNodes;
    todos.forEach((todo)=>{
        if(todo.classList!==undefined){
       switch(e.target.value){
                case "all":
                    todo.style.display = "flex"  ; 
                    break; 
                case "completed":
                if(todo.classList.contains("completed")){
                  todo.style.display="flex"; 
                }else{
                    todo.style.display = "none"; 
                }
                break; 
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display="flex"; 
                    }else{
                        todo.style.display = "none"; 
                    }
                    break; 
                    
    }
    }
    });
}

const months = [ "January","February","March","April","May","June","July","August","September","October","November","December"]
const days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
var today = new Date();
var date = days[today.getDay()] + ',' + (today.getDate() +"th");
var month = months[today.getMonth()];
document.getElementById("currentDate").innerHTML = date;
document.getElementById("currentMonth").innerHTML = month;

