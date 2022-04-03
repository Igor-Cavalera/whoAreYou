import { useState } from 'react';
import Nomeprincipal from '../form/NomePrincipal';
import Cpf from '../form/Cpf';
import Nasc from '../form/Nasc';
import Genero from '../form/Genero';
import Altura from '../form/Altura';
import Peso from '../form/Peso';
import NomeM from '../form/NomeM';
import NomeP from '../form/NomeP';
import AreaTexto from '../form/AreaTexto';
import BotaoSalvar from '../form/BotaoSalvar';
import Olhos from '../form/Olhos';
import Abas from './Abas';
import Nacionalidade from '../form/Nacionalidade';

function Formulario() {

    // Tentar passar os valores das Máscaras
    // Valores entre componentes....
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value})
    }
        
        const handleSubmit = (e) => {
        e.preventDefault();
        /*
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log('*** handleSubmit', data);
        */
    }
        return (
        <form onSubmit={ handleSubmit }>
            <Abas/>
            <Nomeprincipal onChange={ handleInputChange } value={formValues.name || ''}/>
            <Cpf onChange={ handleInputChange } value={formValues.Cpf || ''}/>
            <Nasc onChange= { handleInputChange } value={formValues.nasc || ''}/>
            <Nacionalidade onChange={ handleInputChange }/>

            <label className="descricao">Descrição </label>

            <Genero onChange={ handleInputChange }/>
            <Altura onChange={ handleInputChange }/>
            <Peso onChange={ handleInputChange } />
            <Olhos onChange={ handleInputChange }/>

            <label className="familiares">Familiares</label>

            <NomeM onChange={ handleInputChange } />
            <NomeP onChange={ handleInputChange } />

            <label className="anotacoes">Anotações </label>

            <AreaTexto/>
            <BotaoSalvar/>
    
        </form>
        );
    
}

export default Formulario