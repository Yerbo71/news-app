import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/colors/colors";



export const AppCardStyles = styled.div`
  width: 370px;
  display: flex;
  padding: 24px;
  border: none;
  border-radius: 15px;
  background-color: white;
  flex-wrap: wrap;
  align-items: center;
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



