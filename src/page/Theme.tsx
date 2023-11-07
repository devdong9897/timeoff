import ThemeList from "../components/theme/ThemeList";
import ThemeMap from "../components/theme/ThemeMap";
import ThemeTitle from "../components/theme/ThemeTitle";
import { ThemeContainerWidths } from "../../src/styles/ThemeTitleStyle";

const Theme = () => {
  return (
    <>
      <ThemeTitle />
      <ThemeContainerWidths>
        <ThemeMap />
        <ThemeList />
      </ThemeContainerWidths>
    </>
  );
};

export default Theme;
