import { Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Input from './components/Input'
import { useMMKVString} from 'react-native-mmkv';

const Login = () => {
    const [formData, setFormData] = useState({})
    const [token, setToken] = useMMKVString('token')

    const login = async () => {
        try {
            const response = await fetch("http://172.20.208.140:5001/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData)
            })

            console.log(response.status)

            if (response.ok) {
                const data = await response.json()

                setToken(data.token)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View className='h-full p-5 gap-4 justify-center'>
            <Text className='text-4xl text-black text-center mb-3'>Login</Text>

            <Input name="email" setFormData={setFormData} value={formData?.email} placeholder="Enter your email" />

            <Input name="password" setFormData={setFormData} value={formData?.password} placeholder="Enter your password" />

            <TouchableOpacity onPress={login} className='bg-blue-700 py-6'>
                <Text className='text-center text-white text-xl'>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login