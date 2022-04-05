import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g,''); 

const PesoMascara = ({value, onChange}) => {
    function handleChange(event) {
        onChange({...event,
        target: {
            ...event.target,
            value: onlyNumbers(event.target.value)
            }
        })
    }


    // Configurar mask="999.99 kg" 
    return (
        <>
            <InputMask 
                mask="999.99 Kg" 
                className="peso" 
                placeholder="Peso" 
                value={value} 
                onChange={onChange}/>        
        </>
    )
}

export default PesoMascara;