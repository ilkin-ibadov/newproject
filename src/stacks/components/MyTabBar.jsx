import { View, Platform, Pressable, Text } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import Home from "../../../assets/icons/home.svg";
import HomeActive from "../../../assets/icons/homeActive.svg";
import Profile from "../../../assets/icons/profile.svg";
import ProfileActive from "../../../assets/icons/profileActive.svg";


function MyTabBar({ state, descriptors, navigation }) {
  const os = Platform.OS;
  const { buildHref } = useLinkBuilder();

  return (
    <View className="pt-2" style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        console.log(route.name)

        let icon;
        const isFocused = state.index === index;

        if (route.name === 'HomeTab') {
          icon = isFocused ? <HomeActive/> : <Home />;
        } else {
          icon = isFocused ? (
            <ProfileActive />
          ) : (
            <Profile />
          );
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            className='items-center'
          >

            {icon}

            <Text className={`text-center ${isFocused ? 'text-[#45b51c]' : 'text-black'}`}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default MyTabBar