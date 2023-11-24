<?php
  global $is_login_incorrect;
  $is_login_incorrect = false;

  //Absolute path instead of relative one
  require $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require findPath('controllers/usersController.php'); 
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Includes bootstrap css -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <!-- My CSS -->
  <link rel="stylesheet" href="/htdocsDirectories/lar_tcc/assets/css/construction.css">
  <link rel="stylesheet" href="/htdocsDirectories/lar_tcc/assets/fonts/stylesheet.css">
  <title>Página de Login</title>
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
        <div class="d-flex justify-content-center">
          <h5 class="txt-red">Voltar para a <a href="/htdocsDirectories/lar_tcc/index.php" class="text-decoration-none txt-brown fw-bold"> Página inicial</a></h5>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-2 txt-red">
        <h1 class="fw-bold fontGeneral">FAÇA SEU LOGIN</h1>
      </div>
      <?php if($is_login_incorrect == true) { ?>
        <div class="d-flex justify-content-center">
          <h3>E-mail ou senha incorretos!</h3>
        </div>
      <?php } ?>
      <div class="">
        <form action="./login.php" method="post" class="d-flex flex-column justify-content-center align-items-center">
          <input type="hidden" id="" name="operation" value="login">
          <input type="text" id="userEmailInput" name="user_email" placeholder="Digite seu e-mail" class="rounded-5 bg-red border-red txt-brown fw-bold mb-4 py-2 w-100 fs-5"> 
          <input type="password" id="userPasswordInput" name="user_password" placeholder="Digite sua senha" class="rounded-5 bg-red border-red txt-brown fw-bold mb-4 py-2 w-100 fs-5">
          <input id="" type="submit" value="Entrar" class="border-0 bg-brown rounded-4 h5 py-3 px-5 fw-bold txt-pink">
        </form>
        <div class="d-flex justify-content-center">
          <a href="/htdocsDirectories/lar_tcc/views/signup.php" class="text-decoration-none txt-brown fw-bold fs-5"> Não tenho conta </a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>