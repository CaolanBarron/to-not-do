let tasks = [];

function Task(text) {
    this.text = text;
    this.html = `<li><input type='checkbox' name='${this.text}'>`+ this.text +`<button onclick='RemoveFromTasks("${this.text}")'></button></li>`; 
    this.done = false;
}

function AddToTasks(text) {
    let duplicate = false;
    tasks.forEach ( task => {
            if(task.text == text) {
                console.log("Cannot have two of the same tasks");
                duplicate = true;
                return;
            }
        }
    );
    if(!duplicate){
        tasks.push(new Task(text));
        RefreshTasksView();
    }
}
 
function RemoveFromTasks(taskText) {
    console.log("Removing: " + taskText)
    tasks = tasks.filter(currentTask => {
        return currentTask.text !== taskText;
    })
    RefreshTasksView();
}

function ToggleTaskDone() {

}


function RefreshTasksView() {
    var notDoneTasksContainer = document.getElementById('not-done-tasks-container');
    var doneTasksContainer = document.getElementById('done-tasks-container');

    notDoneTasksContainer.innerHTML = "";
    doneTasksContainer.innerHTML = "";

    tasks.forEach(task => {
        if(!task.done) {
            notDoneTasksContainer.innerHTML += task.html;
        } else {
            doneTasksContainer.innerHTML += task.html;
        }
    })
}
var taskInputBar = document.getElementById('task-input');

taskInputBar.addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        event.preventDefault;
        AddToTasks(taskInputBar.value);
    }
})