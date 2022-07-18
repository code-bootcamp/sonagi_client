import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Arrow = styled.img`
  width: 35px;
  height: 35px;
  margin: 0px 30px;

  @media ${breakPoints.mobile} {
    width: 30px;
    height: 30px;
  }
`;

interface IPageProps {
  isActive?: boolean;
}

export const Page = styled.span`
  padding: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#2277cd" : "#808080")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
