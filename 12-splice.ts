//splice -> remove e/ou adiciona elementos em um array

const arrayPaises = ["Brasil", "Estados Unidos", "Espanha", "Italia", "Portugal"];
arrayPaises.splice(0, 2);//partindo do indice 0, remove 2 elementos
console.log(arrayPaises);
arrayPaises.splice(0, 2, "Chile", "Argentina");//partindo do indice 0 remove 2 elementos, depois adiciona os elementos - Primeiro valor é o indice e o segundo o elemento
console.log(arrayPaises);