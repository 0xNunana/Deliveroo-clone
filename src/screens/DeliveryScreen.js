import React from "react";
import { View,Text ,TouchableOpacity,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../Slices/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from 'react-native-progress'
import MapView,{Marker, marker} from 'react-native-maps'





const DeliveryScreen =()=>{
    const navigation= useNavigation()
const restaurants = useSelector(selectRestaurants)

    return(
<View className="flex-1 bg-[#00CCDD]">
    <SafeAreaView className="z-50 shadow-xl">
        <View className="flex-row justify-between items-center p-5">
<TouchableOpacity onPress={()=>navigation.navigate("Home")}>
    <XMarkIcon size={30} color="white"/>
</TouchableOpacity>
<Text className="text-white text-lg font-light"> Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between" >
            <View>
                <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image source={require("../../assets/aura.gif")} className="h-10 w-10 "/>
            {/* <Image source={{uri:"https://links.papareact.com/fls"}} className="h-10 w-10 "/> */}
            </View>
       <Progress.Bar color="#00ccdd" width={200} progress={0.2}   indeterminate={true}/>
       <Text className="mt-3 text-gray-500">Your order at {restaurants.title} is being prepared</Text>
        </View>
    </SafeAreaView>
<MapView initialRegion={{
    latitude:restaurants.lat,
    longitude:restaurants.long,
    latitudeDelta:0.0005,
    longitudeDelta:0.0005
}}
mapType="mutedStandard"
className="flex-1 z-0 -mt-10"
>
<Marker 
coordinate={{
    latitude:restaurants.lat,
    longitude:restaurants.long,
}}
title={restaurants.title}
description={restaurants.short_description}
identifier="origin"
pinColor="#00CCDD"
/>

    </MapView>
    <SafeAreaView className="bg-white flex-row items-center space-x-5 border-y border-[#00ccdd] pb-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300  rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg font-bold">Frankline</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5">Call</Text>
      </SafeAreaView>
</View>
        
    )

}
export default DeliveryScreen;