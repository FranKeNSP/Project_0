import React, { component } from 'react';
import { useState } from 'react';

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
        <div style={{backgroundColor: "#14A"}}>
            <div style={{color: "#FFF", padding: "20px"}} >{contador}</div>
            <button style={buttonStyles} onClick={adicionarContador}>Adicionar</button>
            <button style={buttonStyles} onClick={resetContador}>Resetar</button>
            <input style={inputStyles} id="somar" placeholder="Insira um numero"></input>
            <button style={buttonStyles} onClick={somarContador}>Somar</button>
            <button style={buttonStyles} onClick={subtrairContador}>Subtrair</button>
            <button style={buttonStyles} onClick={multiplicarContador}>Multiplicar</button>
            <button style={buttonStyles} onClick={dividirContador}>Dividir</button>
            
        </div>
    )
}

function Resultado(){
    const [resultado, setResultado] = useState(0)
    // const [resultadoFinal, setResultadoFinal] = useState()
    

    function somarResultado(){
        setResultado(parseFloat(num0.value) + parseFloat(num1.value))
        num0.value = resultado
        
    }
    function subtrairResultado(){
        setResultado(parseFloat(num0.value) - parseFloat(num1.value))
    }
    function multiplicarResultado(){
        setResultado(parseFloat(num0.value) * parseFloat(num1.value))
    }
    function dividirResultado(){
        setResultado(parseFloat(num0.value) / parseFloat(num1.value))
    }
    function resetCalculadora(){
        setResultado(0)
        // setResultadoFinal(0)
        num0.value = ""
        num1.value = ''
    }
    function resetInput(){
        num0.value = ''
        num1.value = ''
    }
    function saveInput(){
        num0.value = resultado
    }

    //Tela
    return(
        <div style={{backgroundColor: "#111"}}>
            <div style={resultadoStyles}>{resultado}</div>
            {/* <div style={resultadoStyles}>{resultadoFinal}</div> */}
            <input style={inputStyles} id="num0" placeholder="Insira um numero" maxLength={2} ></input>
            <input style={inputStyles} id="num1" placeholder="Insira um numero"></input>
            <button style={buttonStyles} onClick={resetInput}>CE</button>
            <button style={cButtonStyles} onClick={resetCalculadora}>C</button>
            <button style={buttonStyles} onClick={saveInput}>Guardar resultado anterior</button>
            <br></br>
            <button style={buttonStyles} onClick={somarResultado}>Somar</button>
            <button style={buttonStyles} onClick={subtrairResultado}>Subtrair</button>
            <button style={buttonStyles} onClick={multiplicarResultado}>Multiplicar</button>
            <button style={buttonStyles} onClick={dividirResultado}>Dividir</button>
            <br></br>
            {/* <button style={buttonStyles} onClick={calcularResultado}>Calcular</button> */}
        </div>
    )
}
function Home(){
    return <Contador /> && <Resultado />             
}
export default Home

//Styles
const buttonStyles = {
    height: 50,
    backgroundColor: "#121212",

    margin: "20px 20px",

    color: "#fff",

    // border: "none",
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#888",

    cursor: "pointer"
}

const cButtonStyles ={
    height: 50,
    width: 30,
    backgroundColor: "#121212",

    marginBottom: 20,

    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#888",
    
    color: "#fff",

    cursor: "pointer"    
}

const inputStyles = {
    height: 50,
    marginLeft: 20,
    backgroundColor: "#121212",
    color: "#fff",
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#888",
    paddingLeft: "10px"
}

const resultadoStyles = {
    padding: "10px 0px",
    margin: "0px 20px",

    color: "#fff",

    fontSize: "24px",
    fontFamily: "Arial",
}