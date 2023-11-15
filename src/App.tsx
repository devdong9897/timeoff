import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./page/Layout";
import Main from "./page/Main";
import Theme from "./page/Theme";
import Tlog from "./page/Tlog";
import Write from "./page/Write";
import TravleMap from "./page/TravleMap";
import MyPage from "./page/MyPage";
import About from "./page/About";
import Intro from "./page/Intro";
import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="theme" element={<Theme />} />
          <Route path="tlog" element={<Tlog />} />
          <Route path="write" element={<Write />} />
          <Route path="travlemap" element={<TravleMap />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/" element={<Intro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
