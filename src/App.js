import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HeaderButton from './components/common/HeaderButton';
import { FaUserAlt } from 'react-icons/fa';
import { MdFindInPage } from 'react-icons/md';
import { FaExchangeAlt } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';
import { FiSettings, FiEye } from 'react-icons/fi';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const LeftWrap = styled.div`
  width: 75%;
  border: 1px solid red;
`;
const RightWrap = styled.div`
  width: 25%;
  border: 1px solid #000;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
`;

const Main = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 500px;
  margin-top: 20px;
`;
const FindBlock = styled.div`
  height: 100%;
  width: 49%;
  border: 1px solid green;
`;
const ResultBlock = styled.div`
  height: 100%;
  width: 49%;
  border: 1px solid grey;
`;

const InfoBlock = styled.div``;

const MessageBlock = styled.div``;
const Output = styled.section``;
const VideoList = styled.section``;

function App() {
  return (
    <Wrapper>
      <LeftWrap>
        <Header>
          <HeaderButton>
            <FaUserAlt />
          </HeaderButton>
          <HeaderButton>
            <MdFindInPage />
          </HeaderButton>
          <HeaderButton>
            <FaExchangeAlt />
          </HeaderButton>
          <HeaderButton>
            <AiFillCaretRight />
          </HeaderButton>
          <HeaderButton>
            <FiEye />
          </HeaderButton>
          <HeaderButton>
            <FiSettings />
          </HeaderButton>
        </Header>
        <Main>
          <FindBlock></FindBlock>
          <ResultBlock></ResultBlock>
        </Main>
        <InfoBlock></InfoBlock>
        <MessageBlock></MessageBlock>
      </LeftWrap>
      <RightWrap></RightWrap>
    </Wrapper>
  );
}

export default App;
