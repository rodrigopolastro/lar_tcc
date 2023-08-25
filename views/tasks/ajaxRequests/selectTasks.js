window.addEventListener('load', selectTasks);
selectTaskDate.addEventListener('change', selectTasks);
selectTaskRoom.addEventListener('change', selectTasks);

function selectTasks(){
  dueDate = selectTaskDate.value;
  roomId = selectTaskRoom.value;

  selectTasksRequest = new XMLHttpRequest();
  selectTasksRequest.onreadystatechange = listFilteredTasks;
  selectTasksRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  selectTasksRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectTasksRequest.send("operation=selectTasks&" +
                          "due_date=" + dueDate + 
                          "&room_id=" + roomId);
}

let allTasksNumber = 0;
let completedTasksNumber = 0;
function listFilteredTasks() {
  // Remove current tasks beforing loading new ones
  Array.from(uncompletedTasksList.children).forEach(task => task.remove());
  Array.from(completedTasksList.children).forEach(task => task.remove());
  // OBS: The 'Array.from()' is called to convert the HTMLCollection returned 
  // from .children - which is an 'array-like' object - to an actual array
  
  if (selectTasksRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectTasksRequest.status === 200) {              
      const response = JSON.parse(selectTasksRequest.responseText);

      if(response.is_query_successful){
  
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
