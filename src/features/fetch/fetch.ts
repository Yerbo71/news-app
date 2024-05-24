import { Photo } from "../newsList/types";

const PHOTOS_PER_PAGE = 10;

export const getData = async (page: number): Promise<Photo[]> => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${PHOTOS_PER_PAGE}`,
            {
                cache: "force-cache",
            }
        );
        return res.json();
    } catch (error) {
        console.log(error);
        return [];
    }
};
