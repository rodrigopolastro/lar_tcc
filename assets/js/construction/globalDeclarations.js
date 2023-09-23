//============== CONSTANTS ==============//

// Default rooms list (assign portuguese names for internal variables in english)
const DEFAULT_ROOMS = {
  kitchen:    "Cozinha",
  livingRoom: "Sala de Estar",
  diningRoom: "Sala de Jantar",
  bedroom:    "Quarto",
  bathroom:   "Banheiro",
  other:      "Outro"
}

// rootTilePath helper 
const TILES_DIRECTORY = "/htdocsDirectories/lar_tcc/assets/images/tiles/";
const FURNITURE_DIRECTORY = "/htdocsDirectories/lar_tcc/assets/images/furniture/";
const PLACEHOLDER_TILE_NAME = "placeholderTile.png";
const PLACEHOLDER_FURNITURE_NAME = "placeholderFurniture.png";

// Canvas
const TILE_SIZE = 32;
const NUMBER_OF_LINES = 20;
const NUMBER_OF_COLUMNS = 20; 
const CANVAS_WIDTH  = NUMBER_OF_LINES * TILE_SIZE; 
const CANVAS_HEIGHT = NUMBER_OF_COLUMNS * TILE_SIZE; 

//============== OBJECTS ==============//

// Section Selector
const myRoomsSectionButton     = document.getElementById('myRoomsSectionButton');
const myFurnitureSectionButton = document.getElementById('myFurnitureSectionButton');

// Rooms Section
const myRoomsSection   = document.getElementById('myRoomsSection');
const roomNameInput    = document.getElementById('roomNameInput');
const roomTileInputDiv = document.getElementById('roomTileInputDiv');
const roomTileInputImg = document.getElementById('roomTileInputImg');
const createRoomButton = document.getElementById('createRoomButton');
const roomsList        = document.getElementById('roomsList');
const tilesPopoverContent = document.getElementById('tilesPopoverContent');

// My Furniture Section
const myFurnitureSection    = document.getElementById('myFurnitureSection');
const furnitureNameInput    = document.getElementById('furnitureNameInput');
const furnitureInputImg     = document.getElementById('furnitureInputImg');
const createFurnitureButton = document.getElementById('createFurnitureButton');
const myFurnitureList       = document.getElementById('myFurnitureList');

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
var roomId, roomName, 
    tileId, tileName,
    furnitureImageId, furnitureImageName;

