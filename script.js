let todoList = [
    {
        item: 'Buy milk',
        date: '17/04/2025'
    },
    {
        item: 'Go to versity',
        date: '17/04/2025'
    }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    console.log(todoItem);
    todoList.push({ item: todoItem, date: todoDate });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

// function displayItems() {
//     let displayElement = document.querySelector('#todo-items');
//     displayElement.innerText = '';
//     for (let i = 0; i < todoList.length; i++) {
//         displayElement.innerText = displayElement.innerText + '\n' + todoList[i];
//     }
// }

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        // let item = todoList[i].item;
        // let date = todoList[i].date;
        let { item, date } = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${date}</span>
            <button class="delete-btn" onClick="todoList.splice(${i},1); 
            displayItems();">Delete</button>
    `;
    }
    containerElement.innerHTML = newHtml;
}