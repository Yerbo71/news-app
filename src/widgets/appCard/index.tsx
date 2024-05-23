import React from "react";
import Link from "next/link";
import { Photo } from "@/features/newsList/types";
import {AppCardImage, AppCardImageHolder, AppCardStyles, AppCardTitleHolder} from "@/widgets/appCard/styles";

interface AppCardProps {
    photo: Photo;
}

const AppCard: React.FC<AppCardProps> = ({ photo }) => {
    return (
        <Link href={`/${photo.id}`}>
            <AppCardStyles key={photo.id}>
                <AppCardImageHolder>
                    <AppCardImage src={photo.thumbnailUrl} title={photo.title}/>
                </AppCardImageHolder>
                <AppCardTitleHolder>
                    {photo.title}
                </AppCardTitleHolder>

            </AppCardStyles>
        </Link>
    );
};

export default AppCard;
