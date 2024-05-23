import React from "react";

interface PaginationProps {
    currentPage: number;
    onPrevious: () => void;
    onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPrevious, onNext }) => {
    return (
        <div>
            <button onClick={onPrevious} disabled={currentPage === 1}>
    Previous
    </button>
    <span> Page {currentPage} </span>
    <button onClick={onNext}>Next</button>
        </div>
);
};

export default Pagination;
