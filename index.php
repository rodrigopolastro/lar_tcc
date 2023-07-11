<?php
  //Variable to track current user in order to present the appropriate data.
  //In the future, this value will be taken from the login and signup pages.
  $logged_user_id = 1;
  $mode = filter_input(INPUT_POST, 'mode');

  if(isset($logged_user_id)){
    if($mode == 'construction'){
      header('Location: /htdocsDirectories/lar_tcc/views/construction/');
      exit();
    } else {
      header('Location: /htdocsDirectories/lar_tcc/views/tasks/');
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
    <form action="." method="post">
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
<hr>
<?php require findPath('views/components/footer.php'); ?>
 

