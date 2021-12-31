
// import{map} from 'map.js';
class move{ 

    static hasard(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    frogMove(){

        let fleche_b:any;
        let fleche_h:any;
        let fleche_r:any;
        let fleche_l:any;
        let i:any;

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

    }


    // Bot
    movingBot(){

        let frogCase:any;
        let idFrog:any;
        let idBotFrog:any;
        let BotCase:any;


        frogCase = document.getElementsByClassName("frog");
        idFrog = frogCase[0].id;

        idBotFrog = document.getElementById(idFrog).nextSibling;
        idBotFrog = idBotFrog.id;

        BotCase = document.getElementById(idBotFrog); 
        if(BotCase.className != 'rock'){
            document.getElementById(idFrog).className = "eau"; 
            document.getElementById(idBotFrog).className = "frog"; 
            move.movingMouche();
            
        }
    }

    // top
    movingTop(){
            
        let frogCase:any;
        let idFrog:any;
        let idTopFrog:any;
        let TopCase:any;

        frogCase = document.getElementsByClassName("frog");
        idFrog = frogCase[0].id;
        idTopFrog = document.getElementById(idFrog).previousElementSibling;
        idTopFrog = idTopFrog.id;

        TopCase = document.getElementById(idTopFrog); 

        if(TopCase.className != 'rock'){
            document.getElementById(idFrog).className = "eau"; 
            document.getElementById(idTopFrog).className = "frog"; 
            move.movingMouche();
           
           
        }
    }
        
    // Right
    movingRight(){
        
        let frogCase:any;
        let idFrog:any;
        let idRightFrog:any;
        let idFrogNBr:number;
        let RightCase:any;
        let proctectRigh:any= [1,11,21,31,41,51,61,71,81,91];

     
        frogCase = document.getElementsByClassName("frog");
        idFrog = frogCase[0].id;
        idFrogNBr = parseInt(idFrog); 
        idRightFrog = idFrogNBr + 1;

        RightCase = document.getElementById(idRightFrog); 


        if(!proctectRigh.includes(idRightFrog)){
            if(RightCase.className != 'rock' ){
                document.getElementById(idFrog).className = "eau"; 
                document.getElementById(idRightFrog).className = "frog"; 
                move.movingMouche();
             
               
            }
        }
    }

    // Left
    movingLeft(){
            
        let frogCase:any;
        let idFrog:any;
        let idLeftFrog:any;
        let idFrogNBr:number;
        let leftCase:any;
        let proctectLeft:any= [10,20,30,40,50,60,70,80,90,100];

     
        frogCase = document.getElementsByClassName("frog");
        idFrog = frogCase[0].id;
        idFrogNBr = parseInt(idFrog); 
        idLeftFrog = idFrogNBr - 1;

        leftCase = document.getElementById(idLeftFrog); 

        if(!proctectLeft.includes(idLeftFrog)){
            if(leftCase.className != 'rock'){
                document.getElementById(idFrog).className = "eau"; 
                document.getElementById(idLeftFrog).className = "frog"; 
                move.movingMouche();
              
            }
        }
    }

   static movingMouche(){

        let listMouche:any;
        let moucheID:any[] = []
        let NbrMouche:number;
        let IdLeftMouche:any;
        let IdRightMouche:any;
        let IdTopMouche:any;
        let IdBotMouche:any;
        let nbrHasard:any;
        let idFrogNBrRight:number;
        let leftCase:any;
        let rightCase:any;
        let topCase:any;
        let botCase:any;
        let proctectRigh:any= [1,11,21,31,41,51,61,71,81,91];
        let proctectLeft:any= [0,10,20,30,40,50,60,70,80,90,100];
        let ProtectCaseLeft:any;
        let ProtectCaseRight:any;
        let ProtectCaseTop:any;
        let ProtectCaseBot:any;
        let Sang:any;

        
        

        listMouche = document.getElementsByClassName("mouche");

        NbrMouche = listMouche.length;

        if(listMouche.length == 4){
            document.getElementById('sang1').className = "effetSang"; 
        }
        else if(listMouche.length == 3){
            document.getElementById('sang2').className = "effetSang"; 
        }
        else if(listMouche.length == 2){
            document.getElementById('sang3').className = "effetSang"; 
        }
        else if(listMouche.length == 1){
            document.getElementById('sang4').className = "effetSang"; 
        }

    if(NbrMouche){
        for (let i = 0; i < NbrMouche; ) {

            nbrHasard = move.hasard(1, 4);
            moucheID.push(listMouche[i].id);

            // Left
        
            if(!proctectLeft.includes(moucheID[i])){

                IdLeftMouche = moucheID[i] - 1;

                if(document.getElementById(IdLeftMouche)){
                    ProtectCaseLeft = document.getElementById(IdLeftMouche);
                   
                    leftCase = document.getElementById(IdLeftMouche).id;
                    ProtectCaseLeft = document.getElementById(IdLeftMouche);
                   
                   
                }
            }

            // RighT
           
            if(!proctectRigh.includes(moucheID[i])){

                idFrogNBrRight = parseInt( moucheID[i]); 
                IdRightMouche = idFrogNBrRight + 1;

                if(document.getElementById(IdRightMouche) ){
                    rightCase = document.getElementById(IdRightMouche).id;
                    ProtectCaseRight = document.getElementById(rightCase); 
                }
            }
            // Top
            if(document.getElementById( moucheID[i]).previousElementSibling){

                IdTopMouche = document.getElementById( moucheID[i]).previousElementSibling;
                IdTopMouche = IdTopMouche.id;
                topCase = document.getElementById(IdTopMouche).id;
                ProtectCaseTop = document.getElementById(topCase); 

            }

            // Bot 
            if( document.getElementById(moucheID[i]).nextSibling){

                IdBotMouche = document.getElementById(moucheID[i]).nextSibling;
                IdBotMouche = IdBotMouche.id;
                botCase = document.getElementById(IdBotMouche).id;
                ProtectCaseBot = document.getElementById(botCase); 

            }


            switch (nbrHasard) {

                // Left
                case 1:
                    if(leftCase && 
                        ProtectCaseLeft.className != 'rock' &&
                        ProtectCaseLeft.className != 'mouche'&&
                        ProtectCaseLeft.className != 'frog'){
                      
                        document.getElementById(moucheID[i]).className = "eau"; 
                        document.getElementById(leftCase).className = "mouche";


                    }
                    break;
                
                // Right 
                case 2:
                    if(rightCase &&
                        ProtectCaseRight.className != 'rock' &&
                        ProtectCaseRight.className != 'mouche'&&
                        ProtectCaseRight.className != 'frog'){
                        
                        document.getElementById(moucheID[i]).className = "eau"; 
                        document.getElementById(rightCase).className = "mouche"; 
         
                    }
                    break;

                // Top 
                case 3:
                    if(topCase &&   
                        ProtectCaseTop.className != 'rock' &&
                        ProtectCaseTop.className != 'mouche'&&
                        ProtectCaseTop.className != 'frog'){

                        document.getElementById(moucheID[i]).className = "eau"; 
                        document.getElementById(topCase).className = "mouche";
                    
                    }
                    break;

                // Bot

                case 4:
                    if(botCase &&
                           ProtectCaseBot.className != 'rock' &&
                           ProtectCaseBot.className != 'mouche'&&
                           ProtectCaseBot.className != 'frog'){

                        document.getElementById(moucheID[i]).className = "eau"; 
                        document.getElementById(botCase).className = "mouche";   
                         
                    }
                    break;
            }
          i++;
        }   
       
    }
    else{
        // alert('Bravo vous avez gagner !!!!')

        let maDiv:any;;
        let id:any;
 
         
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
        return false
    }

   }


      static  nbrMouche(){
       let  listMouche:any ;
       let  NbrMouche:number ;

        listMouche = document.getElementsByClassName("mouche");

        NbrMouche = listMouche.length;
        
        if(NbrMouche){
            
            return true;
        }
        else{ 
            return false;
        }
    }
}
export { move };

