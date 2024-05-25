"use client";
import dynamic from 'next/dynamic';
import { usePhotos } from "@/app/model";
import Pagination from "@/features_2/pagination/pagination";
import AppCard from "@/widgets/appCard";
import { MainLayout } from "@/app/styles";
import { AppLoader } from "@/widgets/appLoader";

// Dynamic import without SSR for Masonry
const Masonry = dynamic(() => import("react-layout-masonry"), { ssr: false });

export default function Home() {
    const { photos, loading, currentPage, handleNextPage, handlePreviousPage } = usePhotos();

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
