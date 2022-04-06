import {useState} from 'react';
import PesoMascara from './PesoMascara';

function Peso () {
    const [peso, setPeso] = useState('');
    return (
        <PesoMascara 
            value={peso} 
            onChange={(event) => setPeso(event.target.value)}
        />
    )
}

export default Peso;