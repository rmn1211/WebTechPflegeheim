<?php
    if (empty($_POST['appointmenttype']) || empty($_POST['email']) || empty($_POST['fromtime']) || empty($_POST['totime']))
    {
        //redirect to page and display error
        header("Location: " . "http://" . $_SERVER['HTTP_HOST'] . "/Seniorengarten/terminanfrage.php?error");
        exit();
    }
    $type = $_POST['appointmenttype'];
    $email = $_POST['email'];
    $fromtime = $_POST['fromtime'];
    $totime = $_POST['totime'];
    $message = $_POST['message'];
    $file = fopen('terminanfragen.csv', 'a');
    fwrite($file, "$type;$email;$fromtime;$totime;$message\n");
    fclose($file);
    header("Location: " . "http://" . $_SERVER['HTTP_HOST'] . "/Seniorengarten/terminanfrage.php?success");
?>