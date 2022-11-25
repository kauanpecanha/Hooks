import React from 'react'

function Dia2(){
    return(
        <div className="Dia2">
            <div className="D2_square">
                <div className="D2_title">
                    <h2>Cadastro</h2>
                </div>
                <div className="D2_inputs">
                    <input placeholder='Nome'></input>
                    <input placeholder='Senha'></input>
                    <input placeholder='Confirmar Senha'></input>
                    <button>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Dia2;