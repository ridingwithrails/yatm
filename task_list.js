var task_list = [];

var $ = function (id) { return document.getElementById(id); }

var update_task_list = function () {
    if ( task_list.length == 0 ) {
        $("task_list").value = "";
    } else {
        var list = "";
        for ( var i in task_list ) {
            list += (parseInt(i)+1) + ": " + task_list[i] + "\n";
        }
        $("task_list").value = list;
    }
}

var add_task_click = function () {
    $("add_task").blur();
    var task = prompt("Enter a task:", "");
    if ( task != "" && task != null) {
        task_list[task_list.length] = task;
        update_task_list();
    }
}

var sort_tasks_click = function () {
    $("sort_tasks").blur();
    task_list.sort();
    update_task_list();
}

var delete_task_click = function () {
    $("delete_task").blur();
    if ( task_list.length == 0 ) {
        alert("No task to delete.");
        return;
    }
    var to_delete = prompt("Enter the task number to delete:", "");
    if (to_delete == null) { return; }
    to_delete = parseInt(to_delete);
    if ( isNaN(to_delete) ) {
        alert("You did not enter a number.");
        return;
    }
    if ( to_delete < 1 ) {
        alert("The task number is too low.");
        return;
    }
    if ( to_delete > task_list.length ) {
        alert("The task number is too high.");
        return;
    }
    to_delete--;
    task_list.splice(to_delete, 1);
    update_task_list();
}

window.onload = function() {
    $("add_task").onclick = add_task_click;
    $("sort_tasks").onclick = sort_tasks_click;
    $("delete_task").onclick = delete_task_click;
    update_task_list();
}