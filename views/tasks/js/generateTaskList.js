const selectTaskDate = document.getElementById('selectTaskDate');
const selectTaskRoom  = document.getElementById('selectTaskRoomId');

const uncompletedTasksList = document.getElementById('uncompletedTasksList');
const completedTasksList   = document.getElementById('completedTasksList');

const completedTasksCounter = document.getElementById('completedTasksCounter');
const allTasksCounter       = document.getElementById('allTasksCounter');

var dueDate, roomId;

selectTaskDate.addEventListener('change', requestFilteredTasks);
selectTaskRoom.addEventListener('change', requestFilteredTasks);
document.body.onload = requestFilteredTasks();

function requestFilteredTasks(){
  dueDate = selectTaskDate.value;
  roomId = selectTaskRoom.value;

  filterTasksRequest = new XMLHttpRequest();
  filterTasksRequest.onreadystatechange = listFilteredTasks;
  filterTasksRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  filterTasksRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  filterTasksRequest.send("operation=selectTasks&" +
                          "due_date=" + dueDate + 
                          "&room_id=" + roomId);
}

function listFilteredTasks() {
  // Remove current tasks beforing loading new ones
  Array.from(uncompletedTasksList.children).forEach(task => task.remove());
  Array.from(completedTasksList.children).forEach(task => task.remove());
  // OBS: The 'Array.from()' is called to convert the HTMLCollection returned 
  // from .children - which is an 'array-like' object - to an actual array
  
  // Request Made
  if (filterTasksRequest.readyState === XMLHttpRequest.DONE) { 
    // Status 200 = Request OK
    if (filterTasksRequest.status === 200) {              
      // Convert response from JSON format to a javascript object
      const response = JSON.parse(filterTasksRequest.responseText);

      if(response.successful_query){
        let allTasksNumber = 0;
        let completedTasksNumber = 0;
  
        const filteredTasks = response.value;
        filteredTasks.forEach(task => {
          allTasksNumber += 1;
          createTaskDiv(task);
        })
        completedTasksCounter.innerHTML = completedTasksNumber;
        allTasksCounter.innerHTML       = allTasksNumber;
      } else {
        alert("Erro na consulta: " + response.value);
      }
    } else {
      alert("There was a problem with the 'filterTasks' request.");
    }
  }
}
