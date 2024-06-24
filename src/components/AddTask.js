import { useState } from "react";

function AddTask() {
    const [newtask, setNewTask] = useState();



    return (
        <div id="add-task-content" className="container">
            <div>Add Task</div>
            <input type='text' />
        </div>
    )
}

export default AddTask;