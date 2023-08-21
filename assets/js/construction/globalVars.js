// rootTilePath helper constants
const tilesDirectory = "/htdocsDirectories/lar_tcc/assets/images/tiles/";
const placeholderTileName = "placeholderTile.png";

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

// Vars required for Rooms CRUD
var roomId, roomName, tileId, tileName;


