"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    // Add a new todo item
    addTodo(task, dueDate) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }
    // Mark a todo item as completed
    completeTodo(id) {
        const todo = this.todos.find((item) => item.id === id);
        if (!todo) {
            throw new Error("Todo not found");
        }
        todo.completed = true;
    }
    // Remove a todo item
    removeTodo(id) {
        this.todos = this.todos.filter((item) => item.id !== id);
    }
    // Return all todo items
    listTodos() {
        return this.todos;
    }
    // Filter todos by completed status
    filterTodos(completed) {
        return this.todos.filter((item) => item.completed === completed);
    }
    // Update task description
    updateTodo(id, newTask) {
        const todo = this.todos.find((item) => item.id === id);
        if (!todo) {
            throw new Error("Todo not found");
        }
        todo.task = newTask;
    }
    // Clear all completed todos
    clearCompletedTodos() {
        this.todos = this.todos.filter((item) => !item.completed);
    }
}
// Example usage
const myTodos = new TodoList();
myTodos.addTodo("Buy groceries", new Date("2025-03-01"));
myTodos.addTodo("Complete assignment", new Date("2025-02-28"));
myTodos.completeTodo(1);
console.log(myTodos.listTodos());
