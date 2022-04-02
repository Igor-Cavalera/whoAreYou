import {useState} from 'react';
import CpfMascara from './CpfMascara';

function Cpf () {
    const [cpf, setCpf] = useState('');
    return (
    <>
        <CpfMascara 
            value={cpf} 
            onChange={(event) => setCpf(event.target.value)}/>
    </>
    )
}

export default Cpf;