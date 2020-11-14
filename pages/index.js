import { useState } from 'react'

function Contador(){
    const [contador, setContador] = useState(1)
    
    function adicionarContador(){
        setContador(contador + 1)
    }

    function resetContador(){
        setContador(1)
    }

    function somarContador(){
        var num2 = parseFloat(somar.value)
        setContador(contador + num2)

    }

    function subtrairContador(){
        var num2 = parseFloat(somar.value)
        setContador(contador - num2)

    }

    function multiplicarContador(){
        var num2 = parseFloat(somar.value)
        setContador(contador * num2)

    }

    function dividirContador(){
        var num2 = parseFloat(somar.value)
        setContador(contador / num2)

    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            <button onClick={resetContador}>Resetar</button>
            <input id="somar" placeholder="Somar"></input>
            <button onClick={somarContador}>Somar</button>
            <button onClick={subtrairContador}>Subtrair</button>
            <button onClick={multiplicarContador}>Multiplicar</button>
            <button onClick={dividirContador}>Dividir</button>
        </div>
    )
}

function Home(){
    return <Contador />
}
export default Home