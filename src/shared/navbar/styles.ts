import styled from '@emotion/styled'
import {mainColors} from "@/shared/constants/colors/colors";
export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const NavBox = styled.nav`
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: ${mainColors.gr};
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border: none;
  border-radius: 30px;
`

export const NavUlist = styled.ol`
  width: 65%;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 10px;
`
export const Navlist = styled.li`
  width: 10%;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  color: ${mainColors.main};
`
export const NavText = styled.div`
  padding: 6px 10px 6px 10px;
  border-radius: 15px;
  border: none;
  &:hover, &:active {
    background-color: ${mainColors.main};
    color: ${mainColors.gr};
  }
`

export const NavSearch = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SearchShape = styled.div`
  padding: 6px 8px 6px 8px;
  border: none;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`
