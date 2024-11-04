//join -> une um array em uma string

function reverseString(palava: string) {
    const arrayPalavras = palava.split("");
    arrayPalavras.reverse();
    console.log(arrayPalavras.join(""));
}

reverseString('Oláa pessoas desse mundo doidão!');