import {
  ThemeTitle,
  ThemeBoxContainer,
  ThemeBox1,
  ThemeBox2,
  ThemeBox3,
  ThemeBox4,
} from "../styles/ThemeStyle";
import ThemeMap from "../components/ThemeMap";
import ThemeList from "../components/ThemeList";


const Theme = () => {
  return (
    <>
      <ThemeTitle>
        <h1>이런 테마여행 어떠세요?</h1>
      </ThemeTitle>

      <ThemeBoxContainer>
        <ThemeBox1>힐링</ThemeBox1>
        <ThemeBox2>바다</ThemeBox2>
        <ThemeBox3>인생샷</ThemeBox3>
        <ThemeBox4>축제</ThemeBox4>
      </ThemeBoxContainer>

      <ThemeMap />
      <ThemeList />
    </>
  );
};

export default Theme;
