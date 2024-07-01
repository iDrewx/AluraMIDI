function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
    playSound (idAudio);
    };

    tecla.onkeydown = function(evento){
        console.log(evento.code == 'Space')
        if (evento.code == 'Space'){
            tecla.classList.add('activa');  
        }
    };
    tecla.onkeyup = function(){
        tecla.classList.remove('activa')
    };
};