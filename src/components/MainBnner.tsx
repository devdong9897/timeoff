// import React, { useState } from "react";
// import { Bnner } from "../styles/MainBnnerStyle";

// interface mainSlide {
//   pk: number;
//   title: string;
//   img: string;
// }

// const MainBnner: React.FC = () => {
//   const mainData: mainSlide[] = [
//     {
//       pk: 1,
//       title: "1번 슬라이드 테스트",
//       img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
//     },
//     {
//       pk: 2,
//       title: "2번 슬라이드 테스트",
//       img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
//     },
//     {
//       pk: 3,
//       title: "3번 슬라이드 테스트",
//       img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
//     },
//     {
//       pk: 4,
//       title: "걸어서 말고 차타고 테마 여행",
//       img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
//     },
//     {
//       pk: 5,
//       title: "5번 슬라이드 테스트",
//       img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
//     },
//   ];

//   const [mainPage, setMainPage] = useState(1);
//   const toPrev = () => {
//     setMainPage(prev => Math.max(prev - 1, 1));
//   };
//   const toNext = () => {
//     setMainPage(prev => Math.min(prev + 1, 1));
//   };

//   return (
//     <Bnner>
//       <div className="main-top">
//         {mainData.slice(mainPage - 1).map(data => (
//           <ul key={data.pk}>
//             <li className="top-img">
//               <img src={data.img} alt={data.title} />
//             </li>
//             <li className="top-info ">
//               <span>{data.title}</span>
//             </li>
//             <li className="top-detail">
//               <span>자세히 보기</span>
//             </li>
//           </ul>
//         ))}
//       </div>
//       <div className="main-section">
//         <div className="progress-width"></div>
//       </div>
//     </Bnner>
//   );
// };

// export default MainBnner;
