import "./index.css"
import {useEffect, useState} from "react";
import {NewTodoForm} from "./NewTodoForm.jsx";
import {TodoList} from "./TodoList.jsx";

export default function App() {

    const [todos, setTodos] = useState(() => {
        const local_notes = localStorage.getItem("Notes");
        if (local_notes == null) return [];

        return JSON.parse(local_notes);
    });

    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(todos))
    }, [todos]);

    function addTodo(title){
        setTodos((currentTodos) => {
            return [...currentTodos, {id: crypto.randomUUID(), title: title, completed: false}]
        })

    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodo => {
            return currentTodo.filter(todo => todo.id !== id)
        })
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-xl font-bold mb-4">Notes</h1>
                    <NewTodoForm onSubmit={addTodo}/>
                    <h2 className="text-lg font-bold mt-4 mb-2">Todo List</h2>
                    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                </div>
            </div>


        </>
    )
}