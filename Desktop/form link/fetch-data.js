// Define an asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the user data from the API
        const response = await fetch(apiUrl);
        // Check if the response is OK, else throw an error
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        const users = await response.json();

        // Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Create a list to display user names
        const userList = document.createElement('ul');

        // Loop through the user data and create list items for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the fetchUserData function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);