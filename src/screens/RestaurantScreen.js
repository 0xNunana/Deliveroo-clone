import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import { ArrowLeftIcon, ChevronRightIcon, StarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch } from 'react-redux'
import { addToRestaurant } from '../../Slices/restaurantSlice'



const RestaurantScreen = ({ route }) => {
    const { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } = route.params
    const Navigation = useNavigation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addToRestaurant({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }))


    }, [dispatch])

    return (
        <SafeAreaView className="pb-2 relative">
            <ScrollView>
                <View className="relative">
                    <Image source={{ uri: imgUrl }} className=" bg-gray-300  h-48 w-full " />

                </View>
                <TouchableOpacity onPress={Navigation.goBack} className="absolute top-4 left-3 p-2 bg-gray-200 rounded-full">
                    <ArrowLeftIcon size={20} color="green" />
                </TouchableOpacity>
                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color="green" opacity={0.5} size={22} />
                                <Text className="text-gray-500">
                                    <Text className="text-green-500">{rating}</Text> . {genre}

                                </Text>
                                <Text>{id}</Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon color="gray" opacity={0.4} size={22} />
                                <Text className="text-gray-500">
                                    Nearby . {address}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pn-3">{short_description}</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
                        <Text className="pl-2 flex-1 font-bold"> Have a food allergy?</Text>
                        <ChevronRightIcon color="green" size={22} />
                    </TouchableOpacity>

                </View>
                <View className="pb-20">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                        Menu
                    </Text>
                    {dishes?.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>


            </ScrollView>
            <BasketIcon />
        </SafeAreaView>

    )
}

export default RestaurantScreen