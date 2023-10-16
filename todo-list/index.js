const getElementInput = document.getElementById('input-box');
const getElementUl = document.getElementById('list-container');

function saveData() {
    localStorage.setItem('data', getElementUl.innerHTML);
}

function addList() {
    if (!getElementInput.value) {
        alert('Vui long nhap vao to-do-list cua trung!!!!');
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = getElementInput.value;
    getElementUl.appendChild(li);

    let deleteElement = document.createElement('span');
    deleteElement.innerHTML = '&#128369';
    li.appendChild(deleteElement);

    let editElement = document.createElement('span1');
    editElement.innerHTML = '&#128736';
    li.appendChild(editElement);

    getElementInput.value = '';
    saveData();
}

getElementUl.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        saveData();
        return;
    }

    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
        return;
    }
});

// editElement.addEventListener('click', () => {
//     getElementUl.replace();
//     saveData();
// });

function showList() {
    getElementUl.innerHTML = localStorage.getItem('data');
}

showList();
