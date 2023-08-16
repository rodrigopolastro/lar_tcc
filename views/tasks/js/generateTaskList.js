const selectTaskDate = document.getElementById('selectTaskDate');
const selectTaskRoom  = document.getElementById('selectTaskRoomId');

const uncompletedTasksList = document.getElementById('uncompletedTasksList');
const completedTasksList   = document.getElementById('completedTasksList');

const completedTasksCounter = document.getElementById('completedTasksCounter');
const allTasksCounter       = document.getElementById('allTasksCounter');

selectTaskDate.addEventListener('change', requestFilteredTasks);
selectTaskRoom.addEventListener('change', requestFilteredTasks);

document.body.onload = requestFilteredTasks();

function requestFilteredTasks(){
  due_date = selectTaskDate.value;
  room_id = selectTaskRoom.value;

  filterTasksRequest = new XMLHttpRequest();
  filterTasksRequest.onreadystatechange = listFilteredTasks;
  filterTasksRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  filterTasksRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  filterTasksRequest.send("operation=selectTasks&" +
                          "due_date=" + due_date + 
                          "&room_id=" + room_id);
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
      const filteredTasks = JSON.parse(filterTasksRequest.responseText);

      let allTasksNumber = 0;
      let completedTasksNumber = 0;

      // Generate html elements for each task
      filteredTasks.forEach(task => {
        allTasksNumber += 1;

        const taskDiv = createElementWithAttributes('div', {});

        const taskName        = createElementWithAttributes('h4', {});
        const taskDescription = createElementWithAttributes('p', {});
        const taskDueDate     = createElementWithAttributes('p', {});
        const taskNameText        = document.createTextNode(task.task_name);
        const taskDescriptionText = document.createTextNode(task.task_description);
        const taskDueDateText     = document.createTextNode('Data de Realização: ' + task.due_date);
          
        const formCompleteTask  = createElementWithAttributes('form', {method: 'post', action: '.'});
        const completeTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
        const completeOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation'});
        const completeSubmit    = createElementWithAttributes('input', {type: 'submit'});
        
        const formDeleteTask  = createElementWithAttributes('form', {method: 'post', action: '.'});
        const deleteTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
        const deleteOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation', value: 'deleteTask'});
        const deleteSubmit    = createElementWithAttributes('input', {type: 'submit', value: 'Excluir Tarefa'}); 
                    
        // Stablish hierarchy between elements
        taskDiv.appendChild(taskName).appendChild(taskNameText);
        taskDiv.appendChild(taskDescription).appendChild(taskDescriptionText);
        taskDiv.appendChild(taskDueDate).appendChild(taskDueDateText);

        formCompleteTask.appendChild(completeTaskId);
        formCompleteTask.appendChild(completeOperation);
        formCompleteTask.appendChild(completeSubmit);
        taskDiv.appendChild(formCompleteTask);

        formDeleteTask.appendChild(deleteTaskId);
        formDeleteTask.appendChild(deleteOperation);
        formDeleteTask.appendChild(deleteSubmit);
        taskDiv.appendChild(formDeleteTask);

        if (task.is_completed == true){
          completedTasksNumber += 1;
          completeOperation.value = 'setTaskUncompleted';
          completeSubmit.value = 'Marcar como não concluída';
          completedTasksList.appendChild(taskDiv);
        } else { 
          // Only uncompleted tasks can be edited
          const buttonEditTask = createElementWithAttributes('button', {onclick:"requestTaskInfo(" + task.task_id + ")", class:"btn btn-success"});
          buttonEditTask.innerHTML = 'Editar Tarefa';
          // Bootstrap attributes for triggering modal
          buttonEditTask.dataset.bsToggle = 'modal';
          buttonEditTask.dataset.bsTarget = '#staticBackdrop';
          taskDiv.appendChild(buttonEditTask);

          completeOperation.value = 'completeTask';
          completeSubmit.value = 'Concluir Tarefa';
          uncompletedTasksList.appendChild(taskDiv);
        }
      })
      completedTasksCounter.innerHTML = completedTasksNumber;
      allTasksCounter.innerHTML       = allTasksNumber;
    } else {
      alert("There was a problem with the 'filterTasks' request.");
    }
  }
}
