import axios from "axios";

interface ThemeItem {
  title: string;
  startDate: string;
  endDate: string;
  eventEndDate: string;
  address: string;
  addr1: string;
  img: string;
  firstImage: string;
}

export const getThemeList = async (): Promise<ThemeItem[]> => {
  try {
    const res = await axios.get(
      `https://port-0-time-off-57lz2alptiphb4.sel4.cloudtype.app/event/1`,
    );
    console.log(res);
    const result = res.data;
    console.log(result);
    return result;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
