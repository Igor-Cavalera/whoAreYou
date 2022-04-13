import {useState} from 'react';
import CnpjMascara from './CnpjMascara';

function Cnpj () {
    const [cnpj, setCnpj] = useState('');
    return (
        <>
            <CnpjMascara 
                value={cnpj} 
                onChange={(event) => setCnpj(event.target.value)}
            />
        </>
    )
}

export default Cnpj;