<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('database/databaseConnection.php');

if(isset($_POST['user_email']) || isset($_POST['user_password'])){

  if(strlen($_POST['user_email']) == 0){
    echo "Preencha o e-mail!";
  }
  else if(strlen($_POST['user_password']) == 0){
    echo "Preencha a senha!";
  }
  else{
    $user_email = addslashes($_POST['user_email']);
    $user_password = addslashes($_POST['user_password']);

    $procura = "SELECT * FROM users WHERE user_email = '$user_email' AND user_password = '$user_password'";
    $funocia = $connection->query($procura) or die("Impossível conectar ao banco de dados!");

    $qts = $funocia->rowCount();

    if($qts == 1){
      $user = $funocia->fetch(PDO::FETCH_ASSOC);
  
      if(!isset($_SESSION)){
        session_start();
      }
      //the variable "$_SESSION" stays true for a determined period of time
      //diferently from "$_POST" witch stays true only when the value is sended
      $_SESSION['user_id'] = $user['user_id'];
  
      header("Location: ../index.php");
  
    }
  
    else{
      echo "E-mail ou senha errados!";
    }
  }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Área de login</title>
</head>
<body>
  <h1>Faça seu login!</h1>
  <form action="" method="POST">
    <p>
      <label>EMAIL</label>
      <input type="text" name="user_email" id="">
    </p>
    <p>
      <label>SENHA</label>
      <input type="password" name="user_password" id="">
    </p>
    <button type="submit">Entrar</button>
  </form>
  <a href="/htdocsDirectories/lar_tcc/views/signup.php"> Ainda não tenho conta </a>
</body>
</html>