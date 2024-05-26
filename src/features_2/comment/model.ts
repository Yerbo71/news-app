import { useState } from 'react';

export const useCommentModel = (initialText: string, id: number, onEdit: (id: number, newText: string) => void) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(initialText);

    const handleSave = () => {
        onEdit(id, newText);
        setIsEditing(false);
    };

    return {
        isEditing,
        newText,
        setIsEditing,
        setNewText,
        handleSave
    };
};
