//============== OBJECTS ==============//

// Tasks Menu
const selectTaskDate = document.getElementById('selectTaskDate');
const selectTaskRoom = document.getElementById('selectTaskRoomId');
const uncompletedTasksList = document.getElementById('uncompletedTasksList');
const completedTasksList   = document.getElementById('completedTasksList');
const completedTasksCounter = document.getElementById('completedTasksCounter');
const allTasksCounter       = document.getElementById('allTasksCounter');

// Editing task modal
const task_id_input     = document.getElementById('hiddenTaskIdInput');
const name_input        = document.getElementById('modalTaskNameInput');
const description_input = document.getElementById('modalTaskDescriptionInput');
const due_date_input    = document.getElementById('modalTaskDueDateInput');
const due_time_input    = document.getElementById('modalTaskDueTimeInput');

//============== GLOBAL VARIABLES ==============//

// Vars required for Tasks CRUD
var dueDate, roomId;