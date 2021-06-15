<?php
$db_user = "root";
$db_pass = "";
$db_name = "useraccounts";

$conn = mysqli_connect('localhost',$db_user,$db_pass,$db_name);
if(!$conn){
    die("Connection failed:".mysqli_connect_error());
}
    
if(isset($_POST['register'])){
    $username        = $_POST['username'];
    $email           = $_POST['email'];
    $password        = $_POST['password'];


    $sql = "INSERT INTO users(username,email,password) VALUES('$username','$email','$password')";
    if(mysqli_query($conn,$sql)){
        echo "New record created sucessfully";
    }
    else{
        echo "Error: " . $sql . " " . mysqli_error($conn);
    }
}
mysqli_close($conn);
?>