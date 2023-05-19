import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'

import React from 'react'

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white pt-5">
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
            </View>
        </SafeAreaView>


    )
}

export default HomeScreen