<?php
  //Absolute path instead of relative one
  require $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";

  //Variable to track current user in order to present the appropriate data.
  //In the future, this value will be taken from the login and signup pages.
  if(isset($_POST['user_id'])){
    $logged_user_id = $_POST['user_id'];
  }
  if(isset($_POST['mode'])){
    $mode = $_POST['mode']; 
  }

  if(isset($logged_user_id)){
    if($mode == 'tasks'){
      header('Location: /htdocsDirectories/lar_tcc/views/tasks/');
      exit();
    } else { # mode == 'construction'
      header('Location: /htdocsDirectories/lar_tcc/views/construction/');
      exit();
    }
  }
// If 'logged_user_id' is not set, the homepage is loaded
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Includes bootstrap css -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <!-- My CSS -->
  <link rel="stylesheet" href="/htdocsDirectories/lar_tcc/assets/css/construction.css">
  <link rel="stylesheet" href="/htdocsDirectories/lar_tcc/assets/css/tasks.css">
  <title>Organize seu Lar!</title>
</head>
<body class="container-fluid" style="max-width: 1460px">
  <header class="mt-2 d-flex justify-content-center align-items-center bg-yellow" style="height: 10vh; width: 100%;">
    <div class="d-flex justify-content-between" style="width:90%;">
      <img src="/htdocsDirectories/lar_tcc/assets/images/logo.svg" alt="">
      <div>
        <a href="login.html" class="bg-brown rounded-5 txt-pink py-2 px-4 fs-3 me-3 fw-bold link-underline link-underline-opacity-0">Login</a>
        <a href="signup.html" class="txt-brown fs-3 fw-bold" >ou cadastre-se</a>
      </div>
      </div>
  </header>
  <main>
    <div class="w-100 vh-100 bg-img-landing text-center txt-brown" style="">
      <h1 class="fw-bold"> Deixe seu <span class="txt-red">LAR</span> um Lugar mais Leve: <br> Organize tudo enquanto se diverte!</h1>
      <h3 class="txt-red"> Gerencie suas tarefas domésticas de modo <br> eficaz e prazeroso com o sistema LAR</h3>
    </div>
    <div class="w-100 vh-100 bg-dark-green text-center txt-pink container-fluid">
      <h1 class="pt-5 pb-5 fw-bold">Torne seu lar um lugar mais feliz!</h1>
      <div class="d-flex justify-content-center mt-5 mb-5">
        <div class="bg-red border-red rounded-5 text-center p-3 me-5 fw-bold">
          <img src="assets/images/icons/broom.png">
          <h3 class="txt-green mt-5 mb-5 fw-bold">Tarefas simplificadas</h3>
          <h4 class="txt-brown mb-5 pb-5 fw-bold">Com LAR, associe tarefas à <br>móveis de sua casa e <br>obtenha o controle do caos <br>doméstico!</h4>
        </div>
        <div class="bg-red border-red rounded-5 text-center p-3 ms-5 me-5">
          <img src="assets/images/icons/Smiling.png">
          <h3 class="txt-green mt-5 mb-5 fw-bold">Diversão na rotina <br>doméstica</h3>
          <h4 class="txt-brown mb-5 pb-5 fw-bold">Sinta prazer organizando <br>sua casa com o visual lúdico <br>e satisfatório do LAR</h4>
        </div>
        <div class="bg-red border-red rounded-5 text-center p-3 ms-5">
          <img src="assets/images/icons/couple.png">
          <h3 class="txt-green mt-5 mb-5 fw-bold">Casa feliz, família feliz</h3>
          <h4 class="txt-brown mb-5 pb-5 fw-bold">Uma casa limpa e <br>organizada te fará ter <br>mais momentos felizes com <br>quem você ama!</h4>
        </div>
      </div>
      <img src="assets/images/background/Group.svg">
    </div>
    <div class="w-100 bg-brown text-center txt-pink container-fluid d-flex justfy-content-center">
      <div class="w-50 fw-bold txt-pink">
        <h1 class="mt-5 mb-5">Construa seu lar!</h1>
        <div class="mb-5 d-flex align-items-center"> <img src="assets/images/icons/SofaCircle.png" class="me-2"><h3>Mais de +30 móveis para personalizar sua casa!</h3> </div>
        <div class="mb-5 d-flex align-items-center"> <img src="assets/images/icons/PenCircle.png"  class="me-2"><h3>Crie, edite e gerencie as tarefas de cada móvel</h3> </div>
        <div class="mb-5 d-flex align-items-center"> <img src="assets/images/icons/RoomCircle.png" class="me-2"><h3>Coloque pisos e paredes e crie quantos <br>cômodos quiser!</h3> </div>
      </div>
      <div class="w-50">
        <img src="assets/images/background/landingHalf.png" style="width:101.81%">
      </div>
    </div>
    <div></div>
<?php require findPath('views/components/footer.html'); ?>
 

