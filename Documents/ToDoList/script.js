// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Button to add a task
    const taskInput = document.getElementById('task-input'); // Input field for the new task
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // Function to add a task to the list
    function addTask() {
        // Get the trimmed value from the input field
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            li.textContent = taskText; // Set the text content to the task

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove"; // Set button text
            removeButton.className = 'remove-btn'; // Assign a class name for styling

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                // Remove the li element from the task list when clicked
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeButton);
            // Append the li element to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = '';
        } else {
            // Alert the user to enter a task if the input is empty
            alert("Please enter a task.");
        }
    }

    // Attach an event listener to the addButton
    addButton.addEventListener('click', addTask); // Call addTask when the button is clicked

    // Attach an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if the Enter key is pressed
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});