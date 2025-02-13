import { Text, View, TouchableOpacity, Platform, Image } from 'react-native'
import { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import FastImage from 'react-native-fast-image'
import { request, PERMISSIONS } from 'react-native-permissions';

const Gallery = () => {
    const os = Platform.OS
    const [selectedImage, setSelectedImage] = useState(null)

    const handleGalleryOpen = () => {
        request(os === "ios" ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then((status) => {
            status === 'granted' && launchImageLibrary({ mediaType: 'photo' }, (response) => {
                !response.didCancel && setSelectedImage(response.assets[0].uri)
            })
        });
    }

    return (
        <View>
            {selectedImage && <Image
                style={{ width: 200, height: 200 }}
                source={{
                    uri: selectedImage,
                    // priority: FastImage.priority.high,
                }}
                // resizeMode={FastImage.resizeMode.contain}
            />}

            <TouchableOpacity onPress={handleGalleryOpen} className='w-full bg-blue-950 py-3'>
                <Text className='text-white text-center'>Select an image</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Gallery