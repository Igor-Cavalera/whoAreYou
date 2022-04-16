import { useState } from 'react';
import TabContentDados from '../../form/tabContent/TabContentDados';
import TabContentEndereco from '../../form/tabContent/TabContentEndereco';
import TabContentEmpresas from '../../form/tabContent/TabContentEmpresas';
import TabContentNotas from '../../form/tabContent/TabContentNotas';


function Tabs () {
    const [index, setIndex] = useState(0);
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:name})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="aba">
                <div className="abas">
                    <button className="aba-dados" onClick={() => {setIndex(0)}}>
                        Dados Pessoais
                    </button>
                    <button className="aba-endereco" onClick={() => {setIndex(1)}}>
                        Endereço
                    </button>
                    <button className="aba-empresas" onClick={() => {setIndex(2)}}>
                        Empresas
                    </button>
                    <button className="aba-notas" onClick={() => {setIndex(3)}}>
                        Anotações
                    </button>
                </div>

                <form onSubmit={ handleSubmit }>
                <div className="tabContent-dados" hidden={index != 0}>
                    <TabContentDados onChange={ handleInputChange }/>
                </div>
                </form>
                <div className="tabContent-endereco" hidden={index != 1}>
                    <TabContentEndereco onChange= { handleInputChange }/>
                </div>
                <div className="tabContent-empresas" hidden={index != 2}>
                    <TabContentEmpresas onChange={ handleInputChange }/>   
                </div>
                <div className="tabContent-notas" hidden={index != 3}>
                    <TabContentNotas />
                </div>
            </div>
        </>
    )
}

export default Tabs;