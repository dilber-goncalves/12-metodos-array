//filter -> filtra e retorna um novo array com os elementos que atendem a condicao

const nomes = ["joao", "maria", "pedro", "ana"];

const nomesFiltrados = nomes.filter((nome) => {
    return nome.length <= 4;
});

console.log(nomesFiltrados);