//Var/Const-Bezeichnungen:
//kostX: Kosten der jeweiligen Pflegeleistung
//iX: Investitionsaufwendungen
//anzX Anzahl der gewünschten Leistung
//gesKostX: Gesamte Kosten der jeweiligen Pflegeleistung(kostX*anzX)
//gesIX: Gesamte Kosten der jeweiligen Investitionsaufwendung
//gesX: Gesamte KOsten der jeweiligen Leistung (anzX * (iX+kostX))

//Kleine Morgen-/Abendtoilette
const kostKT =14.24; //
const iKT = 0.72;
var anzKT =0;
var gesKostKT = 0;
var gesIKT =0;
var gesKT= 0;

//Große Morgen-/Abendtoilette
const kostGT = 22.55;
const iGT = 1.14;
var anzGT = 0;
var gesIGT =0;
var gesKostGT = 0;
var gesGT = 0;

//Lagern
const kostLag = 3.96;
const iLag = 0.2;
const kostLagOnly = 7.91;
const iLagOnly = 0.4;
var anzLag = 0;
var gesKostLag = 0;
var gesILag = 0;
var gesLag = 0;

//Mobilisation
const kostMobil = 5.93;
const iMobil = 0.3;
const kostMobilOnly =7.91;
const iMobilOnly =0.4;
var anzMobil = 0;
var gesKostMobil = 0;
var gesIMobil =0;
var gesMobil =0;

//Hilfe bei der Nahrungsaufnahme
const kostNahrung = 9.89;
const iNahrung = 0.5;
var anzNahrung = 0;
var gesKostNahrung = 0;
var gesINahrung = 0;
var gesNahrung = 0;

//Sondenkost bei implantierter Magensonde
const kostPEG = 3.96;
const iPEG = 0.2;
var anzPEG = 0;
var gesKostPEG = 0;
var gesIPEG =0;
var gesPEG = 0;

//Darm- Blasenentleerung
const kostDBE = 3.96;
const iDBE = 0.2;
const kostDBEOnly = 7.91;
const iDBEOnly = 0.4;
var anzDBE = 0;
var gesKostDBE = 0;
var gesIDBE =0;
var gesDBE = 0;

//Hilfestellung Verlassen u. Wiederaufsuchen d. Wohnung
const kostWohn = 2.77;
const iWohn = 0.14;
var anzWohn = 0;
var gesKostWohn = 0;
var gesIWohn =0;
var gesWohn= 0;

//Begleitung bei Aktivitäten außerhalb der Wohung
const kostBegl = 23.73;
const iBegl = 1.2;
var anzBegl=0;
var gesKostBegl = 0;
var gesIBegl = 0;
var gesBegl = 0;

//Hausw. Verrichtungen/Std.
const kostHausw = 22.15;
const iHausw = 1.2;
var anzHausW = 0;
var gesKostHausw = 0;
var gesIHausw = 0;
var gesHausw = 0;

//Erstbesuch / Folgebesuch
const kostErstb = 22.15;
const iErstb = 1.2;
var anzErstb = 0;
var gesKostErstb =0;
var gesIErstb = 0;
var gesErstb = 0;

//Leistungen der häuslichen Betreuung 
const kostHausl = 28.48;
const iHausl = 1.44;
var anzHausl = 0;
var gesKostHausl = 0;
var gesIHausl = 0;
var gesHausl = 0;

//Häusliche Betreuung durch Fachkräfte
const kostHauslEx = 40.34;
const iHauslEx = 2.04;
var anzHauslEx = 0;
var gesKostHauslEx = 0;
var gesIHauslEx = 0;
var gesHauslEx = 0;

//Pflegegrad Sachleistung Kasse
const pg1 = 125;
const pg2 = 689;
const pg3 = 1298;
const pg4 = 1612;
const pg5 = 1995;

//Pflegeeinsätze nach § 37 Abs. 3 SGB XI
const pauschale2_3 = 23;
const pauschale4_5 = 33;


var pflegeRest = 0;
var eigenanteil =0;

var pflegeKost= 0; //Gesamte Kosten aller Pflegeleistungen
var invAufw = 0; //Gesamte Kosten aller Investitionsaufwendungen
var gesKost = 0; //Gesamte KOsten

function main() //Aktiviert Listener
{
    calcKT();
    calcGT();
    calcLagern();
    calcMobil();
    calcNahrung();
    calcPEG();
    calcDBE();
    calcWohn();
    calcBegl();
    calcHausw();
    calcErstB();
    calcHausl();
    calcHauslEx();
    document.getElementById('selectStufe').oninput = function () {
        gesamtKosten();
    }
}
//Funktionen calcX beinhalten einzelne Listener und berechnen die Kosten pro Leistung
//Schreiben ergebnis in html Dokument
//kostenUpdate Ruft einige Spezielle Klassen auf
//gesamtKOsten berechnet aus allen Leistungen die Gesamtkosten
function calcKT()
{
    
    document.getElementById('kT').oninput = function () {
        anzKT = this.value;
        gesKostKT = anzKT * kostKT;
        gesIKT = anzKT * iKT;
        gesKT = anzKT * (kostKT+iKT);
        document.getElementById('oKT').innerHTML = gesKT.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }

}

function calcGT()
{
    document.getElementById('gT').oninput = function () {
        anzGT = this.value
        gesKostGT = anzGT*kostGT;
        gesIGT = anzGT*iGT;
        gesGT = anzGT * (kostGT+iGT);
        document.getElementById('oGT').innerHTML = gesGT.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }
}

function calcLagern()
{
    document.getElementById('lag').oninput = function () {
        anzLag = this.value;
        updateMobil();
        updateLagern();
        updateDBE();
    }
}

//Lagern, Mobil und DBE haben sonderfunktionen. Werden bur diese ausgewählt, ist der Preis höher
function updateLagern()
{
    if(anzKT==0 && anzGT==0 && anzMobil==0 && anzNahrung==0 && anzPEG==0 && anzDBE==0 && anzWohn==0 && anzBegl== 0 && anzHausW==0 && anzErstb==0 && anzHausl==0 && anzHauslEx==0)
        {
            gesKostLag = anzLag*kostLagOnly;
            gesILag = anzLag*iLagOnly;
            gesLag = anzLag * (kostLagOnly+iLagOnly); 
        }
        else
        {
            gesKostLag= anzLag*kostLag;
            gesILag = anzLag*iLag;
            gesLag = anzLag * (kostLag+iLag);
            

        }
        document.getElementById('oLag').innerHTML = gesLag.toFixed(2).concat("€");
        gesamtKosten();
}

function calcMobil()
{
    document.getElementById('mob').oninput = function () {
        anzMobil = this.value;
        updateMobil();
        updateLagern();
        updateDBE();
        
        
    }
}

function updateMobil()
{
    if(anzKT==0 && anzGT==0 && anzLag==0 && anzNahrung==0 && anzPEG==0 && anzDBE==0 && anzWohn==0 && anzBegl== 0 && anzHausW==0 && anzErstb==0 && anzHausl==0 && anzHauslEx==0)
    {
        gesKostMobil = anzMobil * kostMobilOnly;
        gesIMobil = anzMobil * iMobilOnly;
        gesMobil = anzMobil * (kostMobilOnly+iMobilOnly);
    }
    else
    {
        gesKostMobil = anzMobil * kostMobil;
        gesIMobil = anzMobil * iMobil;
        gesMobil = anzMobil * (kostMobil+iMobil);
    }
    document.getElementById('oMob').innerHTML = gesMobil.toFixed(2).concat("€");
    gesamtKosten();  
}
function calcNahrung()
{
    document.getElementById('nahrung').oninput = function () {
        anzNahrung = this.value;
        gesKostNahrung = anzNahrung * kostNahrung;
        gesINahrung = anzNahrung * iNahrung;
        gesNahrung = anzNahrung * (kostNahrung+iNahrung);
        document.getElementById('oNahrung').innerHTML = gesNahrung.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }
}

function calcPEG()
{
    document.getElementById('peg').oninput = function () {
        anzPEG = this.value;
        gesKostPEG = anzPEG * kostPEG;
        gesIPEG = anzPEG * iPEG;
        gesPEG = anzPEG * (kostPEG+iPEG);
        document.getElementById('oPeg').innerHTML = gesPEG.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }
}
function calcDBE()
{
    document.getElementById('dbe').oninput = function () {
        anzDBE = this.value;
        updateMobil();
        updateLagern();
        updateDBE();
        
    }
}

