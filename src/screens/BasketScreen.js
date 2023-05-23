import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurants } from '../../Slices/restaurantSlice'
import { selectBasketItems, removeFromBasket } from '../../Slices/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../../sanity'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurants)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results;
        }, {})

        setGroupedItemsInBasket(groupedItems);
    }, [items])

    console.log("gouped" + groupedItemsInBasket)
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full bg-gray-100 absolute top-3 right-3">
                        <XCircleIcon color="#00CCBB" size={50} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-7 w-7 bg-gray-300 rounded-full p-4" />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200 ">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#00CCBB]">{items.length} x</Text>
                            <Image
                                source={{
                                    uri: urlFor(items[0]?.image).url()
                                }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">
                                GHS {items[0]?.price}

                            </Text>

                            <TouchableOpacity>
                                <Text
                                    className="text-[#00CCBB] text-xs"
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

            </View>
        </SafeAreaView >

    )
}

export default BasketScreen