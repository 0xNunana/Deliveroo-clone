import { View, Text,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React ,{useState,useEffect}from 'react'
import * as Animatable from "react-native-animatable"
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
    const navigation=useNavigation()

useEffect(()=>{
    setTimeout(() => {
        navigation.navigate("Delivery")
    }, 4000);
},[])

    return (
        <SafeAreaView className="bg-[#00CCDD] flex-1 justify-center items-center">
           <Animatable.Image source={require("../../assets/swipe.gif")} animation="slideInDown"  iterationCount={1} className="h-60 w-60"/>
           <Animatable.Text animation="slideInUp" iterationCount={1}>
    <Text className="text-white text-lg  my-10 font-bold text-center">Waiting for Restaurant to receive your order
    </Text>
</Animatable.Text>
            <Animatable.Image source={require("../../assets/Spinner-1s-234px.gif")} animation="slideInDown"  iterationCount={1} className="h-20 w-20"/>
           
{/* <Image source={}/> */}


        </SafeAreaView>
    )
}
 
export default PreparingOrderScreen