import {Metadata} from "next";

async function getData(id:string) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

type Props = {
    params: {
        id: string
    }
}
export async function generateMetadata({params:{id}}: Props):Promise<Metadata> {
    return {
        title: id,
    }
}
export default async function News({params: {id}}: Props) {
    const photos = await getData(id);
    return (
        <div>
            {photos.title}
            <img src={`${photos.url}`} alt={photos.title} />
        </div>
    );
}