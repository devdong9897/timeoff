import axios from "axios";

export interface ThemeItem {
  title: string;
  startDate: string;
  endDate: string;
  eventEndDate: string;
  address: string;
  addr1: string;
  img: string;
  firstImage: string;
}

const getThemeList = async () => {
  try {
    const res = await axios.get("http://13.125.252.184:8080/event/1");
    const data = res.data as ThemeItem[];
    console.log("Response Data:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("에러에러에러");
  }
};

export default { getThemeList };
