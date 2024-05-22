import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/style/colors";
import Link from "next/link";

export const NavFootUList = styled.ol`
  display: flex;
  margin: 0;
  padding: 0;
`

export const NavFootList = styled.li`
  display: flex;
  gap: 15px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  color: ${mainColors.gr};
`

export const FootLink = styled(Link)`
  text-decoration: none;
  color:${mainColors.gr} ;
  transition: all 0.3s ease;
`