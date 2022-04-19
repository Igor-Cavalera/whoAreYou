import Logradouro from "../infos/Logradouro";
import NumeroEnd from "../infos/NumeroEnd";
import Bairro from "../infos/Bairro";
import LocalidadeEC from "../infos/LocalidadeEC";
import Cep from "../infos/Cep";

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