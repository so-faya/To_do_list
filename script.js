// Function to add a new todo item
        function addTodo() {
            // Get the input field and trim any extra spaces
            const input = document.getElementById('todo-input');
            const task = input.value.trim();
            // If the input is empty, do nothing
            if (task === "") return;

            // Get the current date and time
            const now = new Date();
            const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

            // Find the container where the todos will be added
            const todoContainer = document.getElementById('todo-container');
            // Check if there is already a section for the current date
            let dateSection = document.querySelector(`.date-section[data-date="${dateStr}"]`);

            // If there's no section for the current date, create one
            if (!dateSection) {
                dateSection = document.createElement('div');
                dateSection.className = 'date-section';
                dateSection.setAttribute('data-date', dateStr);
                dateSection.innerHTML = `<div class="date-header">${dateStr}</div><ul class="todo-list"></ul>`;
                todoContainer.appendChild(dateSection);
            }

            // Get the todo list under the current date section
            const todoList = dateSection.querySelector('.todo-list');
            // Create a new todo item
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <input type="checkbox" onclick="toggleCompleted(this)">
                <span>${task}</span> <small style="margin-left:auto;color:#005C78">${timeStr}</small>
            `;
            // Add the new todo item to the list
            todoList.appendChild(todoItem);

            // Clear the input field
            input.value = '';
        }

        // Function to toggle the completed state of a todo item
        function toggleCompleted(checkbox) {
            // Get the parent element (the todo item)
            const todoItem = checkbox.parentElement;
            // If the checkbox is checked, add the 'completed' class
            if (checkbox.checked) {
                todoItem.classList.add('completed');
            } else {
                // Otherwise, remove the 'completed' class
                todoItem.classList.remove('completed');
            }
        }