document.getElementById("contacto").addEventListener ("click", function ()  {
    if(document.getElementById("formularioContacto").style.display == "none"){
        document.getElementById("formularioContacto").style.display = "block";
    }
    else{
        document.getElementById("formularioContacto").style.display = "none";
    }
})

function enviarform(){
    document.getElementById("formularioContacto").style.display = "none";
    alert("Su Mensaje fue enviado");
}