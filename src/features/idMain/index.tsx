"use client";
import React from 'react';
import { IdMainProps } from './types';
import Recommendation from "@/features_2/recommendation";
import IdMainContent from "@/features/idMain/components/IdMainContent";
import { MainBox, MainWrapper } from "@/features/idMain/styles";
import IdMainActions from "@/features/idMain/components/IdMainActions";
import IdMainComSection from "@/features/idMain/components/IdMainComSection";
import { useIdMainModel } from "@/features/idMain/model";

const IdMain: React.FC<IdMainProps> = ({ props }) => {
    const {
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
    } = useIdMainModel();

    return (
        <MainWrapper>
            <MainBox>
                <IdMainContent
                    albumId={props.albumId}
                    id={props.id}
                    title={props.title}
                    url={props.url}
                    thumbnailUrl={props.thumbnailUrl}
                />
                <IdMainActions
                    handleLikeClick={handleLikeClick}
                    handleShareClick={handleShareClick}
                    isLiked={isLiked}
                    like={like}
                />
                <IdMainComSection
                    comments={comments}
                    newComment={newComment}
                    setNewComment={setNewComment}
                    handleAddComment={handleAddComment}
                    handleDeleteComment={handleDeleteComment}
                    handleEditComment={handleEditComment}
                />
            </MainBox>
            <Recommendation />
        </MainWrapper>
    );
};

export default IdMain;
