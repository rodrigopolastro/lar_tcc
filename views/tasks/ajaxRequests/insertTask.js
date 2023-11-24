addTaskButton.addEventListener('click', () => {
  dueDate = selectTaskDate.value;
  roomId = selectTaskRoom.value;
  insertTask();
})

function insertTask(){
  insertTaskRequest = new XMLHttpRequest();
  insertTaskRequest.onreadystatechange = displayCreatedTask;
  insertTaskRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  insertTaskRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  insertTaskRequest.send("operation=insertTask"  +
                        "&due_date=" + dueDate + 
                        "&room_id=" + roomId);
}

function displayCreatedTask(){
  if (insertTaskRequest.readyState === XMLHttpRequest.DONE) { 
    if (insertTaskRequest.status === 200) { 
      // console.log(insertTaskRequest.responseText)
      const createdTask = JSON.parse(insertTaskRequest.responseText);
      createTaskDiv(createdTask);  
      let tasksNumber = allTasksCounter.innerHTML;
      tasksNumber++;
      allTasksCounter.innerHTML = tasksNumber;
    } else {
      alert("There was a problem with the 'insertTask' request.");
    }
  }
}

