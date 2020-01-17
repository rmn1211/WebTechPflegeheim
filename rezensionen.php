<!DOCTYPE html>
<html lang="de">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="slideshow.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="starrating.js"></script>
    <title>KaWei Pflegedienst</title>
</head>

<body class="main">
    <div class="fixedcontainer">
    <ul class="navbar">
            <li><img src="img/KaWeiLogo_small.png" alt="Logo des Pflegedienstes" onclick="window.location.replace('home.html')"
                    class="logo"> </li>
            <li class="navelem"><a href="jobs.html">Jobangebote</a></li>
            <li class="navelem"><a href="kontakt.php">Kontakt</a></li>
            <li class="navelem"><a href="rechner.html">Rechner</a></li>
            <li class="dropdown">
                <a href="dienstleistungen.html" class="dropdownbtn">Dienstleistungen</a>
                <div class="dropdowncont">
                    <a href="dienstleistungen.html#seniorengarten">Seniorengarten</a>
                    <a href="dienstleistungen.html#ambulant">Ambulanter Pflegedienst</a>
                    <a href="terminanfrage.php">Terminanfrage-Formular</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="allgemeineInfos.html" class="dropdownbtn">&Uuml;ber uns</a>
                <div class="dropdowncont">
                    <a href="rezensionen.php">Rezensionen</a>
                </div>
            </li>
        </ul>
    </div>
    <br>
    <h1>Rezensionen</h1>
    <div class="content-container">
            <?php
                include "rating.php";
                if(file_exists("ratings.json")){
                    $arrRatings = json_decode(file_get_contents("ratings.json"));
                    if(is_array($arrRatings)){
                        foreach($arrRatings as $rating){
                            $r = $rating->rating;
                            $n = $rating->name;
                            $m = $rating->message;
                            $d = $rating->date;
                            echo '<div class="content-item" style="align-self: flex-start;">';
                            echo '<div class="rating-show">';
                            echo '<p>';
                            for($i = 0; $i < $r; $i++){
                                echo '<span class="fa fa-star fa-lg star-checked"></span>';
                            }
                            echo "<b>$d</b>&nbsp;</p>";
                            if(empty($n)){
                                echo "<p><b>Von:</b> Anonym</p>";
                            }else{
                                echo "<p><b>Von:</b> $n</p>";
                            }
                            
                            if(! empty($m)){
                                echo "<p><b>Rezension:</b><br>$m</p>";
                            }
                            echo '</div>';
                            echo '</div>';
                        }
                        
                    }else{
                        echo "<h2>Bisher gibt es leider keine Rezensionen.</h2>";
                    }

                }else{
                    echo "<h2>Bisher gibt es leider keine Rezensionen.</h2>";
                }
            ?>
        </div>
    </div>
    <div class="content-container">
        <div class="content-item">
            <b>Ihre Zufriedenheit ist uns Wichtig!</b>
            <p>Geben Sie uns Rückmeldung zu unseren Pflegedienstleistungen, damit wir diese dauerhaft verbessern können.</p>
            <form action="./save_rating.php" method="POST">
                <p>Bewertung:</p>
                <div class="rating">
                    <span><input type="radio" name="rating" id="r5" value="5">
                        <label for="r5"><span class="fa fa-star fa-lg" id="star5"
                                onclick="changeRating(5)"></span></label>
                    </span>
                    <span><input type="radio" name="rating" id="r4" value="4">
                        <label for="r4"><span class="fa fa-star fa-lg" id="star4"
                                onclick="changeRating(4)"></span></label>
                    </span>
                    <span><input type="radio" name="rating" id="r3" value="3">
                        <label for="r3"><span class="fa fa-star fa-lg" id="star3"
                                onclick="changeRating(3)"></span></label>
                    </span>
                    <span><input type="radio" name="rating" id="r2" value="2">
                        <label for="r2"><span class="fa fa-star fa-lg" id="star2"
                                onclick="changeRating(2)"></span></label>
                    </span>
                    <span><input type="radio" name="rating" id="r1" value="1">
                        <label for="r1"><span class="fa fa-star fa-lg" id="star1"
                                onclick="changeRating(1)"></span></label>
                    </span>
                </div>
                <br>
                <p>Name:
                    <input type="text" name="name">
                </p>
                <p>Rezension:
                    <textarea name="message" rows="15" cols="30"></textarea>
                </p>
                <input type="submit" value="Abschicken">
            </form>
        </div>
    </div>
    <!-- footer -->
    <footer>
        <img src="img/bpa.jpg" alt="Mitglied beim bpa e.V" class="footerimage">
        <a href="impressum.html" class="footerlink">Impressum</a>
        <a href="datenschutz.html" class="footerlink">Datenschutzerkl&auml;rung</a>
        <div class="footertext">
            Karin Weirich<br>
            St. Avolder Str. 72<br>
            66740 Saarlouis<br>
            Tel.: +496831 - 5052200<br>
            Fax: +496831 - 1664576<br>
            Mobil: +49160 - 91658332<br>
        </div>
    </footer>
</body>
</html>