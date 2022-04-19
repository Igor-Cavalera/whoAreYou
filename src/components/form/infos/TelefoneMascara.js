import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g,'');

const TelefoneMascara = ({value,onChange}) => {
    function handleChange(event) {
        onChange({
            ...event,
            target:{
            ...event.target,
            value: onlyNumbers(event.target.value)
            }    
        })
        
    }

    //Ajustar máscara
    //"+999 (99) 99999-9999"
    
    return (
        <>
            <InputMask 
                mask="+999 (99) 99999-9999" 
                className="telefone" 
                placeholder="Telefone" 
                value={value} 
                onChange={onChange} 
            />
        </>
    )
}

export default TelefoneMascara;