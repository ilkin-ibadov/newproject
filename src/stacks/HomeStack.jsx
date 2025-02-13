import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from '../screens/users/Users';
import Todos from '../screens/todos/Todos';
import Header from './components/Header';
import UserDetails from '../screens/users/UserDetails';
import Gallery from '../screens/gallery/Gallery';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => <Header /> }}>
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
            <Stack.Screen name="Todos" component={Todos} />
            <Stack.Screen name="Gallery" component={Gallery} />
        </Stack.Navigator>
    )
}

export default HomeStack