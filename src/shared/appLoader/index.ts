import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/colors/colors";

export const AppLoader = styled.div`
  border: 16px solid white;
  border-radius: 50%;
  border-top: 16px solid ${mainColors.main};
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`