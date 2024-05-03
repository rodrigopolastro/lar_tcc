<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Includes bootstrap css -->
    <link rel="stylesheet" href="/lar_tcc/assets/css/bootstrap.css">
  <!-- My CSS -->
  <link rel="stylesheet" href="/lar_tcc/assets/css/construction.css">
  <link rel="stylesheet" href="/lar_tcc/assets/css/tasks.css">
  <link rel="stylesheet" href="/lar_tcc/assets/fonts/stylesheet.css">
  <title>Olá, <?= $_SESSION['user_first_name'] ?></title>
</head>
<body>
  <header class="mt-2 d-flex justify-content-between align-items-center px-5">
    <img src="/lar_tcc/assets/images/logo.svg" alt="">
    <form action="/lar_tcc/controllers/usersController.php" method="post">
      <input type="hidden" name="operation" value="logout">
      <input type="image" src="../../assets/images/icons/exit.svg" class="">
    </form>
  </header>
  <main id="main" class="container-fluid pb-3">
<!-- The header file only opens the 'html', 'body' and 'main' tags, 
     which will be closed in the index and footer files. -->