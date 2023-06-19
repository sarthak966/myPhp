<?php
if(isset($_POST['name'])){
$server="localhost";
$username="root";
$password="";

$con=mysqli_connect($server,$username,$password);

if(!$con){
    die("connection failed");
}

$name = $_POST['name'];
    $gender = $_POST['gender'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $other = $_POST['desc'];


$db="INSERT INTO `trip`.`trip` (`sno`, `name`, `age`, `gender`, `email`, `phone`, `other`, `dt`) VALUES (NULL, '$name', '$age', '$gender', '$email', '$phone', '$other', current_timestamp());";

echo $db;

if($con->query($db)==true){
    // echo "success";
    header('location:formg.php');
}else{
    echo "failed";
}



}
?>