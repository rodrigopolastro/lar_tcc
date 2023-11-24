<div class="d-flex mx-3">
  <div>
    <div class="d-flex justify-content-between">
      <h1 class="txt-brown fontGeneral fw-bold">Lar de <?= $_SESSION['user_first_name']?></h1>
      <div class="d-flex justify-content-end">
        <a href="/htdocsDirectories/lar_tcc/views/construction/" class="d-flex align-items-center bg-green border-green rounded-3 h5 px-4 me-3 opacity-25">
          <img src="../../assets/images/icons/hammer.png" alt="">
        </a>
        <a href="/htdocsDirectories/lar_tcc/views/tasks/" class="d-flex align-items-center bg-red border-red rounded-3 h5 px-4">
          <img src="../../assets/images/icons/checklist.png" alt="">
        </a>
      </div>
    </div>
    <canvas id="staticHouseDiagram" class="border-brown rounded-2"></canvas>
  </div>