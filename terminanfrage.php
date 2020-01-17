<!DOCTYPE html>
<html lang="de">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" type="image/icon" href="">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>KaWei Pflegedienst</title>
</head>

<body class="main">
    <div class="fixedcontainer">
        <ul class="navbar">
            <li><img src="img/KaWeiLogo_small.png" alt="Logo" onclick="window.location.replace('home.html')"
                    class="logo"> </li>
            <li class="navelem"><a href="jobs.html">Jobangebote</a></li>
            <li class="navelem"><a href="kontakte.html">Kontakt</a></li>
            <li class="navelem"><a href="rechner.html">Rechner</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropdownbtn">Dienstleistungen</a>
                <div class="dropdowncont">
                    <a href="seniorengarten.html">Seniorengarten</a>
                    <a href="#">Anmeldung</a>
                </div>
            <li class="navelem"><a href="AllgemeineInfos.html">&Uuml;ber uns</a></li>
            </li>
        </ul>
    </div>

    <h1>Terminanfrage</h1>

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
            <form action="./appointment.php" method="POST">
                <p>Wählen Sie die Art Ihrer Terminanfrage: *
                    <select id="appointmenttype" name="appointmenttype">
                        <option value="Tagesbetreuung">Tagesbetreuung im Seniorengarten</option>
                        <option value="Beratung">Beratungsgespräch für ambulante Pflege</option>
                        <option value="KonkreteAnfrage">Konkrete Pflegeanfrage</option>
                    </select></p>
                <p>E-Mail oder Telefonnummer: *
                    <input type="text" name="email"></p>
                <p>Von: *
                    <input type="datetime-local" name="fromtime"></p>
                <p>Bis: *
                    <input type="datetime-local" name="totime"></p>
                <p>Weitere Informationen:
                    <textarea name="message" rows="15" cols="30"></textarea></p>
                <input type="submit" value="Anfrage senden">
            </form>
        </div>
        <div class="content-item">
            <h2>Bitte geben Sie die erforderlichen Informationen ein.</h2>
            <p>Felder mit (*) müssen ausgefüllt werden</p>
            <img src="img/termin.png" style="width:100%">
        </div>
    </div>
    <!-- footer -->
    <footer>
        <img src="img/bpa.jpg" class="footerimage">
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