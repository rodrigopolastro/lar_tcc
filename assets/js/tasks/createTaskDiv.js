function createTaskDiv(task){
  const taskDiv = createElementWithAttributes('div', {});

  const taskName        = createElementWithAttributes('h4', {});
  const taskDescription = createElementWithAttributes('p', {});
  const taskDueDate     = createElementWithAttributes('p', {});
  const taskRoom        = createElementWithAttributes('p', {});
  const taskFurniture   = createElementWithAttributes('p', {});

  const taskNameText        = document.createTextNode(task.task_name);
  const taskDescriptionText = document.createTextNode("Descrição: " + task.task_description);
  const taskDueDateText     = document.createTextNode('Data de Realização: ' + task.due_date + ' | Horário: ' + task.due_time);
  const taskRoomText        = document.createTextNode("Cômodo: " + task.room_name);
  const taskFurnitureText   = document.createTextNode("Móvel: " + task.furniture_name);
    
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
  taskDiv.appendChild(taskRoom).appendChild(taskRoomText);
  taskDiv.appendChild(taskFurniture).appendChild(taskFurnitureText);

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
}