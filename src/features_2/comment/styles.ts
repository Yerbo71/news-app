import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/colors/colors";

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  text-align: start;
`

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
`

export const ImageBox = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
`

export const ImageShape = styled.div`
  padding: 15px;
  border-radius: 50%;
  background-color: ${mainColors.gr};
  
`

export const CommentBox = styled.div`
  width: 90%;
`

export const CommentText = styled.div`
  margin-top: 15px;
  opacity: 0.7;
`
export const ButtonsHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
`

export const ComActionButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  border-radius: 15px;
  padding: 12px;
  &:hover {
    background-color: ${mainColors.gr};
  }
`
export const ComInputHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  gap: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
`