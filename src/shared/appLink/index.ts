import Link from "next/link";
import styled from "@emotion/styled";
import {mainColors} from "@/shared/constants/colors/colors";

export const AppLink = styled(Link)`
  text-decoration: none;
  color:${mainColors.main} ;
  transition: all 0.3s ease;
`