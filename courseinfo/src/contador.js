import { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)  //Devuelve un arreglo con posición 1 el valor y posición 2 un método para actualizar el valor

    const handleClickIncrementar = () => { 
        setContador(contador + 1)
    }
    
    const handleClickDecrementar = () => { 
        setContador(contador - 1)
    }
    
    const handleClickReset = () => { 
        setContador(0)
    }

    const isEven = contador % 2 === 0
    const isNegative = contador < 0
    const isZero = contador === 0

    let mensajeContador = ''
    if(isNegative){
        mensajeContador = 'Soy un número negativo'
    }else{
        if(isEven){
            if(isZero){
                mensajeContador = 'Soy un 0'
            }else{
                mensajeContador = 'Soy un número par'
            }
        }else{
            mensajeContador = 'Soy un número impar'
        }
    }

    return (
        <>
            <h2>Contador: {contador}</h2>
            <p>{mensajeContador}</p>
            <button onClick={handleClickDecrementar}> Decerementar contador </button>
            <button onClick={handleClickReset}> Resetear </button>
            <button onClick={handleClickIncrementar}>Incrementar contador</button>
        </>  
    );

}

export default Contador