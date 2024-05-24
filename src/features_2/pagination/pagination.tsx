"use client";
import React from "react";
import {AppButton} from "@/shared/appButton";
import {PagWrapper} from "@/features_2/pagination/styles";
interface PaginationProps {
    currentPage: number;
    onPrevious: () => void;
    onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPrevious, onNext }) => {
    return (
        <PagWrapper>
            <AppButton onClick={onPrevious} disabled={currentPage === 1}>
                Previous
            </AppButton>
            <span> Page {currentPage} </span>
            <AppButton onClick={onNext}>Next</AppButton>
        </PagWrapper>
);
};

export default Pagination;
