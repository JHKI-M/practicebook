import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";
import BookRecommendPage from "../pages/BookRecommendPage";
import BookExchangePage from "../pages/BookExchangePage";
import MyProfileEditPage from "../pages/MyProfileEditPage";
import BookDetailPage from "../pages/BookDetailPage";
import SearchPage from "../pages/SearchPage";
import SubUserBookListPage from "../pages/SubUserBookListPage";
import SignUpPage from "../pages/SignUpPage";
import DeclarationPage from "../pages/DeclarationPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/userbook" element={<SubUserBookListPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<BookDetailPage />} />
        <Route path="/edit" element={<MyProfileEditPage />} />
        <Route path="/recommend" element={<BookRecommendPage />} />
        <Route path="/exchange" element={<BookExchangePage />} />
        <Route path="/declaration" element={<DeclarationPage/>} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
