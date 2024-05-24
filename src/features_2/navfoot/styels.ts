import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/colors/colors";
import Link from "next/link";

export const NavFootUList = styled.ol`
  display: flex;
  margin: 0;
  padding: 0;
`

export const NavFootList = styled.li`
  display: flex;
  gap: 20px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  color: white;
`

export const FootLink = styled(Link)`
  text-decoration: none;
  color:white;
  transition: all 0.3s ease;
`