import React from 'react';
import styles from '../styles.module.css';
import Comment from '../../../features_2/comment/comment'; // Assuming Comment component is also defined in the same directory
import { AppCommentInput } from "@/shared/appCommentInput";
import { AppCommentButton } from "@/shared/appCommentButton";
import { CommentData } from '../types';

interface CommentsSectionProps {
    comments: CommentData[];
    newComment: string;
    setNewComment: React.Dispatch<React.SetStateAction<string>>;
    handleAddComment: () => void;
    handleDeleteComment: (id: number) => void;
    handleEditComment: (id: number, newText: string) => void;
}

const IdMainComSection: React.FC<CommentsSectionProps> = (
    {
        comments,
        newComment,
        setNewComment,
        handleAddComment,
        handleDeleteComment,
        handleEditComment
    }
    ) => {
    return (
        <div className={styles.commentsHolder}>
            <h3 className={styles.commentTitle}>Comments ({comments.length})</h3>
            <div>
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
    );
};

export default IdMainComSection;
