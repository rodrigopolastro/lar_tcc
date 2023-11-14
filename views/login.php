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
  <div class="d-flex justify-content-center align-items-center" style="height: 700px;">
    <div class="border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2 p-3">
      <div class="d-flex justify-content-center ">
        <h7>Ir para a</h7>
        <a href="/htdocsDirectories/lar_tcc/"> Página inicial</a>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <h1>Faça seu Login!</h1>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <form action="/htdocsDirectories/lar_tcc/controllers/usersController.php" method="post">
          <input type="hidden" id="" name="operation" value="login">
          <input type="text" id="userEmailInput" name="user_email" placeholder="Digite seu e-mail">
          <input type="password" id="userPasswordInput" name="user_password" placeholder="Digite sua senha">
          <div class="d-grid p-0 mt-3">
            <input id="" type="submit" class="border border-4 border-start-0 border-bottom-0 rounded-2 h5">
          </div>
        </form>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <a href="/htdocsDirectories/lar_tcc/views/signup.html"> Criar uma conta </a>
      </div>
    </div>
  </div>
</body>
</html>