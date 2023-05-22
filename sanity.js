import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"
const sanityClient = createClient({
    projectId: "t38jy3lz",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",


})

export default sanityClient;

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}
export { urlFor }