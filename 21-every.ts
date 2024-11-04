//every -> testa se todos os elementos do array sao verdadeiros

const arrayNumeros = [12, 1, 45, 76, 99];

function teste(item: number) {
    return item < 100;
}

const resultado = arrayNumeros.every(teste);
console.log(resultado);