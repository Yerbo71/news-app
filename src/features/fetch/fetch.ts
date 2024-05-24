import { Photo } from "../newsList/types";

const PHOTOS_PER_PAGE = 10;

export const getData = async (page: number, query?: string): Promise<Photo[]> => {
    try {
        const url = new URL('https://jsonplaceholder.typicode.com/photos');
        url.searchParams.append('_page', page.toString());
        url.searchParams.append('_limit', PHOTOS_PER_PAGE.toString());

        if (query) {
            url.searchParams.append('title_like', query);
        }

        const res = await fetch(url.toString(), {
            cache: "force-cache",
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        return res.json();
    } catch (error) {
        console.log(error);
        return [];
    }
};
