"use client";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { Photo } from "@/app/types";
import { getData } from "@/request/fetch/fetch";
import Pagination from "@/features_2/pagination/pagination";
import AppCard from "@/widgets/appCard";
import { MainLayout } from "@/app/styles";
import { AppLoader } from "@/widgets/appLoader";

// Dynamic import without SSR for Masonry
const Masonry = dynamic(() => import("react-layout-masonry"), { ssr: false });

export default function Home() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getData(currentPage);
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

    return (
        <MainLayout>
            {loading ? (
                <AppLoader />
            ) : (
                <Masonry columns={3} gap={16}>
                    {photos
                        .filter((photo) => photo.thumbnailUrl)
                        .map((photo) => (
                            <AppCard key={photo.id} photo={photo} />
                        ))}
                </Masonry>
            )}
            <Pagination currentPage={currentPage} onPrevious={handlePreviousPage} onNext={handleNextPage} />
        </MainLayout>
    );
}
