document.addEventListener("DOMContentLoaded", ()=>{
console.log("Hello")

let modulo=document.querySelector("form")

modulo.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("submit")
    let pass=document.getElementById("pass")
    let mail=document.getElementById("e_mail")

    campoVuoto(pass, "Password è obligatorio")
    campoVuoto(mail, "Email è obbligatoria")
})




   
      


}) //DOM

function campoVuoto(input,messaggio) {
 

    if (input.value.trim().length == 0) {
      //console.log("errore")
      input.nextElementSibling.innerHTML ="Campo è obbligatorio";
      input.nextElementSibling.style.display = "block";
      input.classList.add("inputerrore");
    } else {
      //console.log("corretto")
      input.nextElementSibling.style.display = "none";
      input.classList.remove("inputerrore");
    }
 
}