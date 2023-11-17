<div class="d-flex mx-3"> 
  <div id="houseDiagramEditor" class="">
    <div class="d-flex justify-content-between">
      <h1 class="txt-brown">Lar de <?= $_SESSION['user_first_name']?></h1>
      <div class="d-flex justify-content-end">
        <a href="/htdocsDirectories/lar_tcc/views/construction/" class="d-flex align-items-center bg-red border-red rounded-3 h5 px-4 me-3">
          <img src="../../assets/images/icons/hammer.png" alt="">
        </a>
        <a href="/htdocsDirectories/lar_tcc/views/tasks/" class="d-flex align-items-center bg-red border-red rounded-3 h5 px-4">
          <img src="../../assets/images/icons/checklist.png" alt="">
        </a>
      </div>
    </div>
    <canvas id="houseDiagram" class="border-brown rounded-2 mb-2"></canvas>
    <button id="eraserModeButton" class="bg-red border-red rounded-2 h5 p-1 txt-brown me-2">
      <img src="../../assets/images/icons/eraser.png">
      Modo Borracha: <span id="eraserModeIndicator">OFF</span>
    </button>
    <button id="clearDiagramButton" class="bg-red border-red rounded-2 h5 p-1 txt-brown">
      <img src="../../assets/images/icons/trash.png">
      Limpar Diagrama 
    </button>
  </div>