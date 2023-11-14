<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/usersQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'login':
        $user_email    = $_POST['user_email'];
        $user_password = $_POST['user_password'];

        $user = getUser($user_email, $user_password);
        if($user){
          session_start();
          $_SESSION['house_id']        = $user['fk_house_id'];
          $_SESSION['user_first_name'] = $user['first_name'];
          $_SESSION['user_last_name']  = $user['last_name'];
          header('Location: /htdocsDirectories/lar_tcc/views/tasks/index.php');
          exit();
        } else {
          global $is_login_incorrect;
          $is_login_incorrect = true;
          //keep in login page in order to display an error to the user
        }
        break;

      case 'signup':
        break;
    }
  }
?>

