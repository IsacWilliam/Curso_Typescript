const funcaoCallBack = (valor: number):void => {
    console.log("Deu bom ", valor);
}

const funcaoTest = (valor1: number, valor2: number, callback: (n: number) => void): string => {
    if(valor1 > valor2) {
        callback(valor1);
    }
    return "";
}

funcaoTest(263, 32, funcaoCallBack);
funcaoTest(263, 32, (x: number) => {console.log("Outra função anônima", x)}); // Função de Callback anônima
