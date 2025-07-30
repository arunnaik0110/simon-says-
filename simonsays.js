let gameseq=[];
let userseq=[];

let btns=["yellow", "purple", "red", "green"];
let started=false;
let level=0;
let highestScoreIs=[];
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
     console.log("Game started");
     started=true;
     LevelUp();
    }
    
})

function flashUp(btn){
   btn.classList.add("flash");
   setTimeout(function (){
    btn.classList.remove("flash");
   },250)
}
function userFlashUp(btn){
   btn.classList.add("userFlash");
   setTimeout(function (){
    btn.classList.remove("userFlash");
   },250)
}


function LevelUp(){
    userseq=[];
     level++;
    h3.innerText=`level ${level}`;
  let randomNum=Math.floor(Math.random()*4);
  let randomColor=btns[randomNum];
  let randomBtn=document.querySelector(`.${randomColor}`)

    //    console.log(randomColor);
    //    console.log(randomBtn);
    //    console.log(randomNum);

 flashUp(randomBtn);
 gameseq.push(randomColor);
//  console.log(gameseq);

}
function checkans(indx){
   
    if(gameseq[indx]===userseq[indx]){
       if(gameseq.length==userseq.length){
         setTimeout(LevelUp(),1000);
      } 
    }
    else{
        let score=level*10;
        highestScoreIs.push(score);
        h3.innerHTML=`Game Over!! your score is <b> ${score}</b> Highest Score Is ${Math.max(...highestScoreIs)} <br>Please Enter Any key to Restart :)`;
         reset();
    }
   
    
}

function btnPressed(){ 
    let btn=this; 
    userFlashUp(btn); 
     userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkans(userseq.length-1);
    // console.log(userseq);
}

let allBtn=document.querySelectorAll(".btn");
    for(btn of allBtn){
        btn.addEventListener("click",btnPressed)
        
    }


function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}
