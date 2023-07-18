//These selects are defined in 'generateTaskList' file
const completedTasksNumber = document.getElementById('completedTasksNumber');
const tasksNumber          = document.getElementById('tasksNumber');

selectTaskDate.addEventListener('change', countFilteredTasks);
selectTaskRoom.addEventListener('change', countFilteredTasks);

document.body.onload = countFilteredTasks();
function countFilteredTasks(){
  due_date = selectTaskDate.value;
  room_id = selectTaskRoom.value;

  countHttpRequest = new XMLHttpRequest();
  countHttpRequest.onreadystatechange = updateTaskCounter;
  countHttpRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  countHttpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  countHttpRequest.send("operation=countTasks&" +
                    "due_date=" + due_date + 
                    "&room_id=" + room_id);
}

function updateTaskCounter() {
  // Request Made
  if (countHttpRequest.readyState === XMLHttpRequest.DONE) { 
    // Status 200 = Request OK
    if (countHttpRequest.status === 200) {              
      // Convert response from JSON format to a javascript object
      const tasksCounter = JSON.parse(countHttpRequest.responseText);
      completedTasksNumber.innerHTML = tasksCounter.completed_tasks;
      tasksNumber.innerHTML = tasksCounter.all_tasks;
    } else {
      alert("There was a problem with the request.");
    }
  }
}