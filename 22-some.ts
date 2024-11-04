//some -> testa se pelo menos um elemento do array atende a condicao e retorna true ou false

const arrayNumeros = [12, 1, 45, 76, 100];

const resultadoNumeros = arrayNumeros.some((item)=> {
    return item %2 === 0;
});

console.log(resultadoNumeros);
