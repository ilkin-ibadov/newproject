import { TextInput } from 'react-native'

const Input = ({ name, placeholder, value, setFormData }) => {
    return (
        <TextInput secureTextEntry={name === "password" || name === "repeat_password" ? true : false} defaultValue={value} onChangeText={(text) => {
            setFormData(prevState => ({ ...prevState, [name]: name === "email" ? text.toLowerCase() : text }))
        }} placeholder={placeholder} className='border-[1px] border-black pl-4' />
    )
}

export default Input