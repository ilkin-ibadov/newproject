import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
    const routes = navigation.getState().routes
    const routeName = routes[routes.length - 1].name

    const txt = "<"

    if (navigation.canGoBack()) {
        return (
            <View className='items-center py-3'>
                <TouchableOpacity hitSlop={10} onPress={() => {
                    navigation.goBack()
                }} className='absolute left-3 top-3'>
                    <Text className='text-2xl'>{txt}</Text>
                </TouchableOpacity>

                <Text className='text-2xl font-medium text-black'>{routeName}</Text>
            </View>
        )
    }
}

export default Header