import { View, Text } from 'react-native'
import React from 'react'

const RestaurantScreen = ({ route }) => {
    const { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } = route.params
    return (
        <View>
            <Text>RestaurantScreen</Text>
            <Text>{title}</Text>
        </View>
    )
}

export default RestaurantScreen