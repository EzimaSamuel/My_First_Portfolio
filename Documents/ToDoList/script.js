// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get the task input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                // Remove the li element from the task list
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeButton);
            // Append the li element to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = '';
        } else {
            // Alert the user if the input is empty
            alert("Please enter a task.");
        }
    }

    // Attach event listener to addButton to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // Attach event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if the Enter key is pressed
        if (event.key === 'Enter') {
            addTask();
        }
    });
});