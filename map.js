"use strict";
//  import{move} from './move.js';
exports.__esModule = true;
exports.map = void 0;
var map = /** @class */ (function () {
    function map() {
        var longeur;
        var largeur;
    }
    map.prototype.getSizemap = function (longeur, largeur) {
        return longeur * largeur;
    };
    map.prototype.hasard = function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    map.prototype.CreateMods = function () {
        var maDiv;
        ;
        var id;
        var id_column;
        id = 'classic';
        maDiv = document.createElement("div");
        maDiv.id = id;
        maDiv.innerHTML = '<button class="classicBtn">Mode classic</button>';
        document.getElementById('container_btn').append(maDiv);
        document.getElementById(id).className = "mods";
        id = 'chelou';
        maDiv = document.createElement("div");
        maDiv.id = id;
        maDiv.innerHTML = '<button class="hardBtn">Mode HARDCORE </button>';
        document.getElementById('container_btn').append(maDiv);
        document.getElementById(id).className = "mods";
    };
    map.prototype.GetRock = function () {
        var NbrNum;
        var i;
        var nbrHasard = [];
        var pushnum;
        NbrNum = this.hasard(10, 15);
        i = 0;
        while (i < NbrNum) {
            i++;
            pushnum = this.hasard(1, 100);
            nbrHasard.push(pushnum);
        }
        return nbrHasard;
    };
    map.prototype.GetMouche = function () {
        var NbrNum;
        var i;
        var nbrMouche = [];
        var pushnum;
        NbrNum = 5;
        i = 0;
        while (i < NbrNum) {
            i++;
            pushnum = this.hasard(1, 100);
            nbrMouche.push(pushnum);
        }
        return nbrMouche;
    };
    map.prototype.getFrog = function () {
        var frog;
        frog = this.hasard(1, 100);
        return frog;
    };
    map.prototype.CreateMap = function (rock, mouche, frog) {
        var i = 0;
        var o = 0;
        var maDiv;
        ;
        var id;
        var id_column;
        var z = 0;
        var a = 0;
        // Permet de Crée les column
        while (i < 10) {
            i++;
            id = 'div_column' + i;
            maDiv = document.createElement("div");
            maDiv.id = id;
            document.getElementById('map').append(maDiv);
            document.getElementById(id).className = "mapping";
        }
        // Permet de crée la map
        while (z < 10) {
            z++;
            o = 0;
            while (o < 10) {
                a++;
                o++;
                id_column = 'div_column' + o;
                maDiv = document.createElement("div");
                maDiv.id = a;
                document.getElementById(id_column).append(maDiv);
                if (mouche.includes(a) && a != frog) {
                    document.getElementById(a).className = "mouche";
                }
                else if (rock.includes(a) && a != frog) {
                    document.getElementById(a).className = "rock";
                }
                else if (frog == a) {
                    document.getElementById(a).className = "frog";
                }
                else {
                    document.getElementById(a).className = "eau";
                }
            }
        }
    };
    return map;
}());
exports.map = map;
var rock;
var mouche;
var frog;
var NbrMouche;
var CreateMode;
var mods;
var m = new map();
rock = m.GetRock();
mouche = m.GetMouche();
CreateMode = m.CreateMods();
// mods = m.chooseModClassic();
// mods;
console.log(mods);
var b = new move();
frog = m.getFrog();
NbrMouche = move.nbrMouche();
// m.CreateMap(rock , mouche,frog);
b.frogMove();
// ____________
function chooseModClassic() {
    var idModClassic;
    var ID;
    var idModChelou;
    document.getElementById('fleche_h').className = "display_none";
    document.getElementById('fleche_l').className = "display_none";
    document.getElementById('fleche_r').className = "display_none";
    document.getElementById('fleche_b').className = "display_none";
    idModClassic = document.getElementById('classic');
    idModChelou = document.getElementById('chelou');
    idModChelou.addEventListener("click", modChelou, false);
    idModClassic.addEventListener("click", modClassic, false);
    function modClassic() {
        var css;
        var CreateSound;
        css = document.getElementById('css');
        css.href = "css/normal.css";
        alert("Ok c'est parti pour le mode Classic :)");
        document.getElementById('fleche_h').className = "fleche_h";
        document.getElementById('fleche_l').className = "fleche_l";
        document.getElementById('fleche_r').className = "fleche_r";
        document.getElementById('fleche_b').className = "fleche_b";
        m.CreateMap(rock, mouche, frog);
        document.getElementById('classic').className = "display_none";
        document.getElementById('chelou').className = "display_none";
        document.getElementById('container_btn').className = "display_none";
    }
    function modChelou() {
        var css;
        var CreateSound;
        css = document.getElementById('css');
        css.href = "css/volcano.css";
        alert("Ok c'est parti pour le mode HARDCORE");
        document.getElementById('fleche_h').className = "fleche_h";
        document.getElementById('fleche_l').className = "fleche_l";
        document.getElementById('fleche_r').className = "fleche_r";
        document.getElementById('fleche_b').className = "fleche_b";
        CreateSound = document.createElement("source");
        CreateSound.src = "autres/CriEnfant.mp3";
        CreateSound.type = "audio/mpeg";
        document.getElementById('sound').append(CreateSound);
        m.CreateMap(rock, mouche, frog);
        document.getElementById('chelou').className = "display_none";
        document.getElementById('classic').className = "display_none";
        document.getElementById('container_btn').className = "display_none";
    }
}
chooseModClassic();
