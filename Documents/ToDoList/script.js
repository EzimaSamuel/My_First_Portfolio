// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the 'Add Task' button, input field, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text and trim any whitespace
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add event listener to remove the task when clicked
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append the remove button to the list item, and the item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field for the next task
        taskInput.value = "";
    }

    // Event listener to add task when 'Add Task' button is clicked
    addButton.addEventListener('click', addTask);

    // Event listener to add task when 'Enter' key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});