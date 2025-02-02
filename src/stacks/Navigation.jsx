import { NavigationContainer } from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const authenticated = true

  return (
    <NavigationContainer>
      {authenticated ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Navigation