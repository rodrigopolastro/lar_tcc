//============== CONSTANTS ==============//

// rootTilePath helper 
const TILES_DIRECTORY = "/htdocsDirectories/lar_tcc/assets/images/tiles/";
const PLACEHOLDER_TILE_NAME = "placeholderTile.png";

// Canvas
const TILE_SIZE = 32;
const NUMBER_OF_LINES = 20;
const NUMBER_OF_COLUMNS = 20; 
const CANVAS_WIDTH  = NUMBER_OF_LINES * TILE_SIZE; 
const CANVAS_HEIGHT = NUMBER_OF_COLUMNS * TILE_SIZE; 

//============== OBJECTS ==============//

// Section Selector
const roomsSectionButton     = document.getElementById('roomsSectionButton');
const furnitureSectionButton = document.getElementById('furnitureSectionButton');

// Rooms Section
const roomsSection     = document.getElementById('roomsSection');
const roomNameInput    = document.getElementById('roomNameInput');
const roomTileInputDiv = document.getElementById('roomTileInputDiv');
const roomTileInputImg = document.getElementById('roomTileInputImg');
const createRoomButton = document.getElementById('createRoomButton');
const popoverContent   = document.getElementById('popoverContent');
const roomsList        = document.getElementById('roomsList');

// Furniture Section
const furnitureSection = document.getElementById('furnitureSection');
const furnitureList    = document.getElementById('furnitureList');

// Editing room modal
const modalUpdateRoomButton = document.getElementById('modalUpdateRoomButton');
const modalRoomNameInput    = document.getElementById('modalRoomNameInput');
const modalRoomTileInputImg = document.getElementById('modalRoomTileInputImg');
const modalTilesList        = document.getElementById('modalTilesList');

// House Diagram Editor
const clearDiagramButton  = document.getElementById('clearDiagramButton');
const eraserModeButton    = document.getElementById('eraserModeButton');
const eraserModeIndicator = document.getElementById('eraserModeIndicator');
const saveDiagramButton   = document.getElementById('saveDiagramButton');
const houseDiagram        = document.getElementById('houseDiagram');

//============== GLOBAL VARIABLES ==============//
// Vars required for Rooms CRUD
var roomId, roomName, tileId, tileName;



