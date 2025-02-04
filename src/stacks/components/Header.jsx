import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ChevronLeft from "../../../assets/icons/chevronLeft.svg"

const Header = () => {
    const navigation = useNavigation()
    const routes = navigation.getState().routes
    const routeName = routes[routes.length - 1].name

    if (navigation.canGoBack()) {
        return (
            <View className='items-center py-3'>
                <TouchableOpacity hitSlop={10} onPress={() => {
                    navigation.goBack()
                }} className='absolute left-3 top-3'>
                    <ChevronLeft/>
                </TouchableOpacity>

                <Text className='text-2xl font-medium text-black'>{routeName}</Text>
            </View>
        )
    }
}

export default Header