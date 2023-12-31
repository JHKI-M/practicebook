import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import swal from "sweetalert";

function SignInCard(props) {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const navigate = useNavigate();

  const goSignUpPage = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    // 로그인 로직을 여기에 구현
    console.log("로그인!");
    swal({
      title: "로그인 되었습니다.",
      icon: "success",
      buttons: "확인",
    }).then(() => {
      setIsLogin({ isLogin: true });
      navigate("/");
    })
  }


  return (
    <LoginCardbox>
      <TitleHeaderContainer>
        <Title>로그인</Title>
        <Subtitle>로그인을 통해 BOOKER을 사용해 보세요!</Subtitle>
      </TitleHeaderContainer>
      <IconInputContainer>
        <StyledIconFaUserAlt />
        <AuthInput placeholder="아이디를 입력하세요." />
      </IconInputContainer>

      <IconInputContainer>
        <StyledIconFaLock />
        <AuthInput placeholder="비밀번호를 입력하세요." />
      </IconInputContainer>

      <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
      <SignUpTextContainer>
        <p onClick={goSignUpPage}>회원가입</p>
      </SignUpTextContainer>
    </LoginCardbox>
  );
}

export default SignInCard;

const LoginCardbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  width: 410px;
`;

const TitleHeaderContainer = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #b4b4b4;
  padding-bottom: 30px;
  width: 100%;
`;

const Title = styled.h1`
  color: #344a39;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const IconInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const AuthInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  padding-left: 50px;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  &:focus {
    outline: none;
    border: 1px solid #344a39;
  }
`;

const SignUpTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
  > p {
    /* color: #344a39; */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledIconFaUserAlt = styled(FaUserAlt)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #b4b4b4;
`;

const StyledIconFaLock = styled(FaLock)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #b4b4b4;
`;

const ButtonStyle = styled.button`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    align-self: center;
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const LoginBtn = styled(ButtonStyle)`
  background-color: #344a39;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;
`;
