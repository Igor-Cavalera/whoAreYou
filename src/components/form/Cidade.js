import {useEffect, useState} from "react"
import axios from "axios";
import EstadoUf from "./EstadoUf";

function Cidade () {

    <EstadoUf/>
    const [cities, setCities] = useState([]);
    const [selectedUf, setSelectedUf] = useState("0");

    useEffect(() => {
        axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => {
            setCities(response.data)
        })
    },[selectedUf])

    function handleSelectedUf (event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value
        setSelectedUf(uf)
    }

    return (
        <>
            <select 
                name="cidade" 
                id="cidade" 
                className="cidade"
                onChange={ handleSelectedUf }
            >
                <option value="0">Cidade</option>
                {cities.map(city => {
                    <option key={city.id} value={city.nome}>
                        {city.nome}
                    </option>
                })}
            </select>
        </>
    )
}

export default Cidade;