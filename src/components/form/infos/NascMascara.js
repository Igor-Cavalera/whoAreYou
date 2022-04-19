import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const NascMascara = ({value, onChange}) =>  {
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
                mask="99/99/9999" 
                maskChar=""
                className="nascimento" 
                placeholder="Data de Nascimento" 
                value={value} 
                onChange={onChange} />
        </>
    )
}

export default NascMascara;