"use client";
import {useState, useEffect, Suspense} from "react";
import { Photo } from "@/app/types";
import { getData } from "@/request/fetch/fetch";
import Pagination from "@/features_2/pagination/pagination";
import AppCard from "@/widgets/appCard";
import {MasonryLayout} from "@/app/styles";
import {AppLoader} from "../widgets/appLoader";

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
            <Suspense fallback={<AppLoader/>}>
                {photos
                    .filter((photo) => photo.thumbnailUrl)
                    .map((photo) => (
                        <AppCard key={photo.id} photo={photo} />
                    ))}
                <Pagination currentPage={currentPage} onPrevious={handlePreviousPage} onNext={handleNextPage} />
            </Suspense>
        </MasonryLayout>
    );
}
