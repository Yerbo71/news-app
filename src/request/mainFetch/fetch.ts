import { Photo } from "@/app/types";

const PHOTOS_PER_PAGE = 12;

export const getData = async (page: number, query?: string): Promise<Photo[]> => {
    try {
        const url = new URL('https://jsonplaceholder.typicode.com/photos');
        url.searchParams.append('_page', page.toString());
        url.searchParams.append('_limit', PHOTOS_PER_PAGE.toString());
        console.log("base")

        if (query) {
            url.searchParams.append('/', query.toString());
            console.log("title")
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
