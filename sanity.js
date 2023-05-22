import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: "t38jy3lz",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",


})

export default sanityClient;

