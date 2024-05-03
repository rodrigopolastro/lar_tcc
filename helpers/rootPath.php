<?php
function findPath($file_path = ""){
  // echo $_SERVER['DOCUMENT_ROOT'];
  return $_SERVER['DOCUMENT_ROOT'] . '/lar_tcc' . '/' . $file_path;
}
?>