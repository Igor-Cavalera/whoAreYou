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
import Logradouro from '../../form/Logradouro';
import Bairro from '../../form/Bairro';
import Cidade from '../../form/Cidade';
import EstadoUf from '../../form/EstadoUf';
import Cep from '../../form/Cep';
import NumeroEnd from '../../form/NumeroEnd';
import RazaoSocial from '../../form/RazaoSocial';
import NomeFantasia from '../../form/NomeFantasia';
import Cnpj from '../../form/Cnpj';


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
                <div className="tabContent-endereco" hidden={index != 1}>
                    <Logradouro onChange={ handleInputChange }/>
                    <NumeroEnd onChange={ handleInputChange }/>
                    <Bairro onChange={ handleInputChange }/>
                    <EstadoUf onChange={ handleInputChange }/>
                    <Cidade onChange={ handleInputChange }/>
                    <Cep onChange={ handleInputChange }/>
                </div>
                <div className="tabContent-empresas" hidden={index != 2}>
                    <NomeFantasia onChange={ handleInputChange }/>   
                    <RazaoSocial onChange={ handleInputChange }/>
                    <Cnpj onChange={ handleInputChange }/>      
                </div>
                <div className="tabContent-notas" hidden={index != 3}>
                    <label className="anotacoes">Anotações </label>
                    <AreaTexto/>
                    <BotaoSalvar/>
                </div>
            </div>
        </>
    )
}

export default Tabs;