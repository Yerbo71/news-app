"use client";
import React, { useState } from 'react';
import {CommentData, IdMainProps} from './types';
import styles from './styles.module.css';
import likee from '../../../public/svg/Like.svg';
import facebook from '../../../public/svg/FaceBook.svg';
import twitter from '../../../public/svg/Twitter.svg';
import vk from '../../../public/svg/Vk.svg';
import user from '../../../public/svg/User.svg';
import { AppInteractiveButton } from "@/shared/appInteractiveButton";
import Image from "next/image";
import Comment from '../../features_2/comment/comment';
import {AppCommentButton} from "@/shared/appCommentButton";
import {AppCommentInput} from "@/shared/appCommentInput";
import Recommendation from "@/features_2/recommendation";
import IdMainContent from "@/features/idMain/components/IdMainContent";
import {MainBox, MainWrapper} from "@/features/idMain/styles";
import IdMainActions from "@/features/idMain/components/IdMainActions";
import IdMainComSection from "@/features/idMain/components/IdMainComSection";



const IdMain: React.FC<IdMainProps> = ({ props }) => {
    const [like, setLike] = useState(25);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState<CommentData[]>([
        {
            id: 1,
            author: "azamat20@gmail.com",
            image: user.src,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
                " Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
                " laboris nisi ut aliquip ex ea commodo consequat.",
            canEditDelete: false
        },
        {
            id: 2,
            author: "ala1346@gmail.com",
            image: user.src,
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem " +
                "accusantium doloremque laudantium, totam rem aperiam, " +
                "eaque ipsa quae ab illo inventore",
            canEditDelete: false
        }
    ]);
    const [newComment, setNewComment] = useState("");


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
            setComments([...comments, { id: Date.now(), author: "Сіз",image: user.src, text: newComment, canEditDelete: true }]);
            setNewComment("");
        }
    };

    const handleDeleteComment = (id: number) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    const handleEditComment = (id: number, newText: string) => {
        setComments(comments.map(comment => comment.id === id ? { ...comment, text: newText } : comment));
    };

    return (
        <MainWrapper>
            <MainBox>
                <IdMainContent albumId={props.albumId} id={props.id} title={props.title} url={props.url} thumbnailUrl={props.thumbnailUrl}/>
                <IdMainActions handleLikeClick={handleLikeClick} handleShareClick={handleShareClick} isLiked={isLiked} like={like}/>
                <IdMainComSection comments={comments} newComment={newComment} setNewComment={setNewComment} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} handleEditComment={handleEditComment}/>
            </MainBox>
            <Recommendation/>
        </MainWrapper>
    );
};

export default IdMain;