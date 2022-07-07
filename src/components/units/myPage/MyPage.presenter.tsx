import { Button, Modal } from "@material-ui/core";
import Box from "@mui/material/Box";
import * as S from "./MyPage.styles";
import { useForm } from "react-hook-form";
import React from "react";

export default function MyPagePresenter(props) {
  const { handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const boxStyle = {
    color: "black",
    fontSize: 16,
    border: "#808080",
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 464,
    height: 316,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };

  return (
    <S.Wrapper>
      {/* <S.CashCharge>캐시충전</S.CashCharge> */}
      <Button sx={boxStyle} onClick={handleOpen}>
        캐시충전
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(props.requestpay)}>
            <S.SelectWrapper>
              <S.SelectCash>포인트 충전</S.SelectCash>
              <S.Select onChange={props.onChangeAmount}>
                <S.Option selected>충전하실 금액을 선택해주세요</S.Option>
                <S.Option value="100">100</S.Option>
                <S.Option value="500">500</S.Option>
                <S.Option value="1000">1000</S.Option>
                <S.Option value="2000">2000</S.Option>
                <S.Option value="5000">5000</S.Option>
              </S.Select>
            </S.SelectWrapper>
            <S.ButtonWrapper>
              <S.Buttons>충전하기</S.Buttons>
              {/* <S.Button onClick={props.onClickCharge}>취소하기</S.Button> */}
            </S.ButtonWrapper>
          </form>
        </Box>
      </Modal>
      <S.LargeBox>
        <S.InnerLeftBox>
          <img src="myPage/ProfileVector.png" />
          <S.ChangeButton>변경</S.ChangeButton>
          <S.Name>이름님</S.Name>
          <S.Email>abcdefghij@gamil.com</S.Email>
          <S.Flex>
            <S.Point>포인트 100P |</S.Point>
            <S.Point>충전하기</S.Point>
          </S.Flex>
          <S.LogoutButton>로그아웃</S.LogoutButton>
        </S.InnerLeftBox>
        <S.InnerRightBox>
          <S.MainFlex>
            <S.Column>
              <S.Pig src="myPage/Pig.png" />
              <S.Title>소나기 포인트</S.Title>
              <S.Middle>0원</S.Middle>
              <S.MainBottom>충전 내역</S.MainBottom>
            </S.Column>
            <S.Column>
              <S.Hearts src="myPage/Hearts.png" />
              <S.Title>찜한 작품</S.Title>
              <S.Middle>0권</S.Middle>
              <S.MainBottom>찜한 내역</S.MainBottom>
            </S.Column>
            <S.Column>
              <S.MessageIcon src="myPage/Question.png" />
              <S.Title>1:1 문의</S.Title>
              <S.Middle>0건</S.Middle>
              <S.MainBottom>문의 내역</S.MainBottom>
            </S.Column>
          </S.MainFlex>
        </S.InnerRightBox>
      </S.LargeBox>
    </S.Wrapper>
  );
}
