<?php
    if (empty($_POST['email']) || empty($_POST['name']) || empty($_POST['message']))
    {
        //redirect to page and display error
        header("Location: " . "http://" . $_SERVER['HTTP_HOST'] . "/Seniorengarten/kontakt.php?error");
        exit();
    }
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $file = fopen('kontakte.csv', 'a');
    fwrite($file, "$name;$email;$message\n");
    fclose($file);
    header("Location: " . "http://" . $_SERVER['HTTP_HOST'] . "/Seniorengarten/kontakt.php?success");
?>