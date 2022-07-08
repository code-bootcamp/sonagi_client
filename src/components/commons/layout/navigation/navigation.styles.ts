import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 55px;
  padding: 0px 2px;
  border-bottom: 1px solid #e0e0e0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media ${breakPoints.tablet} {
    justify-content: space-between;
  }

  @media ${breakPoints.mobile} {
    justify-content: space-between;
  }
`;

export const ListTitle = styled.div`
  font-weight: 500;
  margin-right: 40px;
  font-size: 1.125rem;
  color: #141414;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    font-size: 1.2rem;
    margin-right: 20px;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.77rem;
    margin-right: 10px;
  }
`;

// export const ListImg = styled.img`
//   cursor: pointer;
// `;
