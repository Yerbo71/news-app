import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/style/colors";

export const AppCardStyles = styled.div`
  display: flex;
  padding: 24px;
  border: none;
  border-radius: 15px;
  background-color: white;
  flex-wrap: wrap;
  align-items: center;
  width: 370px;
  gap: 15px;
`

export const AppCardImageHolder = styled.div`
  width: 100%;
`

export const AppCardImage = styled.img`
  width: 100%;
  border-radius: 15px;
`

export const AppCardTitleHolder = styled.div`
  width: 100%;
  font-size: 20px;
  color: ${mainColors.main};
`


