document.addEventListener("DOMContentLoaded",function () {
    let slider=document.getElementById("slider")
    let animazione;
    animazione=setInterval(muoviSlid, 2000) 

// popup =================

document.getElementById("banner").onclick=function(){
   document.querySelector("section").style.display="block"
}

document.getElementById("chiudi").onclick=function(){
   document.querySelector("section").style.display="none"
}





//===============Popup FILM aperura/chiusura===========================================================================
let boxs=document.querySelectorAll(".novità")
let popups=document.querySelectorAll(".Coperta")
console.log(popups)

for(let i=0; i<boxs.length; i++){
   boxs[i].onclick=function(){
      popups[i].style.display="block"
   }
}

let chiusura=document.querySelectorAll(".close")
console.log(chiusura)
for(let i=0; i<chiusura.length; i++){
   chiusura[i].onclick=function(){
      popups[i].style.display="none"
   }
}
//=======fine========Popup FILM aperura/chiusura===========================================





 }) //DOM
 //function Slider grande
 function muoviSlid(){
 let imgVisibile=document.querySelector("#slider .visibile") 
  console.log(imgVisibile)
 
 let imgSucessiva=imgVisibile.nextElementSibling
 console.log(imgSucessiva)
 
 
 if(imgSucessiva==null) 
 {
    imgSucessiva=imgVisibile.parentElement.children[0]
 }
 console.log(imgSucessiva)
 
 imgLeft=document.querySelector("#slider .moveLeft")
 console.log(imgLeft)
 
 imgVisibile.classList.replace("visibile","moveLeft")
 imgSucessiva.classList.add("visibile")
 
 if(imgLeft!=null){
    imgLeft.classList.remove("moveLeft")
 }
 }  //FINE SLIDER grande