import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}

        >
            {/* category card */}
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="test" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testis" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testosterone" />



        </ScrollView>
    )
}

export default Categories