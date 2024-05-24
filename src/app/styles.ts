import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/colors/colors";

export const MasonryLayout = styled.main`
  background-color: ${mainColors.gr};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  columns: 4;
`