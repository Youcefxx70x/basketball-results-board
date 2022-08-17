//we declare two variables and pass themthe elements that we want to modify as values (nous choisissons les elements que nous voulons modifier avec le code )
let homeScore=document.getElementById("Home");
let guestScore=document.getElementById("Guest");

//we declare two variables that will serve as counters and we initialize them with 0 
let Hcounter=0;
let Gcounter=0;

//les fonctions d'incrementations
function Hincrement1(){
    
    Hcounter++;
    homeScore.textContent=Hcounter
    highlight();

}
function Hincrement2(){
    
    Hcounter+=2;
    homeScore.textContent=Hcounter
    highlight();

}

function Hincrement3(){
    
    Hcounter+=3;
    homeScore.textContent=Hcounter
    highlight();

}

function Gincrement1(){
    
    Gcounter++;
    guestScore.textContent=Gcounter
    highlight();

}
function Gincrement2(){
    
    Gcounter+=2;
    guestScore.textContent=Gcounter;
    highlight();
}

function Gincrement3(){
    
    Gcounter+=3;
    guestScore.textContent=Gcounter
   highlight();

}


function restart(){
document.getElementById("new-game").style.backgroundColor="#F94F6D";
 Hcounter=0;
 Gcounter=0;
homeScore.textContent="0";
guestScore.textContent="0";
reshigh()
}

function highlight(){
if(Number(guestScore.textContent)<Number(homeScore.textContent)){
    homeScore.style.border="3px solid green";
    homeScore.style.outline="8px solid yellowgreen";
    guestScore.style.border="3px solid red";
    guestScore.style.outline="8px solid rgb(238, 72, 72)";
} else if(Number(guestScore.textContent)>Number(homeScore.textContent)){
    guestScore.style.border="3px solid green";
    guestScore.style.outline="8px solid yellowgreen";
    homeScore.style.border="3px solid red";
    homeScore.style.outline="8px solid rgb(238, 72, 72)";
}else{
    reshigh()

}

}

function reshigh(){
    homeScore.style.border="none"
    homeScore.style.outline="none"
    guestScore.style.border="none"
    guestScore.style.outline="none"}