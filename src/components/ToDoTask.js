import { useState } from "react";

function ToDoTask({ index, task, checkTask, deleteTask, updateTask, cancelUpdate }) {
    const [updatedTaskName, setupdatedTaskName] = useState(task.name);

    return (
        <div className='task'>
            {
                task.update ?
                    <input
                        defaultValue={task.name}
                        onChange={(e) => setupdatedTaskName(e.target.value)}
                        onKeyDown={(e) => e.key=== 'Enter' ? updateTask(updatedTaskName, index) : ""}
                        autoFocus>
                    </input> :
                    <div className={task.checked ? "task-name task-checked" : "task-name"}>{task.name}</div>
            }

            <div className="task-buttons">
                {
                    task.checked ? "" :
                        <button
                            id={`update-` + index}
                            onClick={() => task.update ? updateTask(updatedTaskName, index) : updateTask("", index)}
                        >
                            Update
                        </button>
                }
                {
                    task.update ? "" :
                        <button
                            id={`delete-` + index}
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                }
                {
                    task.update ?
                        <button onClick={() => { cancelUpdate(index); setupdatedTaskName(task.name) }}>Cancel</button> :
                        <button
                            id={`check-` + index}
                            onClick={() => checkTask(index)}>
                            {task.checked ? "Uncheck" : "Check"}
                        </button>
                }
            </div>
        </div>
    )
}

export default ToDoTask;