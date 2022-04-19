import Logradouro from "../Logradouro";
import NumeroEnd from "../NumeroEnd";
import Bairro from "../Bairro";
import LocalidadeEC from "../LocalidadeEC";
import Cep from "../Cep";

function TabContentEndereco () {
    return (
        <>
            <Logradouro />
            <NumeroEnd />
            <Bairro />
            <LocalidadeEC/>
            <Cep />
        
        </>
    )
}

export default TabContentEndereco;