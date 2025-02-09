const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    const task = inputBox.value;
    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listContainer.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
    } else {
        alert('Please enter a task');
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData();
    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

loadData();