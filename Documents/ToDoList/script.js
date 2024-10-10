// Wait for the DOM to fully load before running the code
document.addEventListener('DOMContentLoaded', () => {
    // Select the 'Add Task' button, input field, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new list item for the task and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Assign an onclick event to the remove button to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item, then append the item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
    }

    // Add event listener to the 'Add Task' button to call addTask on click
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for the 'keypress' event to add tasks with Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});