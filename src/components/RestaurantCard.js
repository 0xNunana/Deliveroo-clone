import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback } from 'react'
import { StarIcon } from "react-native-heroicons/solid"
import { MapPinIcon } from "react-native-heroicons/outline"
//import { imageUrlBuilder } from "@sanity/image-url"
//import sanityClient from '../../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
}) => {
    const Navigation = useNavigation()
    // const builder = imageUrlBuilder(sanityClient)
    // function urlFor(source) {
    //     return builder.image(source)
    // }
    const handlepress = useCallback(
        () => {
            Navigation.navigate("Restaurant", {
                id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
            })
        },
        [],
    )


    return (
        <TouchableOpacity
            onPress={handlepress}
            className=" bg-white mr-3 ">
            <Image source={{ uri: imgUrl }} className="h-40 w-64 rounded-sm" />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className="text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.4} />
                    <Text className="text-gray-500">
                        Nearby . {address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>


    )
}

export default RestaurantCard