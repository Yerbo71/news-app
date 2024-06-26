import styled from '@emotion/styled'
import {mainColors} from "@/shared/constants/colors/colors";

interface NavTextProps {
    isActive: boolean;
}
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
  justify-content: start;
  align-items: center;
  border: none;
  border-radius: 30px;
`

export const NavUlist = styled.ol`
  width: 65%;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 15px;
`
export const Navlist = styled.li`
  width: 10%;
  display: flex;
  font-size: 16px;
  justify-content: start;
  align-items: center;
  color: ${mainColors.main};
`
export const NavText = styled.div<NavTextProps>`
  padding: 8px 15px;
  border-radius: 15px;
  border: none;
  ${({ isActive }) => isActive && `
    background-color: ${mainColors.main};
    color: ${mainColors.gr};
  `}
  &:hover {
    background-color: ${mainColors.main};
    color: ${mainColors.gr};
  }
`;

export const NavSearch = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`

export const FormSearch = styled.form`
  display: flex;
  gap: 10px;
`
export const SearchShape = styled.div`
  padding: 6px 8px 6px 8px;
  border: none;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`
