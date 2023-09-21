


function addTask () {
    var input = document.getElementById("input");
    
    var newTask = input.value;

    if (newTask.trim !== "") {
        
        var item = document.createElement("li");
        
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" />' +
        '<input type="button" class="remove" onclick="markDone(this.parentNode)" value="&#x2715;" />' +
        newTask;
        
        document.getElementById("tasks").appendChild(item);
        input.value = "";
        input.palaceholder = "enter next task...";

    }
}

// change styling used for given item
function markDone (item) {
    item.className = 'finished';
}

function remove (item) {
    // remove item completely from document
    item.remove('finished');
}

function doAbout(divabout) {
    var divAbout = document.getElementById("divabout");
    divAbout.innerHTML = "Author is Tesah Capers";
    divAbout.classList.add("aboutcolor");

}

function clearAbout() {
    var divAbout = document.getElementById("divabout");
    divAbout.innerHTML = "";
    divAbout.classList.remove("aboutcolor");
}