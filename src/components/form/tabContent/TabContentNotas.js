import AreaTexto from "../infos/AreaTexto";
import BotaoSalvar from "../infos/BotaoSalvar";

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