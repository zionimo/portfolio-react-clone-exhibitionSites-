import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailNewUser = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>로그인페이지</h1>
    </div>
  );
};

export default Login;
