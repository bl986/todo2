// just a test message to make sure the js file correctly linked and working
// alert("Hello!")

// recall:The addEventListener() method of the EventTarget
// interface sets up a function that will be called whenever
// the specified event is delivered to the target.
// Common targets are Element, or its children, Document,
// and Window, but the target may be any object that supports events (such as XMLHttpRequest).

// Document.querySelector()
// querySelector(selectors)
// The Document method querySelector() returns the first Element
// within the document that matches the specified selector, or group of selectors.
// If no matches are found, null is returned.

//load means to wait the page to load
window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // this function will run when clicking the submite button
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        //make sure the task is not empty
        if (!task) {
            alert('Please fill out the task');
            return;
        }

        //create a new task element
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        //and add the content to the existing task element
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);
        //add the buttons to edit or delete
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        //create the edit button, add a class tag called 'edit', add inner text 'Edit'
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        //now add the edit and delete buttons to the task action div
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        
        //then add the task action element to the task element div
        task_el.appendChild(task_actions_el);

        //then add the task element to the list element div
        list_el.appendChild(task_el);

        //initialize
        input.value = '';

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == 'edit') { //in the case the button is 'edit'
                task_input_el.removeAttribute('readonly'); //remove readonly so that we can edit the task
                task_input_el.focus(); //will auto move mouse to the task element (auto focus)
                task_edit_el.innerText = 'Save'; //change the edit button to save button
            } else {
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
            } 
        });

        task_delete_el.addEventListener('click', (e) => {
            if (confirm('You sure you want to delete this task?')) {
                list_el.removeChild(task_el);
            }
        });
    });
});