import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  background: #bee3ff;
  padding: 100px 0px 220px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 960px) {
    padding: 100px 0 50px 0;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 2.8rem;
  text-align: center;
  color: #484848;
`;

export const TitleWrapper = styled.div`
  padding: 10px 0;
`;

export const Subtitle = styled.div`
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
  color: #808080;
`;

export const BoxWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
`;

export const Box = styled.div`
  background: #fff;
  box-shadow: 10px 10px 40px rgb(0 0 0 / 10%);
  border-radius: 16px;
  padding: 32px;
  width: 327px;
  height: 327px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  @media (max-width: 723px) {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    height: 270px;
    padding: 20px 5px;
    align-items: center;
  }
`;

export const BoxT = styled.div`
  font-size: 1.25rem;
`;

export const BoxTitle = styled.div`
  font-size: 1.25rem;
  line-height: 75px;
  padding-right: 5px;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    padding: 10px 5px;
    line-height: 30px;
  }
`;

export const BoxWrap = styled.div`
  display: flex;
`;

export const BoxContents = styled.div`
  font-weight: 800;
  font-size: 2.5rem;
  padding-right: 5px;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
    padding: 0;
  }
`;

export const Con = styled.div`
  width: 65px;
  height: 35px;
  background-image: url("/mainpage/textcon.png");
  background-repeat: no-repeat;
  background-size: 65px 35px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  font-weight: 300;
  padding-top: 2px;
  margin-left: 125px;
  margin-bottom: -17px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Con2 = styled.div`
  width: 65px;
  height: 35px;
  background-image: url("/mainpage/textcon.png");
  background-repeat: no-repeat;
  background-size: 65px 35px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  font-weight: 300;
  padding-top: 2px;
  margin-left: 135px;
  margin-bottom: -17px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ContentWrap = styled.div`
  padding: 15px 0 10px 0;
`;

export const SubT = styled.div`
  font-size: 1rem;
  color: #848484;
  font-weight: 350;

  @media ${breakPoints.mobile} {
    display: flex;
    padding: 0 15px;
  }
`;

export const Pay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 327px;
  justify-content: center;
  margin: 0 10px;

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const PayBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const PayImg = styled.img`
  width: 65px;
`;

export const PayContent = styled.div`
  font-size: 1rem;
  padding-left: 10px;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #ffffff;
  margin: 20px 0;
`;
