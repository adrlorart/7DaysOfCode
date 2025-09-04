function frontend(){
    const text = document.getElementById('title');
    text.textContent='Perfecto, elegiste irte por Frontend, ahora elige un lenguaje';
    document.getElementById('opciones').style.display = 'none'; // oculta botones
    document.getElementById('front-opciones').style.display = 'block';
}

function backend(){
    const text = document.getElementById('title');
    text.textContent='Perfecto, elegiste irte por Backend, ahora elige un lenguaje';
    document.getElementById('opciones').style.display = 'none'; // oculta botones
    document.getElementById('back-opciones').style.display = 'block';

}

function react(){
    const text = document.getElementById('title');
    text.textContent='¿Qué es lo que deseas?';
    document.getElementById('front-opciones').style.display = 'none'; // oculta botones
    document.getElementById('gen-opciones').style.display = 'block';
}

function vue(){
    const text = document.getElementById('title');
    text.textContent='¿Qué es lo que deseas?';
    document.getElementById('front-opciones').style.display = 'none'; // oculta botones
    document.getElementById('gen-opciones').style.display = 'block';
}

function c(){
    const text = document.getElementById('title');
    text.textContent='¿Qué es lo que deseas?';
    document.getElementById('back-opciones').style.display = 'none'; // oculta botones
    document.getElementById('gen-opciones').style.display = 'block';
}

function java(){
    const text = document.getElementById('title');
    text.textContent='¿Qué es lo que deseas?';
    document.getElementById('back-opciones').style.display = 'none'; // oculta botones
    document.getElementById('gen-opciones').style.display = 'block';
}

function indistinto(){
    const text = document.getElementById('title');
    text.textContent='¿En qué tecnologías te gustaría especializarte o conocer?';
    document.getElementById('gen-opciones').style.display ='none';
    document.getElementById('tecnologias').style.display='block';
}


function agregarTecnologia(){
    if ((document.getElementById("texto").value) == ''){
        alert("Por favor, inserte un nombre");
    }else{
        listaTecnologia.push(document.getElementById("texto").value);
        limpiar();
        listaEnPantalla();
    }
}

function limpiar(){
    document.querySelector('#texto').value = '';
}

function listaEnPantalla(){
    let listHTML = document.getElementById("listaTecnologias");
    listHTML.innerHTML = "";
    for (let index = 0; index < listaTecnologia.length; index++) {
        listHTML.innerHTML += `<li>${listaTecnologia[index]}</li>`;
    }
}

let listaTecnologia = []; 