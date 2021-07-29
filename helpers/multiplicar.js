
const colors=require('colors');
const fs=require('fs');
const crearArchivo=async(base=5,listar=false,hasta=10)=>{
    try {
        if(listar){
            console.log('======================='.green);
            console.log(`      Tabla del:`.green,colors.blue(base));
            console.log('======================='.green);
        }
        let salida,consola='';
        for(let i=1;i<=hasta;i++){
            salida+=`${base} ${'x'.green} ${i} ${'='.red} ${base*i}\n`;
            consola+=`${base} x ${i} = ${base*i}\n`;
            
        }
        if(listar){
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,consola);
    
        return(`tabla-${base}.txt`);
        
    } catch (error) {
        throw error;
    }


    
};

module.exports={
    crearArchivo
};
