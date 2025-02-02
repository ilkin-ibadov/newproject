import { Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const UserDetails = () => {
  const route = useRoute()
  const { user } = route.params

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.address.city} {user.address.street}</Text>
    </View>
  )
}

export default UserDetails