function createTaskDiv(task){

  const taskDiv             = createElementWithAttributes('div', {class: 'rounded-4 mb-3 mx-2 ps-2'});
  const outerTaskDiv01      = createElementWithAttributes('div', {class: 'row py-2'});
  const outerTaskDiv02      = createElementWithAttributes('div', {class: 'row'});
  const outerTaskDiv03      = createElementWithAttributes('div', {class: 'row'});
  const innerTaskDiv01      = createElementWithAttributes('div', {class: 'col-1'});
  const innerTaskDiv02      = createElementWithAttributes('div', {class: 'col-5 pe-5 me-5'});
  const innerTaskDivEdit    = createElementWithAttributes('div', {class: 'col d-flex justify-content-end ms-5 ps-5'});
  const innerTaskDiv03      = createElementWithAttributes('div', {class: 'col d-flex justify-content-end'});
  const innerTaskDivDrop    = createElementWithAttributes('div', {class: 'col d-flex justify-content-end'});
  const innerTaskDiv04      = createElementWithAttributes('div', {class: 'col ms-1'});
  const innerTaskDiv05      = createElementWithAttributes('div', {class: 'col'});
  const innerTaskDiv06      = createElementWithAttributes('div', {class: 'col-1'});
  const innerTaskDiv07      = createElementWithAttributes('div', {class: 'col ms-1'});
  const innerTaskDiv08      = createElementWithAttributes('div', {class: 'col'});
  const innerTaskDiv09      = createElementWithAttributes('div', {class: 'col-1'});
  const shownTaskDiv        = createElementWithAttributes('div', {class: ''})
  const hiddenInnerTaskDiv  = createElementWithAttributes('div', {class: 'card-body'});
  const hiddenOuterTaskDiv  = createElementWithAttributes('div', {class: 'collapse', id: task.task_id});
  hiddenOuterTaskDiv.dataset.furnitureId = task.fk_furniture_id

  const taskName        = createElementWithAttributes('h4', {class: 'mt-1 txt-brown'});
  const taskDescription = createElementWithAttributes('p',  {});
  const taskDueDate     = createElementWithAttributes('p',  {});
  const taskRoom        = createElementWithAttributes('p',  {});
  const taskFurniture   = createElementWithAttributes('p',  {});
  const taskCollapse    = document.createElement("a");
  taskCollapse.setAttribute('class', 'btn');
  taskCollapse.setAttribute('data-bs-toggle', 'collapse');
  taskCollapse.setAttribute('href', '#' + task.task_id);

  const testeText           = document.createTextNode('Teste');
  const taskNameText        = document.createTextNode(task.task_name);
  const taskDescriptionText = document.createTextNode(task.task_description);
  const taskDueDateText     = document.createTextNode('Data: ' + task.due_date + ' | Hora: ' + task.due_time);
  const taskRoomText        = document.createTextNode("Cômodo: " + task.room_name);
  const taskFurnitureText   = document.createTextNode("Móvel: " + task.furniture_name);
  const taskCollapseImg    = createElementWithAttributes('input', {type: 'image', src: '../../assets/images/icons/arrow.png'});  

  const formCompleteTask  = createElementWithAttributes('form', {method: 'post', action: '.'});
  const completeTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
  const completeOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation'});
  const completeSubmit    = createElementWithAttributes('input', {type: 'submit', class: 'row border border-4 shadow-sm rounded-4 ms-1 mt-1 mb-1', style: 'width: 33px'});

  const formDeleteTask  = createElementWithAttributes('form', {method: 'post', action: '.'});
  const deleteTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
  const deleteOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation', value: 'deleteTask'});
  const deleteSubmit    = createElementWithAttributes('input', {type: 'image', src: '../../assets/images/icons/trash.png', value: 'Excluir Tarefa', class:'btn'});     

  // Stablish hierarchy between elements
  taskDiv.appendChild(outerTaskDiv01);
  outerTaskDiv01.appendChild(innerTaskDiv01);
  outerTaskDiv01.appendChild(innerTaskDiv02);
  outerTaskDiv01.appendChild(innerTaskDivEdit);
  outerTaskDiv01.appendChild(innerTaskDiv03);
  outerTaskDiv01.appendChild(innerTaskDivDrop);
  outerTaskDiv01.appendChild(hiddenOuterTaskDiv).appendChild(hiddenInnerTaskDiv);
  hiddenInnerTaskDiv.appendChild(outerTaskDiv02);
  hiddenInnerTaskDiv.appendChild(outerTaskDiv03);

  formCompleteTask.appendChild(completeTaskId);
  formCompleteTask.appendChild(completeOperation);
  formCompleteTask.appendChild(completeSubmit);
  innerTaskDiv01.appendChild(formCompleteTask);
  innerTaskDiv02.appendChild(taskName).appendChild(taskNameText);

  innerTaskDivDrop.appendChild(taskCollapse).appendChild(taskCollapseImg);

  outerTaskDiv02.appendChild(innerTaskDiv06);
  outerTaskDiv02.appendChild(innerTaskDiv04);
  outerTaskDiv02.appendChild(innerTaskDiv05);

  outerTaskDiv03.appendChild(innerTaskDiv09);
  outerTaskDiv03.appendChild(innerTaskDiv07);
  outerTaskDiv03.appendChild(innerTaskDiv08);





  innerTaskDiv04.appendChild(taskDescription).appendChild(taskDescriptionText);
  innerTaskDiv05.appendChild(taskDueDate).appendChild(taskDueDateText);
  innerTaskDiv07.appendChild(taskRoom).appendChild(taskRoomText);
  innerTaskDiv08.appendChild(taskFurniture).appendChild(taskFurnitureText);

  formDeleteTask.appendChild(deleteTaskId);
  formDeleteTask.appendChild(deleteOperation);
  formDeleteTask.appendChild(deleteSubmit);
  innerTaskDiv03.appendChild(formDeleteTask);

  if (task.is_completed == true){
    taskDiv.classList.add('bg-green')
    taskDiv.classList.add('border-green')
    completedTasksNumber += 1;
    completeOperation.value = 'setTaskUncompleted';
    completeSubmit.value = '';
    completeSubmit.classList.add('bg-dark-green')
    completedTasksList.appendChild(taskDiv);
  } else { 
    taskDiv.classList.add('bg-red')
    taskDiv.classList.add('border-red')
    // Only uncompleted tasks can be edited
    const buttonEditTask = createElementWithAttributes('button', {onclick:"selectOneTask(" + task.task_id + ")", class: 'border-0 btn btn-link'});
    const buttonEditImage  = createElementWithAttributes('img', {src: '../../assets/images/icons/pen.png',});
    // Bootstrap attributes for triggering modal
    buttonEditTask.dataset.bsToggle = 'modal';
    buttonEditTask.dataset.bsTarget = '#staticBackdrop';
    innerTaskDivEdit.appendChild(buttonEditTask);
    buttonEditTask.appendChild(buttonEditImage);

    completeOperation.value = 'completeTask';
    completeSubmit.value = '';
    uncompletedTasksList.appendChild(taskDiv);
  }
}