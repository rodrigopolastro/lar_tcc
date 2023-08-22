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
  <title>Organize seu Lar!</title>
</head>
<body>
  <header> 
    <h1> Organize seu Lar! </h1>
    <h3>Por enquanto, o login sempre passa o user_id = 1</h3>
    <form action="." method="post">
      <input type="hidden" name="mode" value="tasks">
      <input type="hidden" name="user_id" value="<?= $logged_user_id ?>">
      <input type="submit" value="Login">
    </form>
    <form action="." method="post">
      <input type="submit" value="Cadastre-se">
    </form>
    <hr>
  </header>
  <main>
  <h1> Venha organizar seu Lar aqui</h1>
  <h3> Um aplicativo de tarefas voltado a organização da casa!</h3>
  <h3> Simples, intuitivo e com um diagrama de personalização dinâmico!</h3>
  <img src="https://placeholder.co/500" alt="">
<?php require findPath('views/components/footer.html'); ?>
 

