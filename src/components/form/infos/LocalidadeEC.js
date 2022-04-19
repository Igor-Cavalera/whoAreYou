import { useEffect, useState } from "react";
import axios from "axios";

function LocalidadeEC () {

    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedUf, setSelectedUf] = useState("0");
    const [selectedCity, setSelectedCity] = useState("0");

    useEffect(() => {
        axios
        .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
        .then(response => {
            setUfs(response.data)
        })
    },[])

    useEffect(() => {
        axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => {
            setCities(response.data)
        })
    },[selectedUf])
    
    function handleSelectedUf (event) {
        const uf = event.target.value
        setSelectedUf(uf)
    }

    
    function handleSelectCity (event) {
        const city = event.target.value;
        setSelectedCity(city);
    }

    return (
        <>
            <select 
                name="uf" 
                id="uf" 
                className="estadoUf"
                onChange={ handleSelectedUf }
            >
                <option value="0">UF</option>
                {ufs.map(uf => (
                    <option key={uf.id} value={uf.id}>
                        {uf.sigla}
                    </option>
                ))}
            </select>

            <select 
                name="cidade" 
                id="cidade" 
                className="cidade"
                value={selectedCity}
                onChange={ handleSelectCity }
            >
                <option value="0">Cidade</option>
                {cities.map((city) => (
                    <option key={city.id} value={city.nome}>
                        {city.nome}
                    </option>
                ))}
            </select>
        </>
    )
}

export default LocalidadeEC;