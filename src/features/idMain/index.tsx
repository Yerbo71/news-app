"use client";
import React, { useState } from 'react';
import { Photo, IdMainProps } from './types';
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


interface CommentData {
    id: number;
    author: string;
    image: string;
    text: string;
    canEditDelete: boolean;
}

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

    const repeatedTitle1 = Array(15).fill(props.title).join(' ');
    const repeatedTitle2 = Array(9).fill(props.title).join(' ');
    const repeatedTitle3 = Array(18).fill(props.title).join(' ');

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
        <div className={styles.mainWrapper}>
            <div className={styles.mainBox}>
                <div className={styles.divHolder}>
                    <h1 style={{ margin: '0' }}>{props.title}</h1>
                </div>
                <div className={styles.divHolder}>
                    <div className={styles.tagHolder}>Ақпарат</div>
                    <div>12 қараша 2019</div>
                </div>
                <div className={styles.divHolder}>
                    <img src={props.url} alt={props.title} className={styles.img} />
                </div>
                <div className={styles.divHolder}>
                    <p>{repeatedTitle1}</p>
                    <p>{repeatedTitle2}</p>
                    <p>{repeatedTitle3}</p>
                </div>

                <div className={styles.horline} />

                <div className={styles.quoteHolder}>
                    <p>{repeatedTitle2}</p>
                </div>

                <div className={styles.horline} />

                <div className={styles.divHolder}>
                    <p>{repeatedTitle1}</p>
                    <p>{repeatedTitle2}</p>
                    <p>{repeatedTitle3}</p>
                </div>

                <div className={styles.divHolder}>
                    <img src={props.url} alt={props.title} className={styles.img} />
                </div>

                <div className={styles.buttonHolder}>
                    <AppInteractiveButton onClick={handleLikeClick} isliked={isLiked}>
                        <Image src={likee} alt="like" />
                        {isLiked ? "Ұнады" : "Ұнайды"} {like}
                    </AppInteractiveButton>
                    <AppInteractiveButton onClick={() => handleShareClick('facebook')} isliked={false}>
                        <Image src={facebook} alt="facebook" />
                    </AppInteractiveButton>
                    <AppInteractiveButton onClick={() => handleShareClick('twitter')} isliked={false}>
                        <Image src={twitter} alt="twitter" />
                    </AppInteractiveButton>
                    <AppInteractiveButton onClick={() => handleShareClick('vk')} isliked={false}>
                        <Image src={vk} alt="vk" />
                    </AppInteractiveButton>
                </div>

                <div className={styles.commentsHolder}>
                    <h3 className={styles.commentTitle}>Comments ({comments.length})</h3>
                    <div >
                        {comments.map(comment => (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                text={comment.text}
                                image={comment.image}
                                author={comment.author}
                                canEditDelete={comment.canEditDelete}
                                onDelete={handleDeleteComment}
                                onEdit={handleEditComment}
                            />
                        ))}
                    </div>
                    <div className={styles.commentInputHolder}>
                        <AppCommentInput
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Пікіріңізді жазыңыз..."
                        />
                        <AppCommentButton onClick={handleAddComment}>Қосу</AppCommentButton>
                    </div>
                </div>
            </div>
            <Recommendation/>
        </div>
    );
};

export default IdMain;
