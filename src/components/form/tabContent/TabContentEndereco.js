import Logradouro from "../Logradouro";
import NumeroEnd from "../NumeroEnd";
import Bairro from "../Bairro";
import EstadoUf from "../EstadoUf";
import Cidade from "../Cidade";
import Cep from "../Cep";

function TabContentEndereco () {
    return (
        <>
            <Logradouro />
            <NumeroEnd />
            <Bairro />
            <EstadoUf />
            <Cidade />
            <Cep />
        
        </>
    )
}

export default TabContentEndereco;