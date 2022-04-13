import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g,'');

const CnpjMascara = ({value, onChange}) => {
    function handleChange (event) {
        onChange({...event,
        target: {
            ...event.target,
            value: onlyNumbers(event.target.value)
        }})
        
    }
    return (
        <>
            <InputMask 
                mask="99.999.999/9999-99" 
                maskChar="" 
                className="cnpj" 
                placeholder="CNPJ" 
                value={value} 
                onChange={onChange}
            />
        </>
    )
}

export default CnpjMascara;