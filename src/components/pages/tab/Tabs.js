import { useState } from 'react';

function Tabs() {
    const [index, setIndex] = useState(0);
    return (
        <div className="aba">
            <div className="abas">
                <button className="aba-dados" onClick={() => {setIndex(0)}}>
                    Dados Pessoais
                </button>
                <button className="aba-endereco" onClick={() => {setIndex(1)}}>
                    Endereço
                </button>
                <button className="aba-notas" onClick={() => {setIndex(2)}}>
                    Anotações
                </button>
                <button className="aba-empresas" onClick={() => {setIndex(3)}}>
                    Empresas
                </button>
            </div>

            <div className="tabContent" hidden={index != 0}>
                BLABLABLA 1
            </div>
            <div className="tabContent" hidden={index != 1}>
                BLABLABLA 2
            </div>
            <div className="tabContent" hidden={index != 2}>
                BLABLABLA 3
            </div>
            <div className="tabContent" hidden={index != 3}>
                BLABLABLA 4
            </div>
        </div>
    )
}

export default Tabs;