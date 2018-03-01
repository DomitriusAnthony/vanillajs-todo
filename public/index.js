var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty')
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('()', this.todos[i].todoText);
                }
            }
        };
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // Case 1: If everything's true, make everything false.
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

// These actions will handle onclick actions on the DOM
var handlers = {
    displayTodos: function () {
        todoList.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
    },
    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function () {
        var changeTodoPosition = document.getElementById('changeTodoPosition');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');

        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
        changeTodoTextInput.value = '';
        changeTodoPosition.value = '';

    },
    deleteTodo: function () {
        var deleteTodoPosition = document.getElementById('deleteTodoPosition');

        todoList.deleteTodo(deleteTodoPosition.valueAsNumber, 1);
        deleteTodoPosition = '';
    },
    toggleCompleted: function () {
        var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');

        todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber, 1);
        toggleCompletedPosition = '';
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''

        // This loop will display however many Todos there are. If there is none, todos.length will be 0.
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            todoLi.textContent = todoList.todos[i].todoText;
            todoLi.appendChild(todoLi);

        }

    }
}