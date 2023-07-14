<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Includes bootstrap css -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <title>Olá, USUÁRIO: <?= $logged_user_id ?></title>
</head>
<body>
  <header> 
    <h1> Lar de USUÁRIO:<?= $logged_user_id; ?></h1>
    <form action="." method="post">
      <input type="hidden" name="mode" value="construction">
      <input type="submit" value="Modo Construção">
    </form>
    <form action="." method="post">
      <input type="hidden" name="mode" value="tasks">
      <input type="submit" value="Exibir tarefas">
    </form>
    <hr>
  </header>
  <main>
<!-- The header file only opens the 'html', 'body' and 'main' tags, 
     which will be closed in the footer file. -->