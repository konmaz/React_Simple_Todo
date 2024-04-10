import {TodoItem} from "./TodoItem.jsx";

export function TodoList({todos, toggleTodo, deleteTodo }){
    return (
        <ul className={"divide-y divide-gray-100"}>
            {todos.length === 0 && "Empty"}
            {todos.map(todo => {
                return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>
            })}
        </ul>
    )
}