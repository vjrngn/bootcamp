let todoList = document.querySelector('#todo-list');
let todoInput = document.querySelector('#todo-text');
let todosCount = 0;


function addTodo(todoText) {
    if (todoText.trim() === '') { // input validation
        return; // early return
    }

    todosCount += 1;

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `
        ${todoText}
        <input type="checkbox" id=${todosCount} />
    `;
    todoList.appendChild(li);

    const checkBox = document.getElementById(todosCount);
    checkBox.addEventListener('input', function (event) {
        // TODO: add line through if checkbox is checked.
    });

    todoInput.value = '';
    todoText = '';
    console.log(todosCount);
}

(function () {
    let addTodoButton = document.querySelector('#add-todo-button');
    let todoText = '';

    todoInput.addEventListener('input', function (event) {
        todoText = event.target.value;
    });

    addTodoButton.addEventListener('click', function (event) {
        event.preventDefault();  
        addTodo(todoText);
    });
})();