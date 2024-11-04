// find -> busca um elemento dentro de um array e retorna o valor caso encontre, caso contrario retorna undefined

const pessoas = [
    { nome: "joao", idade: 20 },
    { nome: "maria", idade: 25 },
    { nome: "pedro", idade: 30 },
];

const pessoaEncontrada = pessoas.find((pessoa) => {
    return pessoa.nome === 'joao';
});

const pessoaEncontrada2 = pessoas.find((pessoa) => {
    return pessoa.nome === 'jose';
});

console.log(pessoaEncontrada);
console.log(pessoaEncontrada2);