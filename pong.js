//============== variables==============
let middle=1500/2-5
  , hMax=window.innerHeight
  , h=0
  , jHeight=500
  , jWidth=10
  , yJ1=400
  , yJ2=400
  , previousMove=""
  , first1=true
  , first2=true
  , xBalle=300
  , yBalle=400
  , sizeBalle=10
  , vitessex=sizeBalle/2
  , vitessey=sizeBalle/2
  , game=true
  , player
  , speed1=10
  , speed2=10
const globale = document.getElementById("globale")
const ctx = globale.getContext('2d')
const joueur1 = document.getElementById('joueur1')
const j1Ctx = joueur1.getContext('2d')
const joueur2 = document.getElementById('joueur2')
const j2Ctx = joueur2.getContext('2d')

//=================initialisation================

var init = () => {
  let y=-10
  //======ligne centrale=========
  while(h<hMax){
    ctx.fillStyle="white"
    ctx.fillRect(middle, y, 10, 25)
    y+=50
    h+=50
  }
  //======joueurs========
  while(yJ1<jHeight){
    j1Ctx.fillStyle="white"
    j1Ctx.fillRect(2,yJ1,10,5)
    j2Ctx.fillStyle="white"
    j2Ctx.fillRect(-2,yJ2,10,5)
    yJ1+=5
    yJ2+=5
  }
  //========balle========
  ctx.fillStyle="white"
  ctx.arc(xBalle,yBalle,sizeBalle,0,2*Math.PI);
  ctx.fill()
  moveBall()
}


//===============interaction=================
player=parseInt(prompt("combien de joueur ?",0))
if(player===1){
  speed2=40
}
if(player===2){
  speed1=40
  speed2=40
}

var infosClavier = e => {
  let number = Number(e.keyCode);
  if(number===13){
    init()
  }
  if(player===1){
    switch (number) {
      case 38:
        j2Up()
        break;
      case 40:
        j2Down()
        break;
      }
  }
  if(player===2){
    switch (number) {
      case 90:
        j1Up()
        break;
      case 83:
        j1Down()
        break;
      case 38:
        j2Up()
        break;
      case 40:
        j2Down()
        break;
    }
  }
}

document.addEventListener("keydown", infosClavier);

//===============joueur1===================
var j1Down = ()=>{
  if(yJ1<800){
    if(first1){
      yJ1-=100
    }
    yJ1+=speed1
    j1Ctx.clearRect(0, 0, joueur1.width, joueur1.height);
    j1Ctx.fillStyle="white"
    j1Ctx.fillRect(2,yJ1,10,100)
    first1=false
  }
}


var j1Up = ()=>{
  if(yJ1>0){
    if(first1){
      yJ1-=100
    }
    yJ1-=speed1
    j1Ctx.clearRect(0, 0, joueur1.width, joueur1.height);
    j1Ctx.fillStyle="white"
    j1Ctx.fillRect(2,yJ1,10,100)
    first1=false
  }
}


//=================joueur2===================
var j2Down = ()=>{
  if(yJ2<800){
    if(first2){
      yJ2-=100
    }
    yJ2+=speed2
    j2Ctx.clearRect(0, 0, joueur2.width, joueur2.height);
    j2Ctx.fillStyle="white"
    j2Ctx.fillRect(-2,yJ2,10,100)
    first2=false
  }
}

var j2Up = ()=>{
  if(yJ2>0){
    if(first2){
      yJ2-=100
    }
    yJ2-=speed2
    j2Ctx.clearRect(0, 0, joueur2.width, joueur2.height);
    j2Ctx.fillStyle="white"
    j2Ctx.fillRect(-2,yJ2,10,100)
    first2=false
  }
}

//============IA=====================
var ia = ()=>{
  if(yJ2+51<yBalle){
    j2Down()
  }
  if(yJ2+49>yBalle){
    j2Up()
  }

}

//===============balle===================
var moveBall = () =>{
  ctx.clearRect(0,0,globale.width,globale.height)
  y=0
  h=0
  while(h<hMax){
  ctx.fillStyle="white"
  ctx.fillRect(middle, y, 10, 25)
  y+=50
  h+=50
  }
  xBalle+=vitessex
  yBalle+=vitessey
  ctx.fillStyle="white"
  ctx.beginPath();
  ctx.arc(xBalle,yBalle,sizeBalle,0,2*Math.PI);
  ctx.fill()
  ctx.closePath();
  if(player===1){
    if(yJ1+51<yBalle){
      j1Down()
    }
    if(yJ1+49>yBalle){
      j1Up()
    }
  }
  if(player===0){
    if(yJ1+51<yBalle){
      j1Down()
    }
    if(yJ1+49>yBalle){
      j1Up()
    }
    if(yJ2+51<yBalle){
      j2Down()
    }
    if(yJ2+49>yBalle){
      j2Up()
    }
  }
  if(yBalle+sizeBalle<=globale.height){
    vitessey=-vitessey
  }
  if(yBalle-sizeBalle>=0){
    vitessey=-vitessey
  }
  if(xBalle+sizeBalle>=globale.width && yJ2<yBalle+sizeBalle && yBalle-sizeBalle<yJ2+100){
    vitessex=-vitessex
  }
  if(xBalle<=10 && yJ1<yBalle+sizeBalle && yBalle-sizeBalle<yJ1+100){
    vitessex=-vitessex
  }
  if(xBalle+sizeBalle<0){
    console.log("end");
    game=false
  }
  if(xBalle-sizeBalle>globale.width){
    console.log("end");
    game=false
  }
  if(game){
    window.requestAnimationFrame(moveBall)
  }else{
    gameOver()
  }
}

