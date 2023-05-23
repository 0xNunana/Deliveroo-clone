import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../../sanity'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                await sanityClient.fetch(
                    `     *[_type == "category" ] {...}
                `,) //fetch data based on the dynamic id
                    .then((data) => { setCategories(data) })
            }

            catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [])

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
            {categories?.map((cat) => <CategoryCard imgUrl={urlFor(cat.image).url()} title={cat.name} key={cat._id} />)}



        </ScrollView>
    )
}

export default Categories