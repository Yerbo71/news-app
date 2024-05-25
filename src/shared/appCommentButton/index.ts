import styled from "@emotion/styled";
import { mainColors } from "@/shared/constants/colors/colors";


export const AppCommentButton = styled.button`
    align-items: center;
    display: flex;
    gap: 20px;
    background-color: ${mainColors.main};
    border: none;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 12px 60px;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${mainColors.gr};
        color: ${mainColors.main};
    }
`;
