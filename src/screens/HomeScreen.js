import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

import React from 'react'

const HomeScreen = () => {
    return (
        <SafeAreaView className=" pt-5 ">
            <View className="flex">
                {/* Header */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        className="h-8 w-8 bg-slate-200 p-4 rounded-full"
                    />

                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-xl items-center">
                            Current Location <ChevronDownIcon size={20} color="green" />
                        </Text>
                    </View>

                    <UserIcon size={30} color="green" />
                </View>
                {/* Searchbox */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-1 flex-row items-center space-x-2 p-3 bg-gray-300">
                        <MagnifyingGlassIcon color="gray" size={20} />
                        <TextInput placeholder='Restaurants and Cuisines' />
                    </View>
                    <AdjustmentsVerticalIcon color="green" />
                </View>

                {/*  scrollable body */}
                <ScrollView>
                    {/* Category */}
                    <Categories />

                    {/* featured */}
                    <FeaturedRow id="1" title="Featured" description="Paid placements from our partners" />
                    <FeaturedRow id="2" title="Tasty Discounts" description="Paid placements from our partners" />
                    <FeaturedRow id="3" title="Offers near you" description="Paid placements from our partners" />

                </ScrollView>

            </View>
        </SafeAreaView>


    )
}

export default HomeScreen