import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectBasketItemsId, removeFromBasket } from '../../Slices/basketSlice'

import { urlFor } from '../../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const DishRow = ({ key, id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const item = useSelector((state) => selectBasketItemsId(state, id))

    const addItem = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }
    const removeItem = () => {
        dispatch(removeFromBasket({ id }))
    }
    return (<>
        <TouchableOpacity
            onPress={() => setIsPressed(!isPressed)}
            className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
            <View className="flex-row">

                <View className="flex-1">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text>
                        GHS {price}
                    </Text>
                </View>


                <View>
                    <Image style={{ borderWidth: 1, borderColor: "#F3F3F4", borderRadius: 5 }} source={{ uri: urlFor(image).url() }} className="h-20 w-20 p-4 b-gray-300" />
                </View>
            </View>


        </TouchableOpacity>
        {isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity onPress={removeItem}>
                        <MinusCircleIcon color="green" size={40} opacity={0.5} />
                    </TouchableOpacity>
                    <Text>{item.length}</Text>
                    <TouchableOpacity onPress={addItem}>
                        <PlusCircleIcon color="green" size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>

    )
}

export default DishRow