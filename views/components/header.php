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
  <title>Olá, <?= $_SESSION['user_first_name']?></title>
</head>
<body>
  <header class="mt-2 d-flex justify-content-between align-items-center px-5" style="height: 10vh;">
    <img src="/htdocsDirectories/lar_tcc/assets/images/logo.svg" alt="">
    <form action="/htdocsDirectories/lar_tcc/controllers/usersController.php" method="post">
      <input type="hidden" name="operation" value="logout">
      <input type="image" src="../../assets/images/icons/exit.svg" class="">
    </form>
  </header>
  <main style="height: 90vh; width: 90%" class="container-fluid">
<!-- The header file only opens the 'html', 'body' and 'main' tags, 
     which will be closed in the index and footer files. -->