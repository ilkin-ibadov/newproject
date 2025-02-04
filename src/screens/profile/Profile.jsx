import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMMKVString } from 'react-native-mmkv'

const Profile = () => {
  const [token, setToken] = useMMKVString('token')

  return (
    <View>
      <TouchableOpacity onPress={() => {
        setToken('')
      }} className='bg-red-600 py-4'>
        <Text className='text-center text-white text-xl'>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})