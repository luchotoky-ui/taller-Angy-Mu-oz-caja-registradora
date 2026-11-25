const prompt = require('prompt-sync')();

let precioproducto;
let total=0;
let cancelar;
do{
    precioproducto = Number(prompt('Ingrese el precio del producto: '));
    if (precioproducto == 0) {
        console.log("el valor no puede ser igual a --0--");
    }   
    else if(precioproducto != 0);
        total += precioproducto;
        cancelar = Number(prompt("[0] agregar otro producto / otro para finalizar: "));   
} while(cancelar == 0);{
    console.log(total)
}


