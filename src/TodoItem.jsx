export function TodoItem({id, completed, title, toggleTodo, deleteTodo }) {
    return <li key={id}>
        <label>
            <input type={"checkbox"} checked={completed}
                   onChange={event => toggleTodo(id, completed)}/>
            {title}
        </label>
        <button className={"btn btn-danger"} onClick={() => deleteTodo(id)}>Delete</button>
    </li>
}