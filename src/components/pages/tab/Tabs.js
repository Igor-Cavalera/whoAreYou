import { useState } from 'react';
import NomePrincipal from '../../form/NomePrincipal';
import Cpf from '../../form/Cpf';
import Nasc from '../../form/Nasc';
import Nacionalidade from '../../form/Nacionalidade';
import Email from '../../form/Email';
import Telefone from '../../form/Telefone';
import Genero from '../../form/Genero';
import Altura from '../../form/Altura';
import Peso from '../../form/Peso';
import Olhos from '../../form/Olhos';
import NomeM from '../../form/NomeM';
import NomeP from '../../form/NomeP'; 
import AreaTexto from '../../form/AreaTexto';
import BotaoSalvar from '../../form/BotaoSalvar';


function Tabs() {
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
                    <button className="aba-notas" onClick={() => {setIndex(2)}}>
                        Anotações
                    </button>
                    <button className="aba-empresas" onClick={() => {setIndex(3)}}>
                        Empresas
                    </button>
                </div>

                <form onSubmit={ handleSubmit }>
                <div className="tabContent" hidden={index != 0}>
                    <NomePrincipal onChange={ handleInputChange } value={formValues.name || ''}/>
                    <Cpf onChange={ handleInputChange } value={formValues.Cpf || ''}/>
                    <Nasc onChange= { handleInputChange } value={formValues.nasc || ''}/>
                    <Nacionalidade onChange={ handleInputChange }/>

                    <label className="contato">Contato </label>

                    <Email onChange={ handleInputChange }/>
                    <Telefone onChange={ handleInputChange }/>

                    <label className="descricao">Descrição </label>

                    <Genero onChange={ handleInputChange }/>
                    <Altura onChange={ handleInputChange }/>
                    <Peso onChange={ handleInputChange } />
                    <Olhos onChange={ handleInputChange }/>

                    <label className="familiares">Familiares</label>

                    <NomeM onChange={ handleInputChange } />        
                    <NomeP onChange={ handleInputChange } />
                </div>
                </form>
                <div className="tabContent" hidden={index != 1}>
                    BLABLABLA 2
                </div>
                <div className="tabContent" hidden={index != 2}>
                    <label className="anotacoes">Anotações </label>

                    <AreaTexto/>
                    <BotaoSalvar/>
                </div>
                <div className="tabContent" hidden={index != 3}>
                    BLABLABLA 4
                </div>
            </div>
        </>
    )
}

export default Tabs;