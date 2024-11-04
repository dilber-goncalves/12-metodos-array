const professores = [
    {nome: 'Guido', stack: 'backend'},
    {nome: 'Joaquim', stack: 'frontend'},
    {nome: 'Jorge', stack: 'frontend'},
    {nome: 'Ricardo', stack: 'backend'},
    {nome: 'Jose', stack: 'backend'},
    {nome: 'Maria', stack: 'frontend'},
    {nome: 'Jorge', stack: 'backend'},
];

//filtrar todos os backends

const backends = professores.filter((professor) => {
    return professor.stack === 'backend';
});

console.log(backends);