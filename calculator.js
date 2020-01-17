
//Kleine Morgen-/Abendtoilette
const kostKT =14.24;
const iKT = 0.72;
var gesKostKT = 0;
var gesIKT =0;
var gesKT= 0;

//Große Morgen-/Abendtoilette
const kostGT = 22.55;
const iGT = 1.14;
var gesIGT =0;
var gesKostGT = 0;
var gesGT = 0;

//Lagern
const kostLag = 3.96;
const iLag = 0.2;
var gesKostLag = 0;
var gesILag = 0;
var gesLag = 0;

//Mobilisation
const kostMobil = 5.93;
const iMobil = 0.3;
var gesKostMobil = 0;
var gesIMobil =0;
var gesMobil =0;

//Hilfe bei der Nahrungsaufnahme
const kostNahrung = 9.89;
const iNahrung = 0.5;
var gesKostNahrung = 0;
var gesINahrung = 0;
var gesNahrung = 0;

//Sondenkost bei implantierter Magensonde
const kostPEG = 3.96;
const iPEG = 0.2;
var gesKostPEG = 0;
var gesIPEG =0;
var gesPEG = 0;

//Darm- Blasenentleerung
const kostDBE = 3.96;
const iDBE = 0.2;
var gesKostDBE = 0;
var gesIDBE =0;
var gesDBE = 0;

//Hilfestellung Verlassen u. Wiederaufsuchen d. Wohnung
const kostWohn = 2.77;
const iWohn = 0.14;
var gesKostWohn = 0;
var gesIWohn =0;
var gesWohn= 0;

//Begleitung bei Aktivitäten außerhalb der Wohung
const kostBegl = 23.73;
const iBegl = 1.2;
var gesKostBegl = 0;
var gesIBegl = 0;
var gesBegl = 0;

//Hausw. Verrichtungen/Std.
const kostHausw = 22.15;
const iHausw = 1.2;
var gesKostHausw = 0;
var gesIHausw = 0;
var gesHausw = 0;

//Pflegeeinsätze nach § 37 Abs. 3 SGB XI
const kostPflege2_3 = 23;
const kostPflege4_5 = 33;

//Erstbesuch / Folgebesuch
const kostErstb = 22.15;
const iErstb = 1.2;
var gesKostErstb =0;
var gesIErstb = 0;
var gesErstb = 0;

//Leistungen der häuslichen Betreuung 
const kostHausl = 28.48;
const iHausl = 1.44;
var gesKostHausl = 0;
var gesIHausl = 0;
var gesHausl = 0;

//Häusliche Betreuung durch Fachkräfte
const kostHauslEx = 40.34;
const iHauslEx = 2.04;
var gesKostHauslEx = 0;
var gesIHauslEx = 0;
var gesHauslEx = 0;

//Pflegegrad Sachleistung Kasse
const pg2 = 689;
const pg3 = 1298;
const pg4 = 1612;
const pg5 = 1995;

var pflegestufe = 0;
var gesKost = 0;
var pflegeKost = 0;
var invAufw = 0;
var pflegeRest = 0;
var eigenanteil =0;

function main()
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

function calcKT()
{
    
    document.getElementById('kT').oninput = function () {
        gesKostKT = this.value * kostKT;
        gesIKT = this.value * iKT;
        gesKT = this.value * (kostKT+iKT);
        document.getElementById('oKT').innerHTML = gesKT.toFixed(2);
        gesamtKosten();
    }

}

function calcGT()
{
    document.getElementById('gT').oninput = function () {
        gesKostGT = this.value*kostGT;
        gesIGT = this.value*iGT;
        gesGT = this.value * (kostGT+iGT);
        document.getElementById('oGT').innerHTML = gesGT.toFixed(2);
        gesamtKosten();
    }
}

function calcLagern()
{
    document.getElementById('lag').oninput = function () {
        gesKostLag= this.value*kostLag;
        gesILag = this.value*iLag;
        gesLag = this.value * (kostLag+iLag);
        document.getElementById('oLag').innerHTML = gesLag.toFixed(2);
        gesamtKosten();
    }
}

function calcMobil()
{
    document.getElementById('mob').oninput = function () {
        gesKostMobil = this.value * kostMobil;
        gesIMobil = this.value * iMobil;
        gesMobil = this.value * (kostMobil+iMobil);
        document.getElementById('oMob').innerHTML = gesMobil.toFixed(2);
        gesamtKosten();
    }
}
function calcNahrung()
{
    document.getElementById('nahrung').oninput = function () {
        gesKostNahrung = this.value * kostNahrung;
        gesINahrung = this.value * iNahrung;
        gesNahrung = this.value * (kostNahrung+iNahrung);
        document.getElementById('oNahrung').innerHTML = gesNahrung.toFixed(2);
        gesamtKosten();
    }
}

function calcPEG()
{
    document.getElementById('peg').oninput = function () {
        gesKostPEG = this.value * kostPEG;
        gesIPEG = this.value * iPEG;
        gesPEG = this.value * (kostPEG+iPEG);
        document.getElementById('oPeg').innerHTML = gesPEG.toFixed(2);
        gesamtKosten();
    }
}
function calcDBE()
{
    document.getElementById('dbe').oninput = function () {
        gesKostDBE = this.value * kostDBE;
        gesIDBE = this.value * iDBE;
        gesDBE = this.value * (kostDBE+iDBE);
        document.getElementById('oDBE').innerHTML = gesDBE.toFixed(2);
        gesamtKosten();
    }
}
function calcWohn()
{
    document.getElementById('wohn').oninput = function () {
        gesKostWohn = this.value * kostWohn;
        gesIWohn = this.value*iWohn;
        gesWohn = this.value * (kostWohn+iWohn);
        document.getElementById('oWohn').innerHTML = gesWohn.toFixed(2);
        gesamtKosten();
    }
}
/*function calcWohn()
{
    document.getElementById('wohn').oninput = function () {
        gesKostWohn = this.value * kostWohn;
        gesIWohn = this.value * iWohn;
        gesWohn = this.value * (kostWohn+iWohn);
        document.getElementById('oWohn').innerHTML = gesWohn.toFixed(2);
        gesamtKosten();
    }
}*/
function calcBegl()
{
    document.getElementById('begl').oninput = function () {
        gesKostBegl = this.value * kostBegl;
        gesIBegl = this.value * iBegl;
        gesBegl = this.value * (kostBegl+iBegl);
        document.getElementById('oBegl').innerHTML = gesBegl.toFixed(2);
        gesamtKosten();
    }
}
function calcHausw()
{
    document.getElementById('hausw').oninput = function () {
        gesKostHausw = this.value * kostHausw;
        gesIHausw = this.value* iHausw;
        gesHausw = this.value * (kostHausw+iHausw);
        document.getElementById('oHausw').innerHTML = gesHausw.toFixed(2);
        gesamtKosten();
    }
}
function calcErstB()//Berechnung Erstbesuch
{
    document.getElementById('erstb').oninput = function () {
        gesKostErstb = this.value * kostErstb;
        gesIErstb = this.value * iErstb;
        gesErstb = this.value * (kostErstb+iErstb);
        document.getElementById('oErstb').innerHTML = gesErstb.toFixed(2);
        gesamtKosten();
    }
}
function calcHausl()
{
    document.getElementById('hausl').oninput = function () {
        gesKostHausl = this.value * kostHausl;
        gesIHausl = this.value * iHausl;
        gesHausl = this.value * (kostHausl+iHausl);
        document.getElementById('oHausl').innerHTML = gesHausl.toFixed(2);
        gesamtKosten();
    }
}
function calcHauslEx()
{
    document.getElementById('hauslEx').oninput = function () {
        gesKostHauslEx = this.value * kostHauslEx;
        gesIHauslEx = this.value * iHauslEx;
        gesHauslEx = this.value * (kostHauslEx+iHauslEx);
        document.getElementById('oHauslEx').innerHTML = gesHauslEx.toFixed(2);
        gesamtKosten();
    }
}

function gesamtKosten()
{
    
    var stufe = document.getElementById("selectStufe").value;
    var pflegeKost = gesKostKT+gesKostGT+gesKostLag+gesKostMobil+gesKostNahrung+gesKostPEG+gesKostDBE+gesKostWohn+gesKostBegl+gesKostHausw+gesKostErstb+gesKostHausl+gesKostHauslEx;
    var invAufw = gesIKT+gesIGT+gesILag+gesIMobil+gesINahrung+gesIPEG+gesIDBE+gesIWohn+gesIBegl+gesIHausw+gesIErstb+gesIHausl+gesIHauslEx;
    var gesKost =gesKT+gesGT+gesLag+gesMobil+gesNahrung+gesPEG+gesDBE+gesWohn+gesBegl+gesHausw+gesErstb+gesHausl+gesHauslEx;
        
    switch(stufe)
    {
        case "1":
            document.getElementById("sach").innerHTML= pg2.toFixed(2);
            if(pflegeKost <= pg2)
            {
                eigenanteil = 0;
                pflegeRest = pg2-pflegeKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = pflegeKost-pg2;
            }
            break;
        case "2":
            document.getElementById("sach").innerHTML= pg3.toFixed(2);
            if(pflegeKost <= pg3)
            {
                eigenanteil = 0;
                pflegeRest = pg3-pflegeKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = pflegeKost-pg3;
            }
            break;
        case "3":
            document.getElementById("sach").innerHTML= pg4.toFixed(2);
            if(pflegeKost <= pg4)
            {
                eigenanteil = 0;
                pflegeRest = pg4-pflegeKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = pflegeKost-pg4;
            }
            break;
            break;
        case "4":
            document.getElementById("sach").innerHTML= pg5.toFixed(2);
            if(pflegeKost <= pg5)
            {
                eigenanteil = 0;
                pflegeRest = pg5-pflegeKost;
            }
            else
            {
                pflegeRest = 0;
                eigenanteil = pflegeKost-pg5;
            }
            break;
        default:
            pflegeRest=0;
            eigenanteil = pflegeKost;
            
    }
    document.getElementById("pflegek").innerHTML = pflegeKost.toFixed(2);
    document.getElementById("invest").innerHTML = invAufw.toFixed(2);
    document.getElementById("gesamt").innerHTML = gesKost.toFixed(2);
    document.getElementById("pflegerest").innerHTML = pflegeRest.toFixed(2);
    document.getElementById("eigen").innerHTML = eigenanteil.toFixed(2);
}