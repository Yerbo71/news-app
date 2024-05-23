import styled from '@emotion/styled'
import {mainColors} from "@/shared/constants/colors/colors";
export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${mainColors.main};
  color: ${mainColors.gr};
`
export const FooterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  opacity: 0.7;
`
export const FooterHr = styled.hr`
  width: 100%;
  border: 1px solid ${mainColors.gr};
  opacity: 0.1;
  
`