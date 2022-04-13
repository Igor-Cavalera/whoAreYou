import {useState} from 'react';
import CepMascara from './CepMascara';

function Cep () {
    const [cep, setCep] = useState('');
    return (
        <>
            <CepMascara 
                value={cep} 
                onChange={(event) => setCep(event.target.value)}/>
        </>
    )
}

export default Cep;