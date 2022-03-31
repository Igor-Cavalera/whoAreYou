import InputMask from 'react-input-mask';

const CpfMascara = ({value, onChange}) => {
    return <InputMask mask="999.999.999-99" className="cpf" placeholder="CPF" value={value} onChange={onChange}/>
}

export default CpfMascara;