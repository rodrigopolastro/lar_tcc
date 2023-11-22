<div class="d-flex mx-3"> 
  <div id="houseDiagramEditor" class="">
    <div class="d-flex justify-content-between">
      <h1 class="txt-brown fontGeneral fw-bold">Lar de <?= $_SESSION['user_first_name']?></h1>
      <div class="d-flex justify-content-end">
        <form action="/htdocsDirectories/lar_tcc/" method="post">
          <input type="hidden" name="user_id" value="1">
          <input type="hidden" name="mode" value="construction">
          <input type="image" value="Modo Construção" src="../../assets/images/icons/hammer.png" class="bg-red border-red rounded-3 h5 p-1 px-5 me-3">
        </form>
        <form action="/htdocsDirectories/lar_tcc/" method="post">
          <input type="hidden" name="user_id" value="1">
          <input type="hidden" name="mode" value="tasks">
          <input type="image" value="Exibir tarefas" src="../../assets/images/icons/checklist.png" class="bg-red border-red rounded-3 h5 p-1 px-5">
        </form>
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
    <!-- 
      IT'S NOT LONGER POSSIBLE TO SAVE THE CHANGES MANUALLY:
      <button id="saveDiagramButton" class="border border-4 border-start-0 border-bottom-0 rounded-2 h5 p-1">
        <img src="../../assets/images/icons/confirm.svg">
        Salvar Diagrama
      </button>

      EXPLANATION:
        For now, every action in the diagram is automatically saved on the database,
        what makes them irreversible. Althought that's not the most user-friendly 
        approach, this change is necessary for the current development of the project,
        but the "save button feature" can return in future updates. 
    -->
  </div>