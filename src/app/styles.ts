import styled from "@emotion/styled";
import {mainColors} from "../shared/constants/style/colors";

export const MasonaryLayout = styled.main`
  width: 100%;
  background-color: ${mainColors.gr};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  columns: 4;
`