import { useState } from 'react';
import {CommentData} from "@/features/idMain/types";

export const useIdMainModel = () => {
    const [like, setLike] = useState(25);
    const [isLiked, setIsLiked] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState<CommentData[]>([
        {
            id: 1,
            author: "azamat20@gmail.com",
            image: "/svg/User.svg",
            text: "Lorem ipsum dolor sit amet," +
                " consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt" +
                " ut labore et dolore magna aliqua." +
                " Ut enim ad minim veniam, quis nostrud" +
                " exercitation ullamco laboris nisi" +
                " ut aliquip ex ea commodo consequat.",
            canEditDelete: false
        },
        {
            id: 2,
            author: "ala1346@gmail.com",
            image: "/svg/User.svg",
            text: "Sed ut perspiciatis unde omnis iste natus error" +
                " sit voluptatem accusantium doloremque laudantium," +
                " totam rem aperiam, eaque ipsa quae ab illo inventore",
            canEditDelete: false
        }
    ]);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setLike(isLiked ? like - 1 : like + 1);
    };

    const handleShareClick = (platform: string) => {
        const url = window.location.href;
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
                break;
            case 'vk':
                shareUrl = `https://vk.com/share.php?url=${encodeURIComponent(url)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank');
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([
                ...comments,
                {
                    id: Date.now(),
                    author: "Сіз",
                    image: "/svg/User.svg",
                    text: newComment,
                    canEditDelete: true
                }
            ]);
            setNewComment("");
        }
    };

    const handleDeleteComment = (id: number) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    const handleEditComment = (id: number, newText: string) => {
        setComments(
            comments.map(
                comment => comment.id === id ? { ...comment, text: newText } : comment
            )
        );
    };

    return {
        like,
        isLiked,
        comments,
        newComment,
        setNewComment,
        handleLikeClick,
        handleShareClick,
        handleAddComment,
        handleDeleteComment,
        handleEditComment
    };
};
