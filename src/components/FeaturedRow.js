import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon size={20} color="green" />
            </View>
            <Text className="text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    //inner scrollview style
                    paddingHorizontal: 15,

                }}
                //outer scroll view style
                className="pt-4"

            >
                <RestaurantCard id="1" imgUrl="https://links.papareact.com/gn7" title="Banku" rating="5" genre="carbohydrate" address="zenu" short_description="available" dishes=
                    {[]} long="" lat="" />
                <RestaurantCard id="1" imgUrl="https://links.papareact.com/gn7" title="Banku" rating="5" genre="carbohydrate" address="zenu" short_description="available" dishes=
                    {[]} long="" lat="" />

                <RestaurantCard id="1" imgUrl="https://links.papareact.com/gn7" title="Banku" rating="5" genre="carbohydrate" address="zenu" short_description="available" dishes=
                    {[]} long="" lat="" />



            </ScrollView>
        </View>
    )
}

export default FeaturedRow