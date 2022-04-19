import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g,'');

const AlturaMascara = ({value, onChange}) => {
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
            mask="9,99 m" 
            maskChar=""
            className="altura" 
            placeholder="Altura" 
            value={value} 
            onChange={onChange}
        />
    </>)
}

export default AlturaMascara;