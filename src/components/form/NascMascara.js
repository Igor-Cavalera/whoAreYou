import InputMask from 'react-input-mask';

const NascMascara = ({value, onChange}) =>  {
    return (
    <>
        <InputMask mask="99/99/9999" className="nascimento" placeholder="Data de Nascimento" value={value} onChange={onChange}/>
    </>
    )
}

export default NascMascara;