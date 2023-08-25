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
  <title>Olá, USUÁRIO: <?= $logged_user_id ?></title>
</head>
<body>
  <header> 
    <div class="m-5">
      <h1> Lar de USUÁRIO:<?= $logged_user_id; ?></h1> <!-- Replace this line with the logo or the real user name. Maybe both -->
      <div class="row">
        <div class="col-sm-2 me-5">
          <form action="/htdocsDirectories/lar_tcc/index.php" method="post">
            <input type="submit" value="Sair" class="btn btn-primary">
          </form>
        </div>
        <div class="col-sm-1 ms-5 me-4">
          <form action="/htdocsDirectories/lar_tcc/index.php" method="post">
            <input type="hidden" name="user_id" value="<?= $logged_user_id; ?>">
            <input type="hidden" name="mode" value="construction">
            <input type="submit" value="Modo Construção" class="btn btn-primary">
          </form>
        </div>
        <div class="col">
          <form action="/htdocsDirectories/lar_tcc/index.php" method="post">
            <input type="hidden" name="user_id" value="<?= $logged_user_id; ?>">
            <input type="hidden" name="mode" value="tasks">
            <input type="submit" value="Exibir tarefas" class="btn btn-primary">
          </form>
        </div>
      </div>
      <hr>
    </div>
  </header>
  <main class="d-flex">
<!-- The header file only opens the 'html', 'body' and 'main' tags, 
     which will be closed in the footer file. -->