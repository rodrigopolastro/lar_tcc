function createTaskDiv(task){

  const taskDiv = createElementWithAttributes('div', {class: 'row border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2 mb-2'});
  const outerTaskDiv01 = createElementWithAttributes('div', {class: 'row'});
  const outerTaskDiv02 = createElementWithAttributes('div', {class: 'row'});
  const outerTaskDiv03 = createElementWithAttributes('div', {class: 'row'});
  const innerTaskDiv01 = createElementWithAttributes('div', {class: 'col-2'});
  const innerTaskDiv02 = createElementWithAttributes('div', {class: 'col'});
  const innerTaskDiv03 = createElementWithAttributes('div', {class: 'col'});
  const innerTaskDiv04 = createElementWithAttributes('div', {class: 'col'});
  const innerTaskDiv05 = createElementWithAttributes('div', {class: 'col'});
  const innerTaskDiv06 = createElementWithAttributes('div', {class: 'col'});
  const innerTaskDiv07 = createElementWithAttributes('div', {class: 'col'});
  const innerTaskDiv08 = createElementWithAttributes('div', {class: 'col'});

  const taskName        = createElementWithAttributes('h4', {});
  const taskDescription = createElementWithAttributes('p', {});
  const taskDueDate     = createElementWithAttributes('p', {});
  const taskRoom        = createElementWithAttributes('p', {});
  const taskFurniture   = createElementWithAttributes('p', {});

  const taskNameText        = document.createTextNode(task.task_name);
  const taskDescriptionText = document.createTextNode(task.task_description);
  const taskDueDateText     = document.createTextNode('Data: ' + task.due_date + ' | Hora: ' + task.due_time);
  const taskRoomText        = document.createTextNode("Cômodo: " + task.room_name);
  const taskFurnitureText   = document.createTextNode("Móvel: " + task.furniture_name);

  const formCompleteTask  = createElementWithAttributes('form', {method: 'post', action: '.'});
  const completeTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
  const completeOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation'});
  const completeSubmit    = createElementWithAttributes('input', {type: 'submit', class: 'row border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2 ms-1', style: 'width: 30px'});

  const formDeleteTask  = createElementWithAttributes('form', {method: 'post', action: '.'});
  const deleteTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
  const deleteOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation', value: 'deleteTask'});
  const deleteSubmit    = createElementWithAttributes('input', {type: 'submit', value: 'Excluir Tarefa', class: 'row border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2'});     

  // Stablish hierarchy between elements
  taskDiv.appendChild(outerTaskDiv01);
  taskDiv.appendChild(outerTaskDiv02);
  taskDiv.appendChild(outerTaskDiv03);
  outerTaskDiv01.appendChild(innerTaskDiv01);
  outerTaskDiv01.appendChild(innerTaskDiv02);
  outerTaskDiv02.appendChild(innerTaskDiv03);
  outerTaskDiv02.appendChild(innerTaskDiv04);
  outerTaskDiv02.appendChild(innerTaskDiv05);
  outerTaskDiv03.appendChild(innerTaskDiv06);
  outerTaskDiv03.appendChild(innerTaskDiv07);
  outerTaskDiv03.appendChild(innerTaskDiv08);

  formCompleteTask.appendChild(completeTaskId);
  formCompleteTask.appendChild(completeOperation);
  formCompleteTask.appendChild(completeSubmit);
  innerTaskDiv01.appendChild(formCompleteTask);
  innerTaskDiv02.appendChild(taskName).appendChild(taskNameText);
  innerTaskDiv03.appendChild(taskDescription).appendChild(taskDescriptionText);
  innerTaskDiv04.appendChild(taskDueDate).appendChild(taskDueDateText);

  innerTaskDiv06.appendChild(taskRoom).appendChild(taskRoomText);
  innerTaskDiv07.appendChild(taskFurniture).appendChild(taskFurnitureText);

  formDeleteTask.appendChild(deleteTaskId);
  formDeleteTask.appendChild(deleteOperation);
  formDeleteTask.appendChild(deleteSubmit);
  innerTaskDiv08.appendChild(formDeleteTask);

  if (task.is_completed == true){
    completedTasksNumber += 1;
    completeOperation.value = 'setTaskUncompleted';
    completeSubmit.value = '';
    completeSubmit.classList.add('bg-danger')
    completedTasksList.appendChild(taskDiv);
  } else { 
    // Only uncompleted tasks can be edited
    const buttonEditTask = createElementWithAttributes('button', {onclick:"selectOneTask(" + task.task_id + ")", class: 'row border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2'});
    buttonEditTask.innerHTML = 'Editar Tarefa';
    // Bootstrap attributes for triggering modal
    buttonEditTask.dataset.bsToggle = 'modal';
    buttonEditTask.dataset.bsTarget = '#staticBackdrop';
    innerTaskDiv05.appendChild(buttonEditTask);

    completeOperation.value = 'completeTask';
    completeSubmit.value = '';
    uncompletedTasksList.appendChild(taskDiv);
  }
}