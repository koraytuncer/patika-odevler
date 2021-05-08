const ekleButton = document.querySelector("#task");
const ulDom = document.querySelector("#list");

ulDom.addEventListener("click",delElement);
ulDom.addEventListener("click",compElement);
document.addEventListener("DOMContentLoaded",loadAllTodosToUI);



// Yeni ToDo Ekleme
function newElement(e){
    
    const gelenDeger = ekleButton.value.trim();
    
    if(gelenDeger == ""){

        $('.error').toast('show');

    }else{
        
        addTodoToUI(gelenDeger);
        addTodoToStorage(gelenDeger)
        $('.success').toast('show');
    }   
}

//ToDo Silme 
function delElement(e){

    if (e.target.className === "close"){
        e.target.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement);
        $('.sil').toast('show');
    }

}

//Storoage Veri Silme
function deleteTodoFromStorage(deletetodo){
     
    let todos = getTodosFromStorage(); 
    let index = todos.indexOf(deletetodo)
    

     todos.splice(index,1);
      
     localStorage.setItem("todos", JSON.stringify(todos)); 
}

//ToDo Yapıldı İşaretleyen
function compElement(e){

    if (e.target.className == "todo-list-item") {
        e.target.classList.add("checked")
    }
    else {
        e.target.className = "todo-list-item"
    }
}

//Todo için Element Oluşturma ve Ekleme
function addTodoToUI(gelenDeger){

    let listDOM = document.createElement("li");
    listDOM.className = "todo-list-item";
    listDOM.innerHTML = `${gelenDeger}<span class="close">×</span>`
    ulDom.append(listDOM);
    ekleButton.value = "";

}

// Storagedan Todoları Alma
function getTodosFromStorage(){ 
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    return todos;


}

//Storoage Veri Ekleme
function addTodoToStorage(gelenDeger){
    let todos = getTodosFromStorage();

    todos.push(gelenDeger);
    localStorage.setItem("todos",JSON.stringify(todos));

}

//Storoage Verileri Geri Yükleme
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })

}