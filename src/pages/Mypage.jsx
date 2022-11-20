import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <h1>마이페이지</h1>
    </div>
  );
};

export default Mypage;
