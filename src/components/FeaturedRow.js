import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'
import sanityClient from '../../sanity'

const FeaturedRow = ({ id, title, description }) => {
    const [restaurant, setRestaurant] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                await sanityClient.fetch(
                    `     *[_type == "restaurant" ] {
                        ...,
                        restaurants[]->{
                            ...,
                            dishes[]->,
                            type-> {
                               name
                            }
                         },
                      }
                `,) //fetch data based on the dynamic id
                    .then((data) => { setRestaurant(data) })
            }

            catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [])
    console.log(restaurant)
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

                {restaurant?.map((food) => <RestaurantCard key={food._id} id={food._id} title={food.name} rating={food.rating} genre={food.short_description} address={food.address} short_description={food.short_description} dishes=
                    {food.dishes} long={food.long} lat={food.lat} />)}

            </ScrollView>
        </View>
    )
}

export default FeaturedRow