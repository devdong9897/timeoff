// import mapData from "../../api/mapData.json";
import {
  ThemeListContainer,
  // Card,
  // CardContent,
  // CardTitle,
  // CardDescription,
  CardContainer,
} from "../../styles/ThemeListStyle";

// interface Data {
//   uid: number;
//   title: string;
//   img: string;
//   description: string;
// }

// const data: Data[] = [
//   {
//     uid: 1,
//     title: "중문 해수욕장",
//     img: "https://ak-d.tripcdn.com/images/10031f000001gry63A3B0.jpg?proc=source%2Ftrip",
//     description:
//       "중문 해수욕장은 제주도의 아름다운 해변 중 하나로 유명합니다. 이곳에서 휴식을 취하고 파도 소리를 즐기세요.",
//   },
//   {
//     uid: 2,
//     title: "2023 대구 치맥페스티벌",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVX33jj3mFXL4tc13UELdpqWTFA-szOOIl_sQngAjHJ-INnnHgCu5N-jcFFK_4fihM0M&usqp=CAU",
//     description:
//       "대구 치맥페스티벌은 치킨과 맥주를 즐기는 축제로, 다양한 맛있는 음식과 음악 공연을 즐길 수 있습니다.",
//   },
//   {
//     uid: 3,
//     title: "남해 두모마을",
//     img: "https://image.ajunews.com/content/image/2019/04/18/20190418112736701546.jpg",
//     description:
//       "남해 두모마을은 아름다운 바다 풍경과 전통적인 한옥 마을로 유명합니다. 자연의 아름다움을 느껴보세요.",
//   },
//   {
//     uid: 4,
//     title: "경주 첨성대",
//     img: "https://www.gyeongju.go.kr/upload/content/thumb/20200317/7166B350C2F24E42B79CCCE51AE0166B.jpg",
//     description:
//       "경주 첨성대는 고려시대의 역사적인 유적지로, 아름다운 건축과 역사를 탐험할 수 있습니다.",
//   },
// ];
interface stateType {
  mapNumber: number;
}

const ThemeList = ({ mapNumber }: stateType) => {
  return (
    <ThemeListContainer>
      <h1>2023년 테마 추천여행지</h1>
      <CardContainer>
        {/* {data.map(item => (
          <Card key={item.uid}>
            <img src={item.img} alt={item.title} />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))} */}
      </CardContainer>
    </ThemeListContainer>
  );
};

export default ThemeList;
