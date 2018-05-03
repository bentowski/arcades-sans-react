//============== variables==============
let middle=1500/2-5
  , hMax=window.innerHeight
  , h=0
  , jHeight=500
  , jWidth=10
  , yJ=400
  , previousMove=""
const globale = document.getElementById("globale")
const ctx = globale.getContext('2d')
const joueur1 = document.getElementById('joueur1')
const j1Ctx = joueur1.getContext('2d')
const joueur2 = document.getElementById('joueur2')
const j2Ctx = joueur2.getContext('2d')


var init = () => {
  console.log(hMax);
  let y=-10
  while(h<hMax){
    console.log(y);
    ctx.fillStyle="white"
    ctx.fillRect(middle, y, 10, 25)
    y+=50
    h+=50
  }
  while(yJ<jHeight){
    j1Ctx.fillStyle="white"
    j1Ctx.fillRect(2,yJ,10,5)
    j2Ctx.fillStyle="white"
    j2Ctx.fillRect(-2,yJ,10,5)
    yJ+=5
  }

}

var infosClavier = e => {
  let number = Number(e.keyCode);
  switch (number) {
    case 38:
      j1Up()
      break;
    case 40:
      j1Down()
      break;
    case 13:
      init();
      break;
  }
}

document.addEventListener("keydown", infosClavier);

//===============joueur1===================
var j1Down = ()=>{
  yJ+=10
  context.clearRect(0, 0, canvas.width, canvas.height);
  j1Ctx.fillStyle="white"
  j1Ctx.fillRect(0,yJ,10,5)
}

var j1Up = ()=>{
  yJ-=10
  context.clearRect(0, 0, joueur1.width, canvas.height);
  j1Ctx.fillStyle="white"
  j1Ctx.fillRect(0,yJ,10,5)
}
