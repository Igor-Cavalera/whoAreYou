import {useState} from 'react';
import AlturaMascara from './AlturaMascara';

function Altura () {
    const [altura, SetAltura ] = useState('');
    return (
        <>
            <AlturaMascara 
                value={altura} 
                onChange={(event) => SetAltura(event.target.value)}/>
        </>
    )
}

export default Altura;