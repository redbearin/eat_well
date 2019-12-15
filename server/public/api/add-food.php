<?php

require_once('functions.php');
set_exception_handler('error_handler');
require_once ('db_connection.php');

$data = getBodyData();

$name = $data['name'];
$subName = $data['sub_name'];
$category = $data['category'];
$productionType = $data['production_type'];
$grade = intval($data['grade']);

$addFoodQuery = "INSERT INTO foods (
                 name,
                 sub_name,
                 production_type,
                 grade,
                 category)
                 VALUES (
                 '$name',
                 '$subName',
                 '$productionType',
                 $grade,
                 '$category')";

$result = mysqli_query($conn, $addFoodQuery);

if(!$result){
throw new Exception('MySQL update error: '.mysqli_error($conn));
}

?>