import { useState } from 'react';
import TelefoneMascara from './TelefoneMascara';

function Telefone () {
    const [ telefone, setTelefone ] = useState('');
    return (
        <>
            <TelefoneMascara 
                value={telefone} 
                onChange={(event) => setTelefone(event.target.value)}
            />
        </>
    )
}

export default Telefone;