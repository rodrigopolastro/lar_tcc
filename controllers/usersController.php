<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/usersQueries.php');
  require_once findPath('models/housesQueries.php');

  if(!isset($_SESSION)){ session_start(); }
  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'login':
        $email    = $_POST['user_email'];
        $password = $_POST['user_password'];

        $user = getUserByEmail($email);
        if($user && $user['user_password'] == $password){
          $_SESSION['house_id']        = $user['fk_house_id'];
          $_SESSION['user_first_name'] = $user['first_name'];
          $_SESSION['user_last_name']  = $user['last_name'];
          header('Location: /htdocsDirectories/lar_tcc/views/tasks/index.php');
          exit();
        } else {
          //display an error if user email or password are incorrect
          global $is_login_incorrect;
          $is_login_incorrect = true;
        }
        break;

      case 'logout':
        session_unset();
        session_destroy();
        header('Location: /htdocsDirectories/lar_tcc/');
        exit();
        break;

      case 'signup':
        $user_email    = $_POST['user_email'];
        $user_password = $_POST['user_password'];
        $first_name    = $_POST['first_name'];
        $last_name     = $_POST['last_name'];

        $existing_user = getUserByEmail($user_email);
        if($existing_user){
          //display an error if email is already registered
          global $is_signup_incorrect;
          $is_signup_incorrect = true;
        } else {
          $house_id = createHouse();
          createUser($house_id, $user_email, $user_password, $first_name, $last_name);

          $_SESSION['house_id']        = $house_id;
          $_SESSION['user_first_name'] = $first_name;
          $_SESSION['user_last_name']  = $last_name;

          header("Location: /htdocsDirectories/lar_tcc/views/tasks/index.php");
          exit();
        }
        break;
    }
  }
?>

