//faça uma função que recebe parametros do tipo string e imprime na tela essa string em ordem reversa utilizando reverse()

function reverseString(palava: string) {
    const arrayPalavras = palava.split("");
    arrayPalavras.reverse();
    console.log(arrayPalavras.join(""));
}

reverseString('Oláa pessoas desse mundo doidão!');