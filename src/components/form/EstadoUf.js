import { useEffect, useState } from 'react'
import axios from 'axios';

function EstadoUf () {
    const [ufs, setUfs] = useState([]);

    useEffect(() => {
        axios
        .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
        .then(response => {
            setUfs(response.data)
        })
    },[])

    return (
        <>
            <select name="uf" id="uf" className="estadoUf">
                <option value="0">UF</option>
                {ufs.map(uf => (
                    <option key={uf.id} value={uf.id}>
                        {uf.nome}
                    </option>
                ))}
            </select>
        </>
    )
}

export default EstadoUf;