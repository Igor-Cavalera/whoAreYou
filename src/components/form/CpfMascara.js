import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g,'') 

const CpfMascara = ({value, onChange}) => {
    function handleChange(event) {
        onChange({...event, 
        target: {
            ...event.target,
            value: onlyNumbers(event.target.value)
            }
        })
    }

    return (
        <>
            <InputMask 
                mask="999.999.999-99" 
                maskChar=""
                className="cpf" 
                placeholder="CPF" 
                value={value} 
                onChange={onChange} />
        </>
    )
}

export default CpfMascara;