export function TodoItem({id, completed, title, toggleTodo, deleteTodo }) {
    return <li key={id} className="flex justify-between items-center py-5">
        <label className="flex items-center">
            <input
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                className="mr-2 form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={completed ? 'line-through' : ''}>{title}</span>
        </label>
        <button
            className="btn bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => deleteTodo(id)}
        ><span>
            Delete
        </span>
        </button>
    </li>
}