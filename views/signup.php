<?php
  global $is_signup_incorrect;
  $is_signup_incorrect = false;

  //Absolute path instead of relative one
  require $_SERVER['DOCUMENT_ROOT'] . "/myDirectories/lar_tcc/helpers/rootPath.php";
  require findPath('controllers/usersController.php'); 
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Includes bootstrap css -->
    <link rel="stylesheet" href="/myDirectories/lar_tcc/assets/css/bootstrap.css">
  <!-- My CSS -->
  <link rel="stylesheet" href="/myDirectories/lar_tcc/assets/css/construction.css">
  <link rel="stylesheet" href="/myDirectories/lar_tcc/assets/fonts/stylesheet.css">
  <title>Página de Criação de Conta</title>
</head>
<body class="d-flex position-absolute top-50 start-50 translate-middle">
  <div class="d-flex justify-content-center align-items-center">
    <img src="../assets/images/background/House bookshelves 1.png">
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <div class="px-5">
      <div class="mb-5">
        <div class="d-flex justify-content-center">
          <img src="../assets/images/logo.svg" style="width: 400px;">
        </div>
        <div class="d-flex justify-content-center ">
          <h5 class="txt-red">Voltar para a <a href="/myDirectories/lar_tcc/" class="text-decoration-none txt-brown fw-bold"> Página inicial</a></h5>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-2 txt-red">
        <h1 class="fw-bold fontGeneral">Crie sua conta!</h1>
      </div>
      <?php if($is_signup_incorrect == true) { ?>
        <div class="d-flex justify-content-center">
          <h3>E-mail já cadastrado</h3>
        </div>
      <?php } ?>
      <div class="">
        <form action="./signup.php" method="post" class="d-flex flex-column justify-content-center align-items-center px-5">
          <input type="hidden" name="operation" value="signup">
          <input type="text" id="userFirstNameInput" name="first_name" placeholder="Digite seu nome!" class="rounded-5 bg-red border-red txt-brown fw-bold mb-4 py-2 w-100 fs-5">
          <input type="text" id="userLastNameInput" name="last_name" placeholder="Sobrenome" class="rounded-5 bg-red border-red txt-brown fw-bold mb-4 py-2 w-100 fs-5">
          <input type="text" id="userEmailInput" name="user_email" placeholder="Digite seu E-Mail!" class="rounded-5 bg-red border-red txt-brown fw-bold mb-4 py-2 w-100 fs-5">
          <input type="password" id="userPasswordInput" name="user_password" placeholder="Digite sua senha!" class="rounded-5 bg-red border-red txt-brown fw-bold mb-4 py-2 w-100 fs-5">
          <input id="" type="submit" value="Criar Conta" class="border-0 bg-brown rounded-4 h5 p-3 px-5 fw-bold txt-pink">
        </form>
        <div class="d-flex justify-content-center mt-2">
          <a href="/myDirectories/lar_tcc/views/login.php" class="text-decoration-none txt-brown fw-bold fs-5"> Já tenho uma conta </a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>