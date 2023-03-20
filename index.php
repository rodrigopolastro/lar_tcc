<?php
  require_once './model/connectToDatabase.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form method="post" action="">
    <label for="task_name"></label>
    <input type="text" name="task_name" id="">
    <br>
    <label for="task_description"></label>
    <input type="text" name="task_description" id="">
    <br>
    <label for="due_date"></label>
    <input type="datetime" name="due_date" id="">
  </form>
</body>
</html>