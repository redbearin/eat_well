<?php

require_once('functions.php');
set_exception_handler('error_handler');
require_once 'db_connection.php';

$foodsQuery = "SELECT *
              FROM foods";

$foodsResult = mysqli_query($conn, $foodsQuery);
if (!$foodsResult) {
  throw new Exception('mysql error ' . mysqli_error($conn));
}

$foodsData = [];
while ($row = mysqli_fetch_assoc($foodsResult)) {
  $foodsData[] = $row;
}

print(json_encode($foodsData));

?>

