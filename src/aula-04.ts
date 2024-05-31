interface Pessoas {
    idade: number;
    nome: string;
}

interface Usuarios {
    pessoas: Pessoas[]; // Mais indicado para arrays
    //pessoas: Array<Pessoas>;  // Menos indicado para arrays
    //pessoas: Pessoas;
    cidade: string;
}

const usuario: Usuarios = {
    cidade: 'Itaúna',
    pessoas: [
        {
            idade: 42,
            nome: 'isac'
        },
        {
            idade: 51,
            nome: 'simone'
        }
    ]
}

console.log(usuario.pessoas.length);
console.log(usuario);
