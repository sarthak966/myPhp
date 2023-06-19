



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="phpdtls.css">
</head>
<body>

    <section class="sec1">
        <div class="secdiv">
            <img src="" alt="" class="image">
            <button id="nxt">></button>
            <button id="pvs"><</button>
        </div>
        
    </section>
    <h1 style="text-align:center;">Product Details</h1>
<form class="sec2A" action="complitionEnquiry/index.html">
    
    <section class="sec2">
        
    </section>
    <input type="submit" value="Buy Now" class="buybtn" style="visibility: visible; opacity: 1;" >
</form>

<form class="cf" action="dbCom.php" method="post"> 
<input type="hidden" id="pId" name="id"/>
<input type="text" class="c" id="cmnt" name="comment" placeholder="Enter Your Comment Hare">
<input type="submit" value="Post" class="pbtn">




</form>
<div id="rttng">
    <div class="i_rt">
        <h1 class="h2">Ratings</h1>

<!-- showing the Comments-->


        <?php 
    $server="localhost";
    $username="root";
    $password="";
    
    $con=mysqli_connect($server,$username,$password ,"accom");

    
    
    if(!$con){
        die("connection failed");
    }
    $id="";

    if(isset($_GET['id'])){

        $id=$_GET['id'];
        
        }
    
    $n="comments";
    
    $sql="SELECT * FROM `$n`";
    $result=mysqli_query($con,$sql);
    // echo mysqli_num_rows($result);

    while($row = mysqli_fetch_assoc($result)){
        if($row['ProductId']==$id){
        echo "<div class='cts'><h3 class='h'>".$row['comment']."</h3></div>";
        echo "<br/>";
        // echo "$id";
        }
}
    
    ?>






    </div>
</div>
    



</body>

<script src="dtlsphp.js"></script>
</html>