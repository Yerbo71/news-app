
export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface IdMainProps {
    props: Photo;
}

export interface CommentData {
    id: number;
    author: string;
    image: string;
    text: string;
    canEditDelete: boolean;
}