import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/colors/colors";

export const AppButton = styled.button`
    background-color: ${mainColors.gr};
    border-radius: 15px;
    border: 1px solid ${mainColors.main};
    color: ${mainColors.main};
    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${mainColors.main};
        color: ${mainColors.gr};
    }
      &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
`