import { Select } from "./Styles";

const OptionList = (props) => {
    
    const handleChange = (e) => {
        props.updateValue(e.target.value);
    }

    return (
        <Select 
            id = {props.id} 
            value = {props.value}
            onChange={ handleChange } 
        >
            <option value = "" disabled defaultValue= "" hidden> </option>
            {
                props.brands && props.brands.map((marca, index) => <option key={index} value={marca}> {marca} </option>)
            }
        </Select>
    )
}

export default OptionList;