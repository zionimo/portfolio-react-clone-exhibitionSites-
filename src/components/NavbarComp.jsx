import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import leeumLogo from "../img/leeumLogo.png";

const NavbarComp = () => {
  // 데이터
  const [login, setLogin] = useState(true);
  const data = useContext(DataContext);

  // 네비게이터
  const navigate = useNavigate();

  // 컴포넌트가 마운트 되자마자 로그인정보 확인
  useEffect(() => {
    setLogin(data.state.user ? true : false);
  }, [data.state.user]); //새로 로그인을 했을때 화면이 바뀌게 설정

  const loginCheck = () => {
    data.state.user ? navigate("/mypage") : navigate("/login");
    login(true);
  };

  const logoutCheck = () => {
    setLogin(false);
    data.action.setUser(null);
    navigate("/");
  };

  // Logout을 위한 이벤트 함수
  const logOut = () => {
    setLogin(false); // 컴포넌트를 바꾸주기 위해 수정
    // userd의 값을 null로 바꿔줌
    data.action.setUser(null);
    // 다른곳에서 로그아웃을해도 항상 홈으로 돌아감
    navigate("/");
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          {/* 홈 로고 */}
          <h1>
            <Navbar.Brand href="/">
              <img src={leeumLogo} alt="leeumLogo" />
            </Navbar.Brand>
          </h1>

          {/* 메뉴 */}
          <Nav className="me-auto">
            <Nav.Link href="/magazine">매거진</Nav.Link>
            <Nav.Link href="/exhibition">전시</Nav.Link>
            <Nav.Link href="/purchase">작품구매</Nav.Link>
            <Nav.Link href="/artist">작가</Nav.Link>
          </Nav>

          {/* 로그인, 회원가입 */}
          <div className="Login">
            {login ? (
              <div>
                <button
                  onClick={() => {
                    navigate("/mypage/");
                  }}
                >
                  마이페이지
                </button>
                <button onClick={logoutCheck}>로그아웃</button>
              </div>
            ) : (
              <button onClick={loginCheck}>로그인</button>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
