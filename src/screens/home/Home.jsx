import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {IP_URL} from "@env"

const Home = () => {
    const [movies, setMovies] = useState([])
    const [shows, setShows] = useState([])
    const navigation = useNavigation()

    const getMovies = async () => {
        try {
            const response = await fetch(`${IP_URL}/movie/trending`)
            const data = await response.json()

            setMovies(data.content)

        } catch (error) {
            console.error(error)
        }
    }

    const getShows = async () => {
        try {
            const response = await fetch(`${IP_URL}/tv/trending`)
            const data = await response.json()

            setShows(data.content)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovies()
        getShows()
    }, [])

    return (
        <View>
            <FlatList
                horizontal
                contentContainerStyle={{ gap: 20 }}
                keyExtractor={item => item.id}
                data={movies}
                renderItem={({ item }) => <TouchableOpacity onPress={() => {
                    navigation.navigate('Details', { id: item.id, type: item.media_type })
                }} className='p-4 border-[2px] border-zinc-500 '>
                    <Text>
                        {item.title}
                    </Text>
                </TouchableOpacity>}
            />

            <FlatList
                horizontal
                contentContainerStyle={{ gap: 20 }}
                keyExtractor={item => item.id}
                data={shows}
                renderItem={({ item }) => <TouchableOpacity onPress={() => {
                    navigation.navigate('Details', { id: item.id, type: item.media_type })
                }} className='p-4 border-[2px] border-zinc-500 '>
                    <Text>
                        {item.name}
                    </Text>
                </TouchableOpacity>}
            />
        </View>
    )
}

export default Home