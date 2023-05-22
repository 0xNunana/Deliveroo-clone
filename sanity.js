import { createClient } from "@sanity/client"
import { imageUrlBuilder } from "@sanity/image-url"

export const sanityClient = createClient({
    projectId: "t38jy3lz",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",


})

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source) => { builder.image(source) }
export { urlFor }