function updateDBE()
{
    if(anzKT==0 && anzGT==0 && anzLag==0 && anzNahrung==0 && anzPEG==0 && anzMobil==0 && anzWohn==0 && anzBegl== 0 && anzHausW==0 && anzErstb==0 && anzHausl==0 && anzHauslEx==0)
    {
        gesKostDBE = anzDBE * kostDBEOnly;
        gesIDBE = anzDBE * iDBEOnly;
        gesDBE = anzDBE * (kostDBEOnly+iDBEOnly);
    }
    else
    {
        gesKostDBE = anzDBE * kostDBE;
        gesIDBE = anzDBE * iDBE;
        gesDBE = anzDBE * (kostDBE+iDBE);
    }
    document.getElementById('oDBE').innerHTML = gesDBE.toFixed(2).concat("€");
        gesamtKosten();
}
function calcWohn()
{
    document.getElementById('wohn').oninput = function () {
        anzWohn = this.value;
        gesKostWohn = anzWohn * kostWohn;
        gesIWohn = anzWohn*iWohn;
        gesWohn = anzWohn * (kostWohn+iWohn);
        document.getElementById('oWohn').innerHTML = gesWohn.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }
}
function calcBegl()
{
    document.getElementById('begl').oninput = function () {
        anzBegl = this.value;
        gesKostBegl = anzBegl * kostBegl;
        gesIBegl = anzBegl * iBegl;
        gesBegl = anzBegl * (kostBegl+iBegl);
        document.getElementById('oBegl').innerHTML = gesBegl.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }
}
function calcHausw()
{
    document.getElementById('hausw').oninput = function () {
        anzHausW = this.value;
        gesKostHausw = anzHausW * kostHausw;
        gesIHausw = anzHausW * iHausw;
        gesHausw = anzHausW * (kostHausw+iHausw);
        document.getElementById('oHausw').innerHTML = gesHausw.toFixed(2).concat("€");
        gesamtKosten();
    }
}
function calcErstB()
{
    document.getElementById('erstb').oninput = function () {
        anzErstb = this.value;
        gesKostErstb = anzErstb * kostErstb;
        gesIErstb = anzErstb * iErstb;
        gesErstb = anzErstb * (kostErstb+iErstb);
        document.getElementById('oErstb').innerHTML = gesErstb.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }
}
function calcHausl()
{
    document.getElementById('hausl').oninput = function () {
        anzHausl = this.value;
        gesKostHausl = anzHausl * kostHausl;
        gesIHausl = anzHausl * iHausl;
        gesHausl = anzHausl * (kostHausl+iHausl);
        document.getElementById('oHausl').innerHTML = gesHausl.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }
}
function calcHauslEx()
{
    document.getElementById('hauslEx').oninput = function () {
        anzHauslEx = this.value;
        gesKostHauslEx = anzHauslEx * kostHauslEx;
        gesIHauslEx = anzHauslEx * iHauslEx;
        gesHauslEx = anzHauslEx * (kostHauslEx+iHauslEx);
        document.getElementById('oHauslEx').innerHTML = gesHauslEx.toFixed(2).concat("€");
        kostenUpdate();
        gesamtKosten();
    }
}

function gesamtKosten()
{
    
    var stufe = document.getElementById("selectStufe").value;
    pflegeKost = gesKostKT+gesKostGT+gesKostLag+gesKostMobil+gesKostNahrung+gesKostPEG+gesKostDBE+gesKostWohn+gesKostBegl+gesKostHausw+gesKostErstb+gesKostHausl+gesKostHauslEx;
    invAufw = gesIKT+gesIGT+gesILag+gesIMobil+gesINahrung+gesIPEG+gesIDBE+gesIWohn+gesIBegl+gesIHausw+gesIErstb+gesIHausl+gesIHauslEx;
    gesKost =gesKT+gesGT+gesLag+gesMobil+gesNahrung+gesPEG+gesDBE+gesWohn+gesBegl+gesHausw+gesErstb+gesHausl+gesHauslEx;
    //Je nach Pflegegrad unterschidelich hoher Beitrag der von Pflegeversicherung übernommen wird  
    switch(stufe)
    {
        case "1":
            document.getElementById("sach").innerHTML= pg1.toFixed(2).concat("€");
            if(gesKost <= pg1)
            {
                eigenanteil = 0;
                pflegeRest = pg1-gesKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = gesKost-pg1;
            }
            break;
        case "2":
            document.getElementById("sach").innerHTML= pg2.toFixed(2).concat("€");
            gesKost=gesKost+pauschale2_3;
            if(gesKost <= pg2)
            {
                eigenanteil = 0;
                pflegeRest = pg2-gesKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = gesKost-pg2;
            }
            break;
        case "3":
            document.getElementById("sach").innerHTML= pg3.toFixed(2).concat("€");
            gesKost=gesKost+pauschale2_3;
            if(gesKost <= pg3)
            {
                eigenanteil = 0;
                pflegeRest = pg3-gesKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = gesKost-pg3;
            }
            break;
        case "4":
            gesKost=gesKost+pauschale4_5;
            document.getElementById("sach").innerHTML= pg4.toFixed(2).concat("€");
            if(gesKost <= pg4)
            {
                eigenanteil = 0;
                pflegeRest = pg4-gesKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = gesKost-pg4;
            }
            break;
            break;
        case "5":
            gesKost=gesKost+pauschale4_5;
            document.getElementById("sach").innerHTML= pg5.toFixed(2).concat("€");
            if(gesKost <= pg5)
            {
                eigenanteil = 0;
                pflegeRest = pg5-gesKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = gesKost-pg5;
            }
            break;
        default:
            pflegeRest=0;
            eigenanteil = gesKost;
            
    }
    //Ausgabe in html mit 2 Nachkommastellen und dem Eurozeichen
    document.getElementById("pflegek").innerHTML = pflegeKost.toFixed(2).concat("€");
    document.getElementById("invest").innerHTML = invAufw.toFixed(2).concat("€");
    document.getElementById("gesamt").innerHTML = gesKost.toFixed(2).concat("€");
    document.getElementById("pflegerest").innerHTML = pflegeRest.toFixed(2).concat("€");
    document.getElementById("eigen").innerHTML = eigenanteil.toFixed(2).concat("€");
}
//Aktualisiert Funktionen mit gesonderten Einzelpreisen
function kostenUpdate()
{
    updateLagern();
    updateMobil();
    updateDBE();
}