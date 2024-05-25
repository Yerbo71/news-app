import { Photo } from "@/app/types";

const PHOTOS_LIMIT = 6;

export const fetchPhotos = async (): Promise<Photo[]> => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${PHOTOS_LIMIT}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};
