(document).ready(function() {
    // Getting a reference to the input field where user adds a new todo
    var $newItemInput = $("#email_input");
    // Our new todos will go inside the todoContainer
 //   var $todoContainer = $(".todo-container");
    // Adding event listeners for deleting, editing, and adding todos
    //$(document).on("click", "button.delete", deleteTodo);
    //$(document).on("click", "button.complete", toggleComplete);
   // $(document).on("click", ".todo-item", editTodo);
    //$(document).on("keyup", ".todo-item", finishEdit);
    //$(document).on("blur", ".todo-item", cancelEdit);
    $(document).on("submit", "#email_input", insertContact);

function insertContact(event) {
    event.preventDefault();
    var todo = {
      text: $newItemInput.val().trim(),
      complete: false
    };
    console.log(todo);
   // $.post("/api/todos", todo, getTodos);
   // $newItemInput.val("");
  }
}