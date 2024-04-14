import {TodoItem} from "./TodoItem.jsx";

export function TodoList({todos, toggleTodo, deleteTodo }){
    return (
        <ul className="divide-y divide-gray-100">
            {todos.length === 0 && <li className="text-gray-500 py-2">Empty</li>}
            {todos.map(todo => (
                <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            ))}
        </ul>
    )
}