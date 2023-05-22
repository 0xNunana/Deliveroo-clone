import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../../sanity'
import imageUrlBuilder from '@sanity/image-url'
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
    console.log(categories)
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
            {categories?.map((cat) => <CategoryCard imgUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" title={cat.name} key={cat._id} />)}



        </ScrollView>
    )
}

export default Categories