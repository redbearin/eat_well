<?php
require_once('functions.php');
set_exception_handler('error_handler');
require_once 'db_connection.php';

$data = getBodyData();

$id = intval($data['id']);
$name = $data['name'];
$subName = $data['sub_name'];
$category = $data['category'];
$productionType = $data['production_type'];
$grade = intval($data['grade']);

print($id);
print($category);

$editFoodQuery = "UPDATE foods 
                  SET name = '$name',
                  sub_name = '$subName',
                  category = '$category',
                  production_type = '$productionType',
                  grade = $grade
                  WHERE id = $id";

$result = mysqli_query($conn, $editFoodQuery);

if(!$result) {
  throw new Exception('MySQL update error: '.mysqli_error($conn));
}

?>