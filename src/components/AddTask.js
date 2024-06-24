function AddTask({addNewTask}) {
    

    function handleNewTask(event) {
        if (event.key === 'Enter') {
            addNewTask(event.target.value);
        }
    }

    return (
        <div id="add-task-content" className="container">
            <div>Add Task</div>
            <input
                id="addTaskInput"
                type='text'
                onKeyDown={(e) => handleNewTask(e)}
            />
        </div>
    )
}

export default AddTask;