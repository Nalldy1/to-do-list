function addTask(){
    const userInput = document.getElementById("new-todo");
    const taskText = userInput.value.trim();

    if(taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new div element for the task
    const taskElement = document.createElement('div');
    taskElement.className = 'task-box';

    // Create task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Actions container
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    // Complete (checkbox) button
    const completeBtn = document.createElement('input');
    completeBtn.type = 'checkbox';
    completeBtn.title = 'Mark as completed';
    completeBtn.onclick = function() {
        if (completeBtn.checked) {
            taskSpan.classList.add('task-completed');
        } else {
            taskSpan.classList.remove('task-completed');
        }
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskElement.remove();
    };

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);

    taskElement.appendChild(taskSpan);
    taskElement.appendChild(actionsDiv);

    document.getElementById('todo-items').appendChild(taskElement);
    userInput.value = "";
}