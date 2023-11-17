function createTaskDiv(task){
  const taskDiv           = createElementWithAttributes('div', {class: 'rounded-4 mb-3 mx-2 row p-2'});
  const taskName          = createElementWithAttributes('h4', {class: 'col-6 txt-brown'});
  const taskInfoDiv       = createElementWithAttributes('div', {class: 'col d-flex flex-column justify-content-center'}); 
  const hiddenTaskDetails = createElementWithAttributes('div', {class: 'collapse', id: task.task_id});
  const detailsLowestRow  = createElementWithAttributes('div', {class: 'd-flex justify-content-between'});
  hiddenTaskDetails.dataset.furnitureId = task.fk_furniture_id;

  const taskDescription = createElementWithAttributes('p',  { class:"pb-1"});
  const taskDueDate     = createElementWithAttributes('p',  {});
  const taskRoom        = createElementWithAttributes('p',  {});
  const taskFurniture   = createElementWithAttributes('h6', {});
  const taskCollapse    = createElementWithAttributes("a", {class:"col-1 d-flex align-items-center"});
  taskCollapse.setAttribute('data-bs-toggle', 'collapse');
  taskCollapse.setAttribute('href', '#' + task.task_id);

  const taskNameText        = document.createTextNode(task.task_name);
  const taskDescriptionText = document.createTextNode(task.task_description ? task.task_description : "Sem descrição");
  const taskRoomText        = document.createTextNode(task.room_name ? task.room_name : "Sem cômodo");
  const taskDueDateText     = document.createTextNode(formatTaskDate(task.due_date, task.due_time));
  const taskFurnitureText   = document.createTextNode("Móvel: " + task.furniture_name);
  const taskCollapseImg    = createElementWithAttributes('img', {src: '../../assets/images/icons/arrow.png'});  

  const formCompleteTask  = createElementWithAttributes('form', {method: 'post', action: '.', class:"col-1"});
  const completeTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
  const completeOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation'});
  const completeSubmit    = createElementWithAttributes('input', {type: 'submit', class: 'row border border-4 shadow-sm rounded-4 ms-1 mt-1 mb-1', style: 'width: 33px'});

  const formDeleteTask  = createElementWithAttributes('form', {method: 'post', action: '.'});
  const deleteTaskId    = createElementWithAttributes('input', {type: 'hidden', name: 'task_id', value: task.task_id});
  const deleteOperation = createElementWithAttributes('input', {type: 'hidden', name: 'operation', value: 'deleteTask'});
  const deleteSubmit    = createElementWithAttributes('input', {type: 'image', src: '../../assets/images/icons/trash.png', value: 'Excluir Tarefa', class:'btn'});     

  // Stablish hierarchy between elements
  // taskDiv.appendChild(mainDiv);
  taskDiv.appendChild(formCompleteTask);
    formCompleteTask.appendChild(completeTaskId);
    formCompleteTask.appendChild(completeOperation);
    formCompleteTask.appendChild(completeSubmit);

  taskDiv.appendChild(taskName).appendChild(taskNameText);

  taskDiv.appendChild(taskInfoDiv);
    taskInfoDiv.appendChild(taskRoom).appendChild(taskRoomText);
    taskInfoDiv.appendChild(taskDueDate).appendChild(taskDueDateText);

    
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
    const buttonEditTask = createElementWithAttributes('button', {onclick:"selectOneTask(" + task.task_id + ")", class: ' col-1 border-0 btn btn-link'});
    const buttonEditImage  = createElementWithAttributes('img', {src: '../../assets/images/icons/pen.png',});
    buttonEditTask.dataset.bsToggle = 'modal';
    buttonEditTask.dataset.bsTarget = '#staticBackdrop';
    taskDiv.appendChild(buttonEditTask).appendChild(buttonEditImage);

    completeOperation.value = 'completeTask';
    completeSubmit.value = '';
    uncompletedTasksList.appendChild(taskDiv);
  }
  
  taskDiv.appendChild(taskCollapse).appendChild(taskCollapseImg);
  taskDiv.appendChild(hiddenTaskDetails);
    hiddenTaskDetails.appendChild(taskDescription).appendChild(taskDescriptionText);
    hiddenTaskDetails.appendChild(detailsLowestRow)
      detailsLowestRow.appendChild(taskFurniture).appendChild(taskFurnitureText);
      detailsLowestRow.appendChild(formDeleteTask);
        formDeleteTask.appendChild(deleteTaskId);
        formDeleteTask.appendChild(deleteOperation);
        formDeleteTask.appendChild(deleteSubmit);
}