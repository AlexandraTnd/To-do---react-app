import { useState } from "react";

function AddTask({ addNewTask }) {
    const [newTask, setNewTask] = useState("");

    function handleNewTask(event) {
        if (event.key === 'Enter') {
            addNewTask(event.target.value);
        }
    }

    return (
        <div id="add-task" className="container">
            <h3><span className="green-text">Add</span> Task</h3>
            <div className="add-task-content">
                <input
                    id="add-task-input"
                    type='text'
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => handleNewTask(e)}
                />
                <button
                    className="add-btn"
                    onClick={() => addNewTask(newTask)}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default AddTask;