import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/colors/colors";

export const MainLayout = styled.main`
  background-color: ${mainColors.gr};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
`

export const MasonryLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 15px;
`