var gameOver = ()=>{
  alert("GAME OVER")
  setInterval(pongFinal,2000)
}
//==========================================Ecran de fin==============================
var pongFinal = ()=>{
  //============== variables==============
  let middle=1500/2-5
    , hMax=window.innerHeight
    , h=0
    , jHeight=500
    , jWidth=10
    , yJ1=400
    , yJ2=400
    , previousMove=""
    , first1=true
    , first2=true
    , xBalle=300
    , yBalle=400
    , sizeBalle=10
    , vitessex=sizeBalle*8
    , vitessey=sizeBalle*8
    , loop=0
  const globale = document.getElementById("globale")
  const ctx = globale.getContext('2d')
  const joueur1 = document.getElementById('joueur1')
  const j1Ctx = joueur1.getContext('2d')
  const joueur2 = document.getElementById('joueur2')
  const j2Ctx = joueur2.getContext('2d')

  //=================initialisation================

  var init = () => {
    let y=-10
    //======ligne centrale=========
    while(h<hMax){
      ctx.fillStyle="white"
      ctx.fillRect(middle, y, 10, 25)
      y+=50
      h+=50
    }
    //======joueurs========
    while(yJ1<jHeight){
      j1Ctx.fillStyle="white"
      j1Ctx.fillRect(2,yJ1,10,5)
      j2Ctx.fillStyle="white"
      j2Ctx.fillRect(-2,yJ2,10,5)
      yJ1+=5
      yJ2+=5
    }
    //========balle========
    ctx.fillStyle="white"
    ctx.arc(xBalle,yBalle,sizeBalle,0,2*Math.PI);
    ctx.fill()


    setInterval(()=>{
      if(loop<1750){
        moveBall()
        loop+=1
      }
    },50)
  }


  //===============interaction=================

        init();


  //===============joueur1===================
  var j1Down = ()=>{
    if(yJ1<800){
      if(first1){
        yJ1-=100
      }
      yJ1+=10
      j1Ctx.clearRect(0, 0, joueur1.width, joueur1.height);
      j1Ctx.fillStyle="white"
      j1Ctx.fillRect(2,yJ1,10,100)
      first1=false
    }
  }


  var j1Up = ()=>{
    if(yJ1>0){
      if(first1){
        yJ1-=100
      }
      yJ1-=10
      j1Ctx.clearRect(0, 0, joueur1.width, joueur1.height);
      j1Ctx.fillStyle="white"
      j1Ctx.fillRect(2,yJ1,10,100)
      first1=false
    }
  }


  //=================joueur2===================
  var j2Down = ()=>{
    if(first2){
      yJ2-=100
    }
    yJ2+=10
    j2Ctx.clearRect(0, 0, joueur2.width, joueur2.height);
    j2Ctx.fillStyle="white"
    j2Ctx.fillRect(-2,yJ2,10,100)
    first2=false
  }

  var j2Up = ()=>{
    if(first2){
      yJ2-=100
    }
    yJ2-=10
    j2Ctx.clearRect(0, 0, joueur2.width, joueur2.height);
    j2Ctx.fillStyle="white"
    j2Ctx.fillRect(-2,yJ2,10,100)
    first2=false
  }
var color="#35D25"
  //===============balle===================
  var moveBall = () =>{
    setInterval(color,2500)
    ctx.clearRect(0, 0, globale.width+50, globale.height+50);
    y=0
    h=0
    while(h<hMax){
    ctx.fillStyle="white"
    ctx.fillRect(middle, y, 10, 25)
    y+=50
    h+=50
    }
    xBalle+=vitessex
    yBalle+=vitessey
    ctx.fillStyle=color
    ctx.arc(xBalle,yBalle,sizeBalle,0,2*Math.PI);
    ctx.fill()
    if(yBalle+sizeBalle<=globale.height){
      vitessey=-vitessey
    }
    if(yBalle-sizeBalle>=0){
      vitessey=-vitessey
    }
    if(xBalle+sizeBalle<=globale.width){
      vitessex=-vitessex
    }
    if(xBalle-sizeBalle>=0){
      vitessex=-vitessex
    }
    console.log(vitessex);
    console.log(vitessey);
    console.log(xBalle);
    console.log(yBalle);
  }
  var color =()=>{
    color=color+"1"
  }

}
