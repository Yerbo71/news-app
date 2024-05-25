"use client";
import React, { useState } from 'react';
import Image from "next/image";
import {
    ButtonsHolder, ComActionButton, ComInputHolder,
    CommentBox,
    CommentContainer,
    CommentText,
    CommentWrapper,
    ImageBox,
    ImageShape
} from "@/features_2/comment/styles";
import edit from "../../../public/svg/Edit.svg";
import trash from "../../../public/svg/Trash.svg";
import {AppCommentInput} from "@/shared/appCommentInput";
import {AppCommentButton} from "@/shared/appCommentButton";

interface CommentProps {
    id: number;
    text: string;
    image: string;
    author: string;
    canEditDelete: boolean;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

const Comment: React.FC<CommentProps> = ({ id, text, author,image,canEditDelete, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(text);

    const handleSave = () => {
        onEdit(id, newText);
        setIsEditing(false);
    };

    return (
        <CommentWrapper>
            {isEditing ? (
                <ComInputHolder>
                    <AppCommentInput value={newText} onChange={(e) => setNewText(e.target.value)} />
                    <AppCommentButton onClick={handleSave}>Save</AppCommentButton>
                </ComInputHolder>
            ) : (
                <CommentContainer>
                    <ImageBox>
                        <ImageShape>
                            <Image src={image} alt={"user"} width={20} height={20} style={{backgroundColor: ""}}/>
                        </ImageShape>
                    </ImageBox>
                    <CommentBox>
                        <p>{author}</p>
                        <CommentText>{text}</CommentText>
                    </CommentBox>
                </CommentContainer>
            )}
            {canEditDelete && (
                <ButtonsHolder>
                    <ComActionButton onClick={() => setIsEditing(true)}><Image src={edit} alt={"edit"} width={20} height={20}/></ComActionButton>
                    <ComActionButton onClick={() => onDelete(id)}><Image src={trash} alt={"trash"} width={20} height={20}/></ComActionButton>
                </ButtonsHolder>
            )}
        </CommentWrapper>
    );
};

export default Comment;
