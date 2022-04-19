import NomePrincipal from "../infos/NomePrincipal";
import Cpf from "../infos/Cpf";
import Nasc from "../infos/Nasc";
import Nacionalidade from "../infos/Nacionalidade";
import Email from "../infos/Email";
import Telefone from "../infos/Telefone";
import Genero from "../infos/Genero";
import Altura from "../infos/Altura";
import Peso from "../infos/Peso";
import NomeM from "../infos/NomeM";
import Olhos from "../infos/Olhos";
import NomeP from "../infos/NomeP";

function TabContentDados () {
    return (
        <>
            <NomePrincipal />
            <Cpf />
            <Nasc />
            <Nacionalidade />

            <label className="contato">Contato </label>

            <Email />
            <Telefone />

            <label className="descricao">Descrição </label>

            <Genero />
            <Altura />
            <Peso  />
            <Olhos />

            <label className="familiares">Familiares</label>

            <NomeM  />        
            <NomeP  />
        </>
    )
}

export default TabContentDados;