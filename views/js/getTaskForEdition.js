// This id comes from the 'onclick' event of the 'edit task'
// This same button triggers the modal in which the task info will be displayed
function requestTaskInfo(editingTaskId) {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = displayTaskInfo;
  httpRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  httpRequest.send("operation=selectTask&task_id=" + editingTaskId);
}

function displayTaskInfo() {
  // Request Made
  if (httpRequest.readyState === XMLHttpRequest.DONE) { 
    // Status 200 = Request OK
    if (httpRequest.status === 200) {                
      // Convert response from JSON format to a javascript object
      const editingTask = JSON.parse(httpRequest.responseText);

      const task_id_input     = document.getElementById('hiddenTaskIdInput');
      const name_input        = document.getElementById('modalTaskNameInput');
      const description_input = document.getElementById('modalTaskDescriptionInput');
      const due_date_input    = document.getElementById('modalTaskDueDateInput');
      const due_time_input    = document.getElementById('modalTaskDueTimeInput');

      // Assign task values to inputs
      task_id_input.value     = editingTask.task_id;
      name_input.value        = editingTask.task_name;
      description_input.value = editingTask.task_description;
      due_date_input.value    = editingTask.due_date;
      due_time_input.value    = editingTask.due_time;
    } else {
      alert("There was a problem with the request.");
    }
  }
}