import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "ma20zsqi",
    apiVersion: "v1",
    useCDN: false,
};


export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);