import React from 'react';
import styles from '../styles.module.css';
import { AppInteractiveButton } from "@/shared/appInteractiveButton";
import Image from "next/image";
import likee from '../../../../public/svg/Like.svg';
import facebook from '../../../../public/svg/FaceBook.svg';
import twitter from '../../../../public/svg/Twitter.svg';
import vk from '../../../../public/svg/Vk.svg';

interface IdMainActionsProps {
    handleLikeClick: () => void;
    handleShareClick: (platform: string) => void;
    isLiked: boolean;
    like: number;
}

const IdMainActions: React.FC<IdMainActionsProps> = ({ handleLikeClick, handleShareClick, isLiked, like }) => {
    return (
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
    );
};

export default IdMainActions;
