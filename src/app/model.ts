import { useState, useEffect } from "react";
import { Photo } from "@/app/types";
import { getData as fetchPhotos } from "@/request/mainFetch/fetch";

export const usePhotos = (initialPage: number = 1) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchPhotos(currentPage);
            setPhotos(data);
            setLoading(false);
        };
        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return { photos, loading, currentPage, handleNextPage, handlePreviousPage };
};
