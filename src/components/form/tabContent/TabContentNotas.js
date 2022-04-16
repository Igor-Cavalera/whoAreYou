import AreaTexto from "../AreaTexto";
import BotaoSalvar from "../BotaoSalvar";

function TabContentNotas () {
    return (
        <>
            <label className="anotacoes">Anotações </label>
            <AreaTexto/>
            <BotaoSalvar/>
        </>
    )
}

export default TabContentNotas;