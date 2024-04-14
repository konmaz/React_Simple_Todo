import {useState} from "react";

export function NewTodoForm({onSubmit}){

    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        if(e !== "")
            onSubmit(newItem);
        setNewItem("");
    }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row mb-4">
                <label htmlFor="item" className="block text-gray-700 font-bold mb-2">New Item</label>
                <input
                    value={newItem}
                    onChange={event => setNewItem(event.target.value)}
                    type="text"
                    id="item"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter new item"
                />
            </div>
            <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add
            </button>
        </form>
    )
}