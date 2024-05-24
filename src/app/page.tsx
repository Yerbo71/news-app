"use client";
import { useState, useEffect } from "react";
import { Photo } from "@/features/newsList/types";
import { getData } from "@/features/fetch/fetch";
import Pagination from "../shared/pagination/pagination";
import AppCard from "@/widgets/appCard";
import {MasonryLayout} from "@/app/styles";

export default function Home() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(currentPage);
            setPhotos(data);
        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <MasonryLayout>
                {photos
                    .filter((photo) => photo.thumbnailUrl)
                    .map((photo) => (
                        <AppCard key={photo.id} photo={photo} />
                    ))}
            <div style={{width: '100%'}}>
                <Pagination currentPage={currentPage} onPrevious={handlePreviousPage} onNext={handleNextPage} />
            </div>
        </MasonryLayout>
    );
}
