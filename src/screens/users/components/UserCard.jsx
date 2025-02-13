import { Text, TouchableOpacity, Platform, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const UserCard = ({ user }) => {
    const navigation = useNavigation()
    const os = Platform.OS
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    const scale = Dimensions.get('window').fontScale
    const font16 = Math.floor(16 / scale)
    const font20 = Math.floor(20 / scale)


    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("UserDetails", { user: user })
        }} className={`p-4 border-[1px] border-zinc-300 rounded-md bg-white shadow ${os === 'ios' ? "shadow-zinc-300" : "shadow-zinc-700"}`}>
            <Text style={{ fontSize: font20 }} className={`font-montserratSemiBold`}>{user.name}</Text>
            <Text style={{ fontSize: font20 }} className='font-montserrat'>{user.email}</Text>
            <Text style={{ fontSize: font16 }} className='text-[16px] font-montserratLightItalic'>{user.phone}</Text>
        </TouchableOpacity>
    )
}

export default UserCard