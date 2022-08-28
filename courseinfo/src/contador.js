const Contador = ({contador, setContador}) => {

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => {
                setContador(contadorActual => {
                    return contadorActual+1
                })
            }}>Incrementar contador</button>
            <button onClick={() => {
                setContador(0)
            }}> Resetear </button>
        </div>  
    );

}

export default Contador