interface Objeto {
    funcao: (param1: number, param2?: number) => number;
}

const funcaoTeste = (param1: number, param2?: number): number => {
    if(!param2){
        return param1;
    }

    return param1 + param2;
}

const teste: Objeto = {
    funcao: funcaoTeste
}

console.log(teste.funcao(1)); // Retorna 1º parâmetro
console.log(teste.funcao(1, 35)); // Retorna soma dos parâmetros
