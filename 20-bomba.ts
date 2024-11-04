//bomba

let contador = 5;

function bomba() {
    console.log(contador);
    contador--;

    if (contador === 0) {
        console.log(contador);
        console.log('BOOOMMM');
        clearInterval(id);
    }
}

const id = setInterval(bomba, 1000);