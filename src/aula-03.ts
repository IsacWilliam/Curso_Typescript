interface Pessoa {
    idade: number;
    nome: string;
    isMaiorIdade: boolean;
}

const pessoa: Pessoa = {
    idade: 42,
    nome: 'Isac',
    isMaiorIdade: true,
}

console.log(pessoa);
