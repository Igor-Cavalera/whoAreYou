function Genero () {
    return  (
        <>
            <input 
                type="text" 
                className="genero" 
                placeholder="Gênero" 
                maxLength={15} 
                list="generos" 
            />
            <datalist id="generos">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Não-Binário">Não-Binário</option>
            </datalist>
        </>
    )

}

export default Genero;