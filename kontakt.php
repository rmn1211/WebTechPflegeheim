<!DOCTYPE html>
<html lang="de">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="style.css">
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
    <h1>Kontakt</h1>
    <div class="content-container">
        <p class="content-item">
            Pflegedienst Weirich<br>
            Karin Weirich<br>
            St. Avolder Str. 72<br>
            66740 Saarlouis<br>
            Tel.: +496831 - 5052200<br>
            Fax: +496831 - 1664576<br>
            Mobil: +49160 - 91658332<br>
        </p>
        <img src="img/Besitzer.jpg" alt="Portrait von Karin Weirich, Inhaberin des Pflegedienstes" class="content-item">
    </div>
    <div class="content-container">
        <div class="content-item">
        <?php 
                $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
                if (strpos($url, "error") == true) 
                {
                    echo "<p style='color: red;'>Es wurden nicht alle erforderlichen Felder ausgefüllt!</p>";
                }elseif (strpos($url, "success") == true)
                {
                    echo "<p style='color: green;'>Anfrage erfolgreich versendet!</p>";
                }
            ?>
            <h2 id="contactform">Kontaktformular</h2>
            <p>Haben Sie Fragen, Wünsche oder Anregungen? Bitte nehmen Sie Kontakt mit uns auf, wir helfen Ihnen gerne weiter!</p>
            <form action="./contactform_send.php" method="POST">
                <p>Name: *
                    <input type="text" name="name"></p>
                <p>E-Mail: *
                    <input type="email" name="email"></p>
                <p>Nachricht: *
                    <textarea name="message" rows="15" cols="30"></textarea></p>
                <input type="submit" value="Senden">
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

</html>