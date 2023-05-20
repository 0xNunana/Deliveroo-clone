import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{ uri: imgUrl }}
                className="w-20 h-20 rounded"

            />
            <Text className="text-white font-bold absolute bottom-1">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard