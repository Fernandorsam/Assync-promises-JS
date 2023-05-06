let acept = true;

console.log('Pedir uber');
const stateOrder = new Promise((resolve,reject) =>{
    if(acept){
        return resolve('Pedido aceito');

    }
    return reject('Pedido Negado!!');

});
console.log('Aguardando...');

stateOrder
.then((result) => {
    console.log(result);
 
}).catch((err) => {
   console.log(err);
    
}).finally(()=> console.log('Finalizado'))