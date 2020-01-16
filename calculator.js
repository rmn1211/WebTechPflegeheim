
//Kleine Morgen-/Abendtoilette
const kostKT =14.24;
const iKT = 0.72;
var gesKT= 0;

//Große Morgen-/Abendtoilette
const kostGT = 22.55;
const iGT = 1.14;
var gesGT = 0;

//Lagern
const kostLag = 3.96;
const iLag = 0.2;
var gesLag = 0;

//Mobilisation
const kostMobil = 5.93;
const iMobil = 0.3;
var gesMobil =0;

//Hilfe bei der Nahrungsaufnahme
const kostNahrung = 9.89;
const iNahrung = 0.5;
var gesNahrung = 0;

//Sondenkost bei implantierter Magensonde
const kostPEG = 3.96;
const iPEG = 0.2;
var gesPEG = 0;

//Darm- Blasenentleerung
const kostDBE = 3.96;
const iDBE = 0.2;
var gesDBE = 0;

//Hilfestellung Verlassen u. Wiederaufsuchen d. Wohnung
const kostWohn = 2.77;
const iWohn = 0.14;
var gesWohn= 0;

//Begleitung bei Aktivitäten außerhalb der Wohung
const kostBegl = 23.73;
const iBegl = 1.2;
var gesBegl = 0;

//Hausw. Verrichtungen/Std.
const kostHausw = 22.15;
const iHausw = 1.2;
var gesHausw = 0;

//Pflegeeinsätze nach § 37 Abs. 3 SGB XI
const kostPflege2_3 = 23;
const kostPflege4_5 = 33;

//Erstbesuch / Folgebesuch
const kostErstb = 22.15;
const iErstb = 1.2;
var gesErstb = 0;

//Leistungen der häuslichen Betreuung 
const kostHausl = 28.48;
const iHausl = 1.44;
var gesHausl = 0;

//Häusliche Betreuung durch Fachkräfte
const kostHauslEx = 40.34;
const iHauslEx = 2.04;
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
}

function calcKT()
{
    
    document.getElementById('kT').oninput = function () {
        gesKT = this.value * (kostKT+iKT);
        document.getElementById('oKT').innerHTML = gesKT.toFixed(2);
    }

}

function calcGT()
{
    document.getElementById('gT').oninput = function () {
        gesGT = this.value * (kostGT+iGT);
        document.getElementById('oGT').innerHTML = gesGT.toFixed(2);
    }
}

function calcLagern()
{
    document.getElementById('lag').oninput = function () {
        gesLag = this.value * (kostLag+iLag);
        document.getElementById('oLag').innerHTML = gesLag.toFixed(2);
    }
}

function calcMobil()
{
    document.getElementById('mob').oninput = function () {
        gesMobil = this.value * (kostMobil+iMobil);
        document.getElementById('oMob').innerHTML = gesMobil.toFixed(2);
    }
}
function calcNahrung()
{
    document.getElementById('nahrung').oninput = function () {
        gesNahrung = this.value * (kostNahrung+iNahrung);
        document.getElementById('oNahrung').innerHTML = gesNahrung.toFixed(2);
    }
}

function calcPEG()
{
    document.getElementById('peg').oninput = function () {
        gesPEG = this.value * (kostPEG+iPEG);
        document.getElementById('oPeg').innerHTML = gesPEG.toFixed(2);
    }
}
function calcDBE()
{
    document.getElementById('dbe').oninput = function () {
        gesDBE = this.value * (kostDBE+iDBE);
        document.getElementById('oDBE').innerHTML = gesDBE.toFixed(2);
    }
}
function calcWohn()
{
    document.getElementById('wohn').oninput = function () {
        gesWohn = this.value * (kostWohn+iWohn);
        document.getElementById('oWohn').innerHTML = gesWohn.toFixed(2);
    }
}
function calcWohn()
{
    document.getElementById('wohn').oninput = function () {
        gesWohn = this.value * (kostWohn+iWohn);
        document.getElementById('oWohn').innerHTML = gesWohn.toFixed(2);
    }
}
function calcBegl()
{
    document.getElementById('begl').oninput = function () {
        gesBegl = this.value * (kostBegl+iBegl);
        document.getElementById('oBegl').innerHTML = gesBegl.toFixed(2);
    }
}
function calcHausw()
{
    document.getElementById('hausw').oninput = function () {
        gesHausw = this.value * (kostHausw+iHausw);
        document.getElementById('oHausw').innerHTML = gesHausw.toFixed(2);
    }
}
function calcErstB()
{
    document.getElementById('erstb').oninput = function () {
        gesErstb = this.value * (kostErstb+iErstb);
        document.getElementById('oErstb').innerHTML = gesErstb.toFixed(2);
    }
}
function calcHausl()
{
    document.getElementById('hausl').oninput = function () {
        gesHausl = this.value * (kostHausl+iHausl);
        document.getElementById('oHausl').innerHTML = gesHausl.toFixed(2);
    }
}
function calcHauslEx()
{
    document.getElementById('hauslEx').oninput = function () {
        gesHauslEx = this.value * (kostHauslEx+iHauslEx);
        document.getElementById('oHauslEx').innerHTML = gesHauslEx.toFixed(2);
    }
}

