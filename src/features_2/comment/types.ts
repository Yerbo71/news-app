export interface CommentProps {
    id: number;
    text: string;
    image: string;
    author: string;
    canEditDelete: boolean;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}