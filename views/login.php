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
  <title>Página de Login</title>
</head>
<body>
  <div class="d-flex justify-content-center align-items-center">
    <div class="">
      <img src="../assets/images/background/House bookshelves 1.png">
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="px-5">
        <div class="d-flex justify-content-center">
          <img src="../assets/images/logo.svg" style="width: 350px;">
        </div>
        <div class="d-flex justify-content-center ">
          <h5 class="txt-red">Voltar para a <a href="/htdocsDirectories/lar_tcc/" class="text-decoration-none txt-brown fw-bold"> Página inicial</a></h5>
        </div>
        <div class="d-flex justify-content-center mt-2 txt-red">
          <h1>Faça seu Login!</h1>
        </div>
        <?php if($is_login_incorrect == true) { ?>
          <div class="d-flex justify-content-center">
            <h3>E-mail ou senha incorretos!</h3>
          </div>
        <?php } ?>
        <div class="d-flex justify-content-center align-items-center px-5">
          <form action="./login.php" method="post">
            <input type="hidden" id="" name="operation" value="login">
            <input type="text" id="userEmailInput" name="user_email" placeholder="Digite seu e-mail" class="rounded-4 bg-red border-red txt-brown fw-bold mb-2"> 
            <input type="password" id="userPasswordInput" name="user_password" placeholder="Digite sua senha" class="rounded-4 bg-red border-red txt-brown fw-bold mt-2">
            <div class="d-grid p-0 mt-3">
              <input id="" type="submit" value="Entrar" class="border border-4 border-start-0 border-bottom-0 rounded-2 h5">
            </div>
          </form>
          <!-- <form action="" class="">
            <input type="text" id="UserEmail" name="UserEmail" placeholder="Digite seu E-Mail!" class="rounded-4 bg-red border-red txt-brown fw-bold mb-2">
            <br>
            <input type="password" id="UserPassword" name="UserPassword" placeholder="Digite sua senha!" class="rounded-4 bg-red border-red txt-brown fw-bold mt-2">
          </form> -->
        </div>
        <div class="d-flex justify-content-center p-0 mt-3">
          <button class="border-0 bg-brown rounded-4 h5 p-3 px-5 fw-bold txt-pink">ENTRAR</button>
        </div>
        <div class="d-flex justify-content-center mt-2">
          <a href="/htdocsDirectories/lar_tcc/views/signup.php" class="text-decoration-none txt-brown fw-bold fs-5"> Não tenho conta </a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>

<!-- <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  Includes bootstrap css
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  My CSS
  <link rel="stylesheet" href="/htdocsDirectories/lar_tcc/assets/css/construction.css">
  <title>Página de Login</title>
</head>
<body>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 700px;">
      <div class="d-flex justify-content-center">
        <h3>E-mail ou senha incorretos!</h3>
      </div>
    <div class="border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2 p-3">
      <div class="d-flex justify-content-center ">
        <h7>Ir para a</h7>
        <a href="/htdocsDirectories/lar_tcc/"> Página inicial</a>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <h1>Faça seu Login!</h1>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <form action="./login.php" method="post">
          <input type="hidden" id="" name="operation" value="login">
          <input type="text" id="userEmailInput" name="user_email" placeholder="Digite seu e-mail">
          <input type="password" id="userPasswordInput" name="user_password" placeholder="Digite sua senha" class="rounded-4 bg-red border-red txt-brown fw-bold mt-2">
          <div class="d-grid p-0 mt-3">
            <input id="" type="submit" value="Entrar" class="border border-4 border-start-0 border-bottom-0 rounded-2 h5">
          </div>
        </form>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <a href="/htdocsDirectories/lar_tcc/views/signup.php"> Criar uma conta </a>
      </div>
    </div>
  </div>
</body>
</html> -->