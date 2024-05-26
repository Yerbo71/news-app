import styled from "@emotion/styled";
import { mainColors } from "@/shared/constants/colors/colors";

interface ButtonProps {
    isliked: boolean;
}

export const AppInteractiveButton = styled.button<ButtonProps>`
    align-items: center;
    display: flex;
    gap: 20px;
    background-color: ${(props) => (props.isliked ? mainColors.red : mainColors.gr)};
    border: none;
    border-radius: 30px;
    color: ${mainColors.main};
    cursor: pointer;
    font-size: 16px;
    padding: 12px 40px;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${mainColors.red};
        color: ${mainColors.gr};
    }
`;
