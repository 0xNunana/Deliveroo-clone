import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from "react-currency-formatter"
import { urlFor } from '../../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const DishRow = ({ key, id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)
    return (<>
        <TouchableOpacity
            onPress={() => setIsPressed(!isPressed)}
            className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
            <View className="flex-row">

                <View className="flex-1">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text>
                        <Currency quantity={price} currency='GHS' />
                    </Text>
                </View>


                <View>
                    <Image style={{ borderWidth: 1, borderColor: "#F3F3F4" }} source={{ uri: urlFor(image).url() }} className="h-20 w-20 p-4 b-gray-300" />
                </View>
            </View>


        </TouchableOpacity>
        {isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity>
                        <MinusCircleIcon color="green" size={40} opacity={0.5} />
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity>
                        <PlusCircleIcon color="green" size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>

    )
}

export default DishRow