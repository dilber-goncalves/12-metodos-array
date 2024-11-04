//map -> percorre todos os elementos de um array e retorna um novo array com os elementos modificados

const pessoas = [
    {nome: 'joao', sobrenome: 'silva', idade: 20},
    {nome: 'maria', sobrenome: 'souza', idade: 25},
    {nome: 'pedro', sobrenome: 'pereira', idade: 30},
    {nome: 'ana', sobrenome: 'santos', idade: 35}
];

const nomes = pessoas.map((pessoa) => {
    return {
        nomeCompleto: `${pessoa.nome} ${pessoa.sobrenome}`,
        idade: pessoa.idade
    }
});

console.log(nomes);