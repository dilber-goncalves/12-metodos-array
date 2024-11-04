//slice -> retorna uma copia de um array contendo apenas a parte do array com os indices informados. Cria um novo array!

const arrayPaises = ["Brasil", "Estados Unidos", "Espanha", "Italia", "Portugal"];
const novoArrayPaises = arrayPaises.slice(0, 3);
console.log(novoArrayPaises);

const novoArrayPaises2 = arrayPaises.slice(-2); //pega os ultimos 2 elementos do array
console.log(novoArrayPaises2);