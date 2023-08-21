// rootTilePath helper constants
const tilesDirectory = "/htdocsDirectories/lar_tcc/assets/images/tiles/";
const placeholderTileName = "placeholderTile.png";

// Tileset Menu
const createRoomButton = document.getElementById('createRoomButton');
const roomNameInput      = document.getElementById('roomNameInput');
const roomTileInputDiv   = document.getElementById('roomTileInputDiv');
const roomTileInputImg   = document.getElementById('roomTileInputImg');
const roomsList          = document.getElementById('roomsList');
const roomsSection       = document.getElementById('roomsSection');
const roomsSectionButton = document.getElementById('roomsSectionButton');
const furnitureSectionButton = document.getElementById('furnitureSectionButton');
const furnitureSection       = document.getElementById('furnitureSection');
const furnitureList          = document.getElementById('furnitureList');
const popoverContent = document.getElementById('popoverContent');

// Vars required for room creation, deletion and edition
var roomId, roomName, tileId, tileName;


