import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

// 백틱 적용됨.
// styled.p는 styled-components를 사용하여
// <p> 태그에 스타일을 적용하는 역할을 합니다.
const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-align: center;
`;

export default function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}