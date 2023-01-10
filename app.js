const input = document.querySelector('#input');
const addBtn = document.querySelector('.input-btn');
const tasksContainer = document.querySelector('#tasks-container');

addBtn.addEventListener('click', function () {
    const text = input.value;
    if (text !== "") {
        const task = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;

        task.className = "task";
        task.appendChild(p);
        task.appendChild(addDeleteBtn());
        tasksContainer.appendChild(task);
        input.value = "";
    }
})

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-task";
    deleteBtn.addEventListener('click', function (e) {
        const items = e.target.parentElement;
        tasksContainer.removeChild(items);
    })
    return deleteBtn;
}

