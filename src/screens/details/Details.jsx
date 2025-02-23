import { Image, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import {IP_URL, ACCESS_TOKEN} from "@env"

const Details = () => {
    const route = useRoute()
    const { id, type } = route.params
    const [data, setData] = useState({})
    const [trailerKey, setTrailerKey] = useState("")

    const getData = async () => {
        try {
            const response = await fetch(`${IP_URL}/${type}/${id}/details`)
            const data = await response.json()

            setData(data.content)

        } catch (error) {
            console.error(error)
        }
    }

    const getTrailers = async () => {

        try {
            const response = await fetch(`${IP_URL}/${type}/${id}/trailers`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${ACCESS_TOKEN}`
                }

            })
            const data = await response.json()

            console.log(data)
            setTrailerKey(data.trailers[0].key)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
        getTrailers()
    }, [type, id])


    return (
        <View>
            <YoutubePlayer
                height={300}
                videoId={trailerKey}
            />

            <Text>
                {type === "movie" ? data.title : data.name}
            </Text>

            <Image className='w-[200px] h-[300px]' src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
        </View>
    )
}

export default Details