import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const CepMascara = ({value, onChange}) => {
    function handleChange (event) {
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
                mask="99999-999" 
                maskChar="" 
                className="cep" 
                placeholder="CEP" 
                value={value} 
                onChange={onChange}
            />
        </>
    )
}



export default CepMascara;