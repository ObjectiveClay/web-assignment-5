//PART 1
// Task 0
console.log("Bimagambet Miras, SE-2524");
alert("Hello, JavaScript World!");

// Task 1
let myString = "JavaScript";
let myNumber = 100;
let myBoolean = true;

console.log("Addition:", myNumber + 50);
console.log("Multiplication:", myNumber * 2);
console.log("Concatenation:", myString + " is awesome!");

// PART 2
// Task 2
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('task2-text').textContent = "Text successfully changed using JavaScript!";
});

// Task 3
document.getElementById('colorBtn').addEventListener('click', function() {
    let box = document.getElementById('styleBox');
    box.style.backgroundColor = box.style.backgroundColor === 'black' ? 'transparent' : 'black';
    box.style.color = box.style.backgroundColor === 'black' ? 'white' : 'black';
});

document.getElementById('fontSizeBtn').addEventListener('click', function() {
    document.getElementById('styleBox').style.fontSize = "24px";
});

// Task 4
document.getElementById('addItemBtn').addEventListener('click', function() {
    let list = document.getElementById('itemList');
    let newItem = document.createElement('li');
    newItem.className = "list-group-item border-dark";
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
});

document.getElementById('removeItemBtn').addEventListener('click', function() {
    let list = document.getElementById('itemList');
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});

//PART 3
// Task 5
let hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#dc3545'; 
    this.style.color = 'white';
});
hoverBox.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'transparent';
    this.style.color = 'black';
});

// Task 6
document.getElementById('liveInput').addEventListener('keyup', function(e) {
    document.getElementById('liveOutput').textContent = e.target.value;
});

// Task 7
let calcButtons = document.querySelectorAll('.calc-btn');
calcButtons.forEach(button => {
    button.addEventListener('click', function() {
        let num1 = parseFloat(document.getElementById('calcNum1').value);
        let num2 = parseFloat(document.getElementById('calcNum2').value);
        let operator = this.getAttribute('data-op');
        let result = 0;

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('calcResult').textContent = "Enter both numbers";
            return;
        }

        switch(operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? num1 / num2 : "Error (division by zero)"; break;
        }
        document.getElementById('calcResult').textContent = result;
    });
});

// PART 4
// Task 8
let tasks = []; 

function renderTasks() {
    let list = document.getElementById('todoList');
    list.innerHTML = ""; 

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.className = `list-group-item border-dark task-item ${task.completed ? 'completed-task' : ''}`;
        
        let contentDiv = document.createElement('div');
        contentDiv.className = "task-content";
        contentDiv.innerHTML = `<strong>${task.title}</strong><small>${task.desc}</small>`;

        let actionsDiv = document.createElement('div');
        actionsDiv.className = "task-actions align-items-center";

        let toggleBtn = document.createElement('button');
        toggleBtn.className = `btn btn-sm ${task.completed ? 'btn-secondary' : 'btn-success'}`;
        toggleBtn.textContent = task.completed ? "Undo" : "Done";
        toggleBtn.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        };

        let deleteBtn = document.createElement('button');
        deleteBtn.className = "btn btn-sm btn-danger";
        deleteBtn.textContent = "✕";
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            renderTasks();
        };

        actionsDiv.appendChild(toggleBtn);
        actionsDiv.appendChild(deleteBtn);
        li.appendChild(contentDiv);
        li.appendChild(actionsDiv);
        list.appendChild(li);
    });
}

document.getElementById('addTaskBtn').addEventListener('click', function() {
    let title = document.getElementById('taskTitle').value;
    let desc = document.getElementById('taskDesc').value;

    if (title.trim() === "" || desc.trim() === "") {
        alert("Please fill in all fields!");
        return;
    }

    tasks.push({
        title: title,
        desc: desc,
        completed: false
    });

    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDesc').value = "";
    renderTasks();
});