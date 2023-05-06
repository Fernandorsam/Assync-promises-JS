 
// const stateOrder = new Promise((resolve,reject) =>{return resolve}
const promessa = 'requisitado';
 async function start(){

    try { 
        const result = await promessa;
        console.log(result);
         
    } catch (error) {
        console.log(error,'erro na requisiçao');
    }
    finally{
        console.log('rodar sempre')
    }
 }

 start();