interface Estado {
    nome: string;
}

interface Cidade {
    nome: string;
    estado: Estado;
}

interface Endereco {
    rua: string;
    bairro: string;
    cidade: Cidade;
    complemento?: string;
}

const endereco: Endereco = {
    bairro: 'x',
    rua: 'a',
    complemento: 'e',
    cidade: {
        nome: 'd',
        estado: {
            nome: 'm'
        }
    }
}

console.log(endereco);
