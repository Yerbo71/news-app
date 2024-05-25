import { fetchPhotos } from "./fetch";
import { Photo } from "@/app/types";
import {FlexLayout} from "@/features_2/recommendation/styles";
import AppCard from "@/widgets/appCard";


export default async function Recommendation() {
    const photos: Photo[] = await fetchPhotos();
    return (
        <FlexLayout>
            {photos.map(photo => (
                <AppCard photo={photo}/>
            ))}
        </FlexLayout>
    );
}
