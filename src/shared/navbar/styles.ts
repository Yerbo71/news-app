import styled from '@emotion/styled'
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
  background-color: #F6F7F9;
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
`
export const Navlist = styled.li`
  width: 65%;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  color: #172B4D;
  &:hover {
      
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
