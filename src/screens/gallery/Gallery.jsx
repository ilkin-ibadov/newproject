import { Text, View, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import FastImage from 'react-native-fast-image'

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <View>
            {selectedImage && <FastImage
                style={{ width: 200, height: 200 }}
                source={{
                    uri: selectedImage,
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />}

            <TouchableOpacity onPress={() => {
                launchImageLibrary({ mediaType: 'photo' }, (response) => {
                    !response.didCancel && setSelectedImage(response.assets[0].uri)
                })
            }} className='w-full bg-blue-950 py-3'>
                <Text className='text-white text-center'>Select an image</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Gallery