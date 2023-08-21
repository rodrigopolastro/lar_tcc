// This id comes from the 'onclick' event of the 'edit task'
// This same button triggers the modal in which the task info will be displayed
function selectOneTask(editingTaskId) {
  selectOneTaskRequest = new XMLHttpRequest();
  selectOneTaskRequest.onreadystatechange = displayTaskInfo;
  selectOneTaskRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  selectOneTaskRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectOneTaskRequest.send("operation=selectTask&task_id=" + editingTaskId);
}

function displayTaskInfo() {
  // Request Made
  if (selectOneTaskRequest.readyState === XMLHttpRequest.DONE) { 
    // Status 200 = Request OK
    if (selectOneTaskRequest.status === 200) {                
      // Convert response from JSON format to a javascript object
      const editingTask = JSON.parse(selectOneTaskRequest.responseText);

      // Assign task values to inputs
      task_id_input.value     = editingTask.task_id;
      name_input.value        = editingTask.task_name;
      description_input.value = editingTask.task_description;
      due_date_input.value    = editingTask.due_date;
      due_time_input.value    = editingTask.due_time;
    } else {
      alert("There was a problem with the 'getTask' request.");
    }
  }
}