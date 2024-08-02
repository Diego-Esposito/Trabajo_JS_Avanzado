/*Validación formulario con JS */

document.getElementById('registroForm').addEventListener(
    'submit',function(event){
        event.preventDefault();
        validarForm();
    }
);

const getMensaje = () => {
    const http = new XMLHttpRequest()
    //Maneja la respuesta
    http.onreadystatechange = () => {
        console.log("onreadystatechange");
        console.log(http.readyState);
        console.log(http.status);

        //Verifica si la solicitud fue exitosa
        if(http.readyState == 4 && http.status == 200){
            document.getElementById("mensaje").innerHTML = http.responseText;
        }
    };

    //Inicializar la solicitud con el metodo GET y la url de recurso
    http.open('GET', 'http://localhost/Trabajo_JS_Avanzado/gracias.txt', true);

    http.send();
}


function validarForm(){
    let nombre= document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let telefono= document.getElementById("telefono").value;
    let email= document.getElementById("email").value;
    let asunto= document.getElementById("asunto").value;
    let descripcion= document.getElementById("descripcion").value;

    let valid= true;

    if(nombre === ""){
        document.getElementById("errorNombre").innerText = "El nombre es obligatorio";
        valid= false;
    } else {
        document.getElementById("errorNombre").innerText = "";
    }
    
    if(apellido === ""){
        document.getElementById("errorApellido").innerText = "El apellido es obligatorio";
        valid= false;
    } else {
        document.getElementById("errorApellido").innerText = "";
    }

    if(telefono === ""){
        document.getElementById("errorTelefono").innerText = "El telefono es obligatorio";
        valid= false;
    } else {
        document.getElementById("errorTelefono").innerText = "";
    }

    if(email === ""){
        document.getElementById("errorEmail").innerText = "El email es obligatorio";
        valid= false;
    } else {
        document.getElementById("errorEmail").innerText = "";
    }

    if(asunto === ""){
        document.getElementById("errorAsunto").innerText = "El asunto es obligatorio";
        valid= false;
    } else {
        document.getElementById("errorAsunto").innerText = "";
    }

    if(descripcion === ""){
        document.getElementById("errorDescripcion").innerText = "El descripción es obligatorio";
        valid= false;
    } else {
        document.getElementById("errorDescripcion").innerText = "";
    }

    if(nombre !== "" && apellido !== "" && telefono !== "" && email !== "" && asunto !== "" && descripcion !== ""){
        getMensaje();
    }
    //console.log(nombre, apellido, telefono, email, asunto, descripcion)
}
    //Mostrar mje de formulario valido
   /* if(valid){
        alert("Formulario enviado correctamente");
    }
        */


