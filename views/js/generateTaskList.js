const selectTaskDate = document.getElementById('selectTaskDate');
const selectTaskRoom  = document.getElementById('selectTaskRoomId');

const uncompletedTasksList = document.getElementById('uncompletedTasksList');
const completedTasksList   = document.getElementById('completedTasksList');

selectTaskDate.addEventListener('change', filterTasks);
selectTaskRoom.addEventListener('change', filterTasks);

document.body.onload = filterTasks();
function filterTasks(){
  due_date = selectTaskDate.value;
  room_id = selectTaskRoom.value;

  filterHttpRequest = new XMLHttpRequest();
  filterHttpRequest.onreadystatechange = listFilteredTasks;
  filterHttpRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
  filterHttpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  filterHttpRequest.send("operation=selectTasks&" +
                    "due_date=" + due_date + 
                    "&room_id=" + room_id);
}

function listFilteredTasks() {
  // Request Made
  if (filterHttpRequest.readyState === XMLHttpRequest.DONE) { 
    // Status 200 = Request OK
    if (filterHttpRequest.status === 200) {              
      // Convert response from JSON format to a javascript object
      const filteredTasks = JSON.parse(filterHttpRequest.responseText);
      
      // Remove current tasks beforing loading new ones
      Array.from(uncompletedTasksList.children).forEach(task => task.remove());
      Array.from(completedTasksList.children).forEach(task => task.remove());
      // OBS: The 'Array.from()' is called to convert the HTMLCOllection returned 
      // from .children - which is an 'array-like' object - to an actual array

      // Generate html elements for each task
      filteredTasks.forEach(task => {
        const taskDiv = createElementWithAttributes('div', {});

        const taskName        = createElementWithAttributes('h4', {});
        const taskDescription = createElementWithAttributes('p', {});
        const taskDueDate     = createElementWithAttributes('p', {});
        const taskNameText        = document.createTextNode(task.task_name);
        const taskDescriptionText = document.createTextNode(task.task_description);
        const taskDueDateText     = document.createTextNode('Data de Realização: ' + task.due_date);
          
        const formCompleteTask    = createElementWithAttributes('form', {method: 'post', action: '.'});
        const completeTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
        const completeOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation'});
        const completeSubmit    = createElementWithAttributes('input', {type: 'submit'});
        if (task.is_completed == false){
          completeOperation.value = 'completeTask';
          completeSubmit.value = 'Concluir Tarefa';
        } else {
          completeOperation.value = 'setTaskUncompleted';
          completeSubmit.value = 'Marcar como não concluída';
        }

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

        // Only uncompleted tasks can be edited
        if(task.is_completed == false){
          const buttonEditTask = createElementWithAttributes('input', {type: 'button', value:'Editar Tarefa', onclick:"requestTaskInfo(" + task.task_id + ")"});
          // Bootstrap attributes for triggering modal
          buttonEditTask.dataset.bsToggle = 'modal';
          buttonEditTask.dataset.bsTarget = '#staticBackdrop';
          taskDiv.appendChild(buttonEditTask);
        }

        // Append taskDiv to respective list
        if(task.is_completed == false){
          uncompletedTasksList.appendChild(taskDiv);
        } else {
          completedTasksList.appendChild(taskDiv);
        }
      })
    } else {
      alert("There was a problem with the request.");
    }
  }
}

