const completedTasksNumber = document.getElementById('completedTasksNumber');
const tasksNumber          = document.getElementById('tasksNumber');

//These selects are defined in 'generateTaskList' file
selectTaskDate.addEventListener('change', requestTasksQuantity);
selectTaskRoom.addEventListener('change', requestTasksQuantity);

document.body.onload = requestTasksQuantity();
function requestTasksQuantity(){
  due_date = selectTaskDate.value;
  room_id = selectTaskRoom.value;

  countTasksRequest = new XMLHttpRequest();
  countTasksRequest.onreadystatechange = updateTaskCounter;
  countTasksRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  countTasksRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  countTasksRequest.send("operation=countTasks" +
                    "&due_date=" + due_date + 
                    "&room_id=" + room_id);
}

function updateTaskCounter() {
  // Request Made
  if (countTasksRequest.readyState === XMLHttpRequest.DONE) { 
    // Status 200 = Request OK
    if (countTasksRequest.status === 200) {              
      // Convert response from JSON format to a javascript object
      const tasksCounter = JSON.parse(countTasksRequest.responseText);
      completedTasksNumber.innerHTML = tasksCounter.completed_tasks;
      tasksNumber.innerHTML = tasksCounter.all_tasks;
    } else {
      alert("There was a problem with the 'countTasks' request.");
    }
  }
}