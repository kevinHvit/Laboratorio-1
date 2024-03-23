function contarLetras(texto) {
    
    texto = texto.toLowerCase();
    
    let contadorLetras = {};
    
    for (let i of texto) {
        
        if (i) {
            contadorLetras[i] = (contadorLetras[i] || 0) + 1;
        }
    }


    return contadorLetras;
}


let texto = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

let resultado = contarLetras(texto);
console.log(resultado);
