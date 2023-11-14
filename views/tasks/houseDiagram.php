<div class="d-flex mx-3">
  <div>
    <div class="d-flex justify-content-between">
      <h1 class="txt-brown">Lar de <?= $_SESSION['user_first_name']?></h1>
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
    <canvas id="staticHouseDiagram" class="border-brown rounded-2"></canvas>
  </div>