<?php
    include "rating.php";

    if(empty($_POST['rating'])){
        header("Location: " . "http://" . $_SERVER['HTTP_HOST'] . "/Seniorengarten/rezensionen.php");
        exit();
    }
    $r = $_POST['rating'];
    $n = $_POST['name'];
    $m = $_POST['message'];
    $rating = new Rating($r, $n, $m);

    $arrRatings = json_decode(file_get_contents("ratings.json"));

    if(is_array($arrRatings)){
        array_unshift($arrRatings, $rating);
    }else{
        $arrRatings = array();
        array_push($arrRatings, $rating);
    }

    file_put_contents("ratings.json", json_encode($arrRatings));
    header("Location: " . "http://" . $_SERVER['HTTP_HOST'] . "/Seniorengarten/rezensionen.php");
?>