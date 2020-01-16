var pflegestufe = 2;


var kostKleineToilette =14.24;
var iKleineToilette = 0.72;
var gesKleineToilette=0;

var kostGrosseToilette = 22.55;
var iGrosseToilette = 1.14;
var gesGrosseToilette = 0;

var kostLagern = 3.96;
var iLagern = 0.2;
var gesLagern = 0;



function calcKLeineToilette(anz)
{
    gesKleineToilette= anz *(iKleineToilette+kostKleineToilette);
}

function calcGrosseToilette(anz)
{
    gesGrosseToilette = anz *(iGrosseToilette+kostGrosseToilette)
}

function calcLagern(anz)
{
    gesLagern= anz * (iLagern+kostLagern)
}