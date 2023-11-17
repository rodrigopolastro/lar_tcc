//============== CONSTANTS ==============//
// Canvas
const TILE_SIZE = 32;
const NUMBER_OF_LINES = 20;
const NUMBER_OF_COLUMNS = 23; 
const CANVAS_WIDTH  = NUMBER_OF_COLUMNS * TILE_SIZE; 
const CANVAS_HEIGHT = NUMBER_OF_LINES * TILE_SIZE;  

//============== OBJECTS ==============//

// Tasks Menu
const selectTaskDate = document.getElementById('selectTaskDate');
const selectTaskRoom = document.getElementById('selectTaskRoomId');
const uncompletedTasksList = document.getElementById('uncompletedTasksList');
const completedTasksList   = document.getElementById('completedTasksList');
const completedTasksCounter = document.getElementById('completedTasksCounter');
const allTasksCounter       = document.getElementById('allTasksCounter');
const addTaskButton         = document.getElementById('addTaskButton');

// Editing task modal
const task_id_input     = document.getElementById('hiddenTaskIdInput');
const name_input        = document.getElementById('modalTaskNameInput');
const description_input = document.getElementById('modalTaskDescriptionInput');
const due_date_input    = document.getElementById('modalTaskDueDateInput');
const due_time_input    = document.getElementById('modalTaskDueTimeInput');
const modalTaskRoomIdSelect      = document.getElementById('modalTaskRoomIdSelect');
const modalTaskFurnitureIdSelect = document.getElementById('modalTaskFurnitureIdSelect');

// Static House Diagram
const staticHouseDiagram = document.getElementById('staticHouseDiagram');

//============== GLOBAL VARIABLES ==============//

// Vars required for Tasks CRUD
var dueDate, roomId, furnitureId;

// var furnitureId;
var diagramDataURL;
