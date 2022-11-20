import { createContext } from "react";
import { useState } from "react";

// <<매거진컨텍스트>>
// 내보낸 DataContext에 value을 넣어줘서 사용
const DataContext = createContext();

// 미리 Provider를 작성하여 value값을 가진 컴포넌트를 내보냄.
const DataProvider = ({ children }) => {
  // 사용할 값들을 useState를 통해 값을 들고옴

  const [user, setUser] = useState({ name: null, profile: null });

  // 매거진 정보 : 배열로 들어감
  const [magList, setmagList] = useState([
    {
      magId: 1,
      magName: "2022년 11월 제454호",
      magDate: "2022.11.01 - 11.30",
      magPicture: ["magazine1.jpg"],
    },
    {
      magId: 2,
      magName: "2022년 10월 제453호",
      magDate: "2022.10.01 - 10.30",
      magPicture: ["magazine2.jpg"],
    },
    {
      magId: 3,
      magName: "2022년 9월 제452호",
      magDate: "2022.9.01 - 9.30",
      magPicture: ["magazine3.jpg"],
    },
    {
      magId: 4,
      magName: "2022년 8월 제451호",
      magDate: "2022.8.01 - 8.30",
      magPicture: ["magazine4.jpg"],
    },
    {
      magId: 5,
      magName: "2022년 7월 제450호",
      magDate: "2022.7.01 - 7.30",
      magPicture: ["magazine5.jpg"],
    },
    {
      magId: 6,
      magName: "2022년 6월 제449호",
      magDate: "2022.6.01 - 6.30",
      magPicture: ["magazine6.jpg"],
    },
  ]);

  // <<작품판매 컨텍스트>>

  const [productList, setProductList] = useState([
    {
      productId: 1,
      productName: "세계미술용어사전",
      productDitail: "한글세대를 위해 난해한 미술용어들을 풀어 쓴 예술사전의 베스트셀러",
      productPrice: "30,000",
      productPicture: ["purchase1.jpg"],
    },
    {
      productId: 2,
      productName: "월간미술 정기구독",
      productDitail: "전국 어디서나 편안하게 책을 받아보실 수 있습니다",
      productPrice: "180,000",
      productPicture: ["purchase2.jpg"],
    },
    {
      productId: 3,
      productName: "한국, 한국인",
      productDitail: "저자의 폭넓은 지식을 바탕으로 한·중·일 세 나라의 역사와 문화를 한 권에 담았습니다 ",
      productPrice: "35,000",
      productPicture: ["purchase3.jpg"],
    },
  ]);

  // <<작가리스트 컨텍스트>>
  const [artistList, setArtistList] = useState([
    {
      artistId: 1,
      artistName: "김도균",
      artistPicture: ["artist_김도균.jpg"],
    },
    {
      artistId: 2,
      artistName: "김옥선",
      artistPicture: ["artist_김옥선.jpg"],
    },
    {
      artistId: 3,
      artistName: "문범",
      artistPicture: ["artist_문범.jpg"],
    },
    {
      artistId: 4,
      artistName: "백현진",
      artistPicture: ["artist_백현진.jpg"],
    },
    {
      artistId: 5,
      artistName: "윤석남",
      artistPicture: ["artist_윤석남.jpg"],
    },
    {
      artistId: 6,
      artistName: "임옥상",
      artistPicture: ["artist_임옥상.jpg"],
    },
    {
      artistId: 7,
      artistName: "정연두",
      artistPicture: ["artist_정연두.jpg"],
    },
    {
      artistId: 8,
      artistName: "정희승",
      artistPicture: ["artist_정희승.jpg"],
    },
    {
      artistId: 9,
      artistName: "함경아",
      artistPicture: ["artist_함경아.jpg"],
    },
  ]);

  // 사용할 value 값을 state와 action 분리해서 넣어둠
  const value = {
    state: { user, magList, productList, artistList },
    action: { setUser, setmagList, setProductList, setArtistList },
  };
  // DataProvider를 사용할때 DataContext.Provider를 사용할 수 있도록함
  // 이때 children은 Provider을 쓸때 데이터를 공용을 쓰는 컴포넌트들

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
export { DataProvider };
