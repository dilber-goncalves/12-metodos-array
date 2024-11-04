//findindex -> retorna o indice do elemento dentro de um array e retorna o valor caso encontre, caso contrario retorna -1

const pessoas = [
    { nome: "joao", idade: 20 },
    { nome: "maria", idade: 25 },
    { nome: "pedro", idade: 30 },
];

const pessoaEncontrada = pessoas.findIndex((pessoa) => {
    return pessoa.nome === 'joao';
}); 

console.log(pessoaEncontrada);
