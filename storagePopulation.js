// Function to populate the storage list
function populateStorageList() {
    // Retrieve stored items from local storage
    var storedItems = JSON.parse(localStorage.getItem('storageItems'));

    // Check if there are any stored items
    if (storedItems && storedItems.length > 0) {
        var storageListContainer = document.querySelector('.Group10');

        // Clear the existing list to prevent duplicates
        storageListContainer.innerHTML = '';

        // Loop through each stored item and create DOM elements for them
        storedItems.forEach(function(item) {
            var newItem = document.createElement('div');
            newItem.className = 'ItemTemplate';
            newItem.innerHTML = `
                <div class="Group8">
                    <!-- Your item HTML structure here -->
                    <div>Token: ${item.token}</div>
                    <div>Secret Key: ${item.secretKey}</div>
                    <div>AWS Bucket: ${item.awsBucket}</div>
                    <div>Access ID Key: ${item.accessIdKey}</div>
                </div>
            `;

            // Append the new item to the storage list container
            storageListContainer.appendChild(newItem);
        });
    }
}

// Call the populateStorageList function when the page loads
window.onload = function() {
    populateStorageList();
};

function redirectToNewPage() {
    window.location.href = "add-storage.html"; // Replace "add-storage.html" with the URL of your new HTML page
}


// Function to handle redirection
function redirectToStorageFiles() {
    window.location.href = "storage-files.html";
}

// Add event listeners to each "Open" button
var openButtons = document.querySelectorAll('.Open');
openButtons.forEach(function(button) {
    button.addEventListener('click', redirectToStorageFiles);
});
