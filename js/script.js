// Selecting UI elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const taskList = document.getElementById('taskList');

// -------- ADD TASK --------
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Creating a new <li> element
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Task text span
    const span = document.createElement('span');
    span.textContent = taskText;

    // Toggle completion on click
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-sm btn-danger';
    delBtn.textContent = "Delete";

    // Delete this task
    delBtn.addEventListener('click', () => {
        li.remove();
    });

    // Appending items
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    // Clear input after adding
    taskInput.value = "";
});

// -------- DELETE ALL TASKS --------
deleteAllBtn.addEventListener('click', () => {
    taskList.innerHTML = "";
});
