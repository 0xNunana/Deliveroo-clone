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
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testis" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testosteron" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testis" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testosteron" />



        </ScrollView>
    )
}

export default Categories