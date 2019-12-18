<?php

require_once('functions.php');
set_exception_handler('error_handler');
require_once ('db_connection.php');

$idString = getBodyData();

$id = intval($idString);

$addFoodQuery = "DELETE 
                 FROM 
                 foods
                 WHERE 
                 id = $id";

$result = mysqli_query($conn, $addFoodQuery);

if(!$result){
throw new Exception('MySQL update error: '.mysqli_error($conn));
}

?>