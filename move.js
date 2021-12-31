"use strict";
exports.__esModule = true;
exports.move = void 0;
// import{map} from 'map.js';
var move = /** @class */ (function () {
    function move() {
    }
    move.hasard = function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    move.prototype.frogMove = function () {
        var fleche_b;
        var fleche_h;
        var fleche_r;
        var fleche_l;
        var i;
        // i = move.nbrMouche();
        document.addEventListener("click", move.nbrMouche, false);
        fleche_b = document.getElementsByClassName("fleche_b");
        fleche_h = document.getElementsByClassName("fleche_h");
        fleche_r = document.getElementsByClassName("fleche_r");
        fleche_l = document.getElementsByClassName("fleche_l");
        fleche_b[0].addEventListener("click", this.movingBot, false);
        fleche_h[0].addEventListener("click", this.movingTop, false);
        fleche_r[0].addEventListener("click", this.movingRight, false);
        fleche_l[0].addEventListener("click", this.movingLeft, false);
    };
    // Bot
    move.prototype.movingBot = function () {
        var frogCase;
        var idFrog;
        var idBotFrog;
        var BotCase;
        frogCase = document.getElementsByClassName("frog");
        idFrog = frogCase[0].id;
        idBotFrog = document.getElementById(idFrog).nextSibling;
        idBotFrog = idBotFrog.id;
        BotCase = document.getElementById(idBotFrog);
        if (BotCase.className != 'rock') {
            document.getElementById(idFrog).className = "eau";
            document.getElementById(idBotFrog).className = "frog";
            move.movingMouche();
        }
    };
    // top
    move.prototype.movingTop = function () {
        var frogCase;
        var idFrog;
        var idTopFrog;
        var TopCase;
        frogCase = document.getElementsByClassName("frog");
        idFrog = frogCase[0].id;
        idTopFrog = document.getElementById(idFrog).previousElementSibling;
        idTopFrog = idTopFrog.id;
        TopCase = document.getElementById(idTopFrog);
        if (TopCase.className != 'rock') {
            document.getElementById(idFrog).className = "eau";
            document.getElementById(idTopFrog).className = "frog";
            move.movingMouche();
        }
    };
    // Right
    move.prototype.movingRight = function () {
        var frogCase;
        var idFrog;
        var idRightFrog;
        var idFrogNBr;
        var RightCase;
        var proctectRigh = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
        frogCase = document.getElementsByClassName("frog");
        idFrog = frogCase[0].id;
        idFrogNBr = parseInt(idFrog);
        idRightFrog = idFrogNBr + 1;
        RightCase = document.getElementById(idRightFrog);
        if (!proctectRigh.includes(idRightFrog)) {
            if (RightCase.className != 'rock') {
                document.getElementById(idFrog).className = "eau";
                document.getElementById(idRightFrog).className = "frog";
                move.movingMouche();
            }
        }
    };
    // Left
    move.prototype.movingLeft = function () {
        var frogCase;
        var idFrog;
        var idLeftFrog;
        var idFrogNBr;
        var leftCase;
        var proctectLeft = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        frogCase = document.getElementsByClassName("frog");
        idFrog = frogCase[0].id;
        idFrogNBr = parseInt(idFrog);
        idLeftFrog = idFrogNBr - 1;
        leftCase = document.getElementById(idLeftFrog);
        if (!proctectLeft.includes(idLeftFrog)) {
            if (leftCase.className != 'rock') {
                document.getElementById(idFrog).className = "eau";
                document.getElementById(idLeftFrog).className = "frog";
                move.movingMouche();
            }
        }
    };
    move.movingMouche = function () {
        var listMouche;
        var moucheID = [];
        var NbrMouche;
        var IdLeftMouche;
        var IdRightMouche;
        var IdTopMouche;
        var IdBotMouche;
        var nbrHasard;
        var idFrogNBrRight;
        var leftCase;
        var rightCase;
        var topCase;
        var botCase;
        var proctectRigh = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
        var proctectLeft = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        var ProtectCaseLeft;
        var ProtectCaseRight;
        var ProtectCaseTop;
        var ProtectCaseBot;
        var Sang;
        listMouche = document.getElementsByClassName("mouche");
        NbrMouche = listMouche.length;
        if (listMouche.length == 4) {
            document.getElementById('sang1').className = "effetSang";
        }
        else if (listMouche.length == 3) {
            document.getElementById('sang2').className = "effetSang";
        }
        else if (listMouche.length == 2) {
            document.getElementById('sang3').className = "effetSang";
        }
        else if (listMouche.length == 1) {
            document.getElementById('sang4').className = "effetSang";
        }
        if (NbrMouche) {
            for (var i = 0; i < NbrMouche;) {
                nbrHasard = move.hasard(1, 4);
                moucheID.push(listMouche[i].id);
                // Left
                if (!proctectLeft.includes(moucheID[i])) {
                    IdLeftMouche = moucheID[i] - 1;
                    if (document.getElementById(IdLeftMouche)) {
                        ProtectCaseLeft = document.getElementById(IdLeftMouche);
                        leftCase = document.getElementById(IdLeftMouche).id;
                        ProtectCaseLeft = document.getElementById(IdLeftMouche);
                    }
                }
                // RighT
                if (!proctectRigh.includes(moucheID[i])) {
                    idFrogNBrRight = parseInt(moucheID[i]);
                    IdRightMouche = idFrogNBrRight + 1;
                    if (document.getElementById(IdRightMouche)) {
                        rightCase = document.getElementById(IdRightMouche).id;
                        ProtectCaseRight = document.getElementById(rightCase);
                    }
                }
                // Top
                if (document.getElementById(moucheID[i]).previousElementSibling) {
                    IdTopMouche = document.getElementById(moucheID[i]).previousElementSibling;
                    IdTopMouche = IdTopMouche.id;
                    topCase = document.getElementById(IdTopMouche).id;
                    ProtectCaseTop = document.getElementById(topCase);
                }
                // Bot 
                if (document.getElementById(moucheID[i]).nextSibling) {
                    IdBotMouche = document.getElementById(moucheID[i]).nextSibling;
                    IdBotMouche = IdBotMouche.id;
                    botCase = document.getElementById(IdBotMouche).id;
                    ProtectCaseBot = document.getElementById(botCase);
                }
                switch (nbrHasard) {
                    // Left
                    case 1:
                        if (leftCase &&
                            ProtectCaseLeft.className != 'rock' &&
                            ProtectCaseLeft.className != 'mouche' &&
                            ProtectCaseLeft.className != 'frog') {
                            document.getElementById(moucheID[i]).className = "eau";
                            document.getElementById(leftCase).className = "mouche";
                        }
                        break;
                    // Right 
                    case 2:
                        if (rightCase &&
                            ProtectCaseRight.className != 'rock' &&
                            ProtectCaseRight.className != 'mouche' &&
                            ProtectCaseRight.className != 'frog') {
                            document.getElementById(moucheID[i]).className = "eau";
                            document.getElementById(rightCase).className = "mouche";
                        }
                        break;
                    // Top 
                    case 3:
                        if (topCase &&
                            ProtectCaseTop.className != 'rock' &&
                            ProtectCaseTop.className != 'mouche' &&
                            ProtectCaseTop.className != 'frog') {
                            document.getElementById(moucheID[i]).className = "eau";
                            document.getElementById(topCase).className = "mouche";
                        }
                        break;
                    // Bot
                    case 4:
                        if (botCase &&
                            ProtectCaseBot.className != 'rock' &&
                            ProtectCaseBot.className != 'mouche' &&
                            ProtectCaseBot.className != 'frog') {
                            document.getElementById(moucheID[i]).className = "eau";
                            document.getElementById(botCase).className = "mouche";
                        }
                        break;
                }
                i++;
            }
        }
        else {
            // alert('Bravo vous avez gagner !!!!')
            var maDiv = void 0;
            ;
            var id = void 0;
            id = 'win';
            maDiv = document.createElement("div");
            maDiv.id = id;
            maDiv.innerHTML = 'Bravo tu as gagner !!!! ';
            document.getElementById('map').append(maDiv);
            document.getElementById(id).className = "win";
            id = 'win2';
            maDiv = document.createElement("div");
            maDiv.id = id;
            maDiv.innerHTML = '<form action="" > <button class="retry">Recommencer ?</button></form> ';
            document.getElementById('win').append(maDiv);
            // document.getElementById(id).className = "retry"; 
            return false;
        }
    };
    move.nbrMouche = function () {
        var listMouche;
        var NbrMouche;
        listMouche = document.getElementsByClassName("mouche");
        NbrMouche = listMouche.length;
        if (NbrMouche) {
            return true;
        }
        else {
            return false;
        }
    };
    return move;
}());
exports.move = move;
