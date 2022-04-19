import { useState } from 'react'; 
import NascMascara from "./NascMascara";

function Nasc () {
    const [cpf, setCpf] = useState('');
    return (
        <NascMascara 
            value={cpf} 
            onChange={(event) => setCpf(event.target.value)}
        />
    )
}

export default Nasc;