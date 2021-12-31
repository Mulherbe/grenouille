//  import{move} from './move.js';

class map{
    
    constructor( ){
        let longeur:number;
        let largeur:number;

    }

     getSizemap(longeur , largeur ){
        return  longeur * largeur;
    }

     hasard(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    CreateMods(){
        
        let maDiv:any;;
        let id:any;
        let id_column:any;

        id = 'classic';
        maDiv = document.createElement("div");
        maDiv.id = id;
        maDiv.innerHTML = '<button class="classicBtn">Mode classic</button>'; 
        document.getElementById('container_btn').append(maDiv);
        document.getElementById(id).className = "mods";

        id = 'chelou';
        maDiv = document.createElement("div");
        maDiv.id = id;
        maDiv.innerHTML = '<button class="hard">Mode HARDCORE </button>'; 
        document.getElementById('container_btn').append(maDiv);
        document.getElementById(id).className = "mods";
    }

   
    GetRock(){

        let NbrNum:number;
        let i:number;
        let nbrHasard:number[] = [];
        let pushnum:number;
        
        NbrNum = this.hasard(10, 15);

        i = 0;
        while(i < NbrNum ){
            i++;
            pushnum = this.hasard(1, 100);
            nbrHasard.push(pushnum);
        }
        return nbrHasard;
    }

        GetMouche(){
            let NbrNum:number;
            let i:number;
            let nbrMouche:number[] = [];
            let pushnum:number;
            
            NbrNum = 5;

            i = 0;
            while(i < NbrNum ){
                i++;
                pushnum = this.hasard(1, 100);
                nbrMouche.push(pushnum);

            }
        return nbrMouche;
        }

        getFrog(){

            let frog:number;
            frog = this.hasard(1, 100);
            return frog;
        }

    CreateMap(rock , mouche, frog){
        let i:any  = 0;
        let o:any  = 0;
        let maDiv:any;;
        let id:any;
        let id_column:any;
        let z:any  = 0;
        let a:any  = 0;
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
        while (z < 10 ) {
            z++;
            o = 0;
            while (o < 10 ) {
                a++;
                o++;
                id_column = 'div_column' + o;
                maDiv = document.createElement("div");
                maDiv.id = a;
                document.getElementById(id_column).append(maDiv);
                if(mouche.includes(a) && a != frog){
                    document.getElementById(a).className = "mouche"; 
                }
                 else if(rock.includes(a) && a != frog){
                    document.getElementById(a).className = "rock"; }
                else if(frog == a){
                    document.getElementById(a).className = "frog"; }
                else {
                document.getElementById(a).className = "eau"; }   
            }
        }
    }
}
export { map };

let rock:any;
let mouche:any;
let frog:any;
let  NbrMouche:number ;
let CreateMode:any;
let mods:any;

var m = new map();

rock =  m.GetRock();

mouche =  m.GetMouche();

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

function chooseModClassic(){
    let idModClassic:any;
    let ID:any;
    let idModChelou:any;

    document.getElementById('fleche_h').className = "display_none"; 
    document.getElementById('fleche_l').className = "display_none"; 
    document.getElementById('fleche_r').className = "display_none"; 
    document.getElementById('fleche_b').className = "display_none"; 

    idModClassic = document.getElementById('classic');

    idModChelou = document.getElementById('chelou');

    idModChelou.addEventListener("click", modChelou, false);
    
    idModClassic.addEventListener("click", modClassic, false);

        function modClassic(){
            let css:any;
            let CreateSound:any;

            css =  document.getElementById('css');
            css.href = "css/normal.css";

           
      


            alert("Ok c'est parti pour le mode Classic :)");
            document.getElementById('fleche_h').className = "fleche_h"; 
            document.getElementById('fleche_l').className = "fleche_l"; 
            document.getElementById('fleche_r').className = "fleche_r"; 
            document.getElementById('fleche_b').className = "fleche_b"; 

            m.CreateMap(rock , mouche,frog);
            document.getElementById('classic').className = "display_none"; 
            document.getElementById('chelou').className = "display_none"; 
            document.getElementById('container_btn').className = "display_none"; 

        
        }
        function modChelou(){

            let css:any;
            let CreateSound:any;
            css =  document.getElementById('css');
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

            m.CreateMap(rock , mouche,frog);

            document.getElementById('chelou').className = "display_none"; 
            document.getElementById('classic').className = "display_none"; 
            document.getElementById('container_btn').className = "display_none"; 

        }
}

chooseModClassic();

