import {Metadata} from "next";
import {Props} from "./types";

async function getData(id:string) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export async function generateMetadata({params:{id}}: Props):Promise<Metadata> {
    return {
        title: `News ${id}`,
    }
}


export default async function News({params: {id}}: Props) {
    const photos = await getData(id);
    return (
        <>
            {photos.title}
            <img src={`${photos.url}`} alt={photos.title} />
        </>

    );
}