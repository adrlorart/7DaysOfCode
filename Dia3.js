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



let listLengFront = []; 