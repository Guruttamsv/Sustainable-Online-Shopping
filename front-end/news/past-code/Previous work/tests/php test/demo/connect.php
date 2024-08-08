<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";

session_start();

$con = mysqli_connect($servername, $username, $password ,$dbname) or die('Connection Failed');

if($_SERVER['REQUEST_METHOD'] == "POST"){

    $name = $_POST['name'];
    $email = $_POST['email'];

    if(!empty($name) && !empty($email) && !is_numeric($name)){

        $query = "INSERT INTO signup (name, email) VALUES ('$name', '$email');";

        mysqli_query($con,$query);
        header("Location: demopage.php");
        die;
    }
    else{
        echo "Please enter valid information";
    }
}
?>