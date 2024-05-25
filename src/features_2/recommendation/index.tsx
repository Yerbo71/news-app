import React, { useEffect, useState } from 'react';
import { fetchPhotos } from "./fetch";
import { Photo } from "@/app/types";
import { FlexLayout } from "@/features_2/recommendation/styles";
import AppCard from "@/widgets/appCard";

function Recommendation() {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedPhotos: Photo[] = await fetchPhotos();
            setPhotos(fetchedPhotos);
        };
        fetchData();
    }, []);

    return (
        <FlexLayout>
            {photos.map(photo => (
                <AppCard key={photo.id} photo={photo} />
            ))}
        </FlexLayout>
    );
}

export default Recommendation;
