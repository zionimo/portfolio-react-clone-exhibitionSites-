import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

// 공용으로 쓸 데이터컨텍스트 Provider 추가
import { DataProvider } from "./context/DataContext";

// 라이브러리 컴포넌트 import
import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import Exhibition from "./pages/Exhibition";
import Purchase from "./pages/Purchase";
import Artist from "./pages/Artist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";
import Mypage from "./pages/Mypage";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="magazine" element={<Magazine />} />
            <Route path="exhibition" element={<Exhibition />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="artist" element={<Artist />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="mypage" element={<Mypage />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
};

export default App;
