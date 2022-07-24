import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 20%;
  border: 1px solid black;
  margin: 0 auto;
  position: absolute;
  bottom: 80px;
`;

const Header = styled.div``;

const WrapBody = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
`;

const WrapIconTitle = styled.div`
  display: flex;
`;

const Icon = styled.div``;

const Title = styled.div``;

const UpDown = styled.div``;

export default function ReadSetting() {
  return (
    <Wrapper>
      <Header>Header</Header>
      <WrapBody>
        <WrapIconTitle>
          <Icon>Icon</Icon>
          <Title>Title</Title>
        </WrapIconTitle>
        <UpDown>UpDown</UpDown>
      </WrapBody>
    </Wrapper>
  );
}
