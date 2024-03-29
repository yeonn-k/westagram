import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div id="wrapLogin">
        <h1>Westagram</h1>
        <input
          id="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input id="password" type="password" placeholder="비밀번호" />
        <Link to="Main">
          <button>로그인</button>
        </Link>
        <a id="findPassword" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </>
  );
};

export default Login;
