import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: imgUrl }}
                className="w-10 h-10 rounded-md"

            />
            <Text className="text-red-500">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard