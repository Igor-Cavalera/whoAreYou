import NomePrincipal from "../NomePrincipal";
import Cpf from "../Cpf";
import Nasc from "../Nasc";
import Nacionalidade from "../Nacionalidade";
import Email from "../Email";
import Telefone from "../Telefone";
import Genero from "../Genero";
import Altura from "../Altura";
import Peso from "../Peso";
import Olhos from "../Olhos";
import NomeM from "../NomeM";
import NomeP from "../NomeP";

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