function ToDoTask({ index, task, checkTask }) {

    
    return (
        <div className='task'>
            <div className={task.checked ? "task-name task-checked" : "task-name"}>{task.name}</div>
            <div className="task-buttons">
                {
                    task.checked ? "" : <button id={`update-` + index}>Update</button>
                }
                <button id={`delete-` + index}>Delete</button>
                <button id={`check-` + index} onClick={() => checkTask(index)}>{task.checked ? "Uncheck" : "Check"}</button>
            </div>
        </div>
    )
}

export default ToDoTask;