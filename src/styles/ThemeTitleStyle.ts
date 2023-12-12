import styled from "@emotion/styled";
export const ThemeContainer = styled.div`
  h1 {
    color: #006dab;
    margin-top: 50px;
  }
  .theme-box-container {
    display: flex;
    justify-content: center;
    gap: 3px;
    margin-top: 20px;
    p {
      font-size: 25px;
      color: #fff;
    }
  }
  .theme-box {
    width: 260px;
    height: 300px;
    font-weight: 700;
    background-color: #006dab;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    border-radius: 20px;
    cursor: pointer;
  }
  .attraction {
    background-image: url("https://www.agoda.com/wp-content/uploads/2019/03/Seoul-attractions-Bukchon-Hanok-Village.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(1);
  }
  .attraction:hover {
    filter: brightness(0.5);
  }
  .food {
    background-image: url("https://cdn.mindgil.com/news/photo/202105/71366_8244_3950.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(1);
  }
  .food:hover {
    filter: brightness(0.5);
  }
  .camping {
    background-image: url("https://www.hyundai.co.kr/image/upload/asset_library/MDA00000000000017992/18af512c31cb4a29a59a61f8a8cf06e6.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(1);
  }
  .camping:hover {
    filter: brightness(0.5);
  }
  .festival {
    background-image: url("https://mblogthumb-phinf.pstatic.net/MjAxNzA2MDhfMjUw/MDAxNDk2ODg4ODg0NzAy.dQl8d_MqgDXPnkbYkvZDHqFwuf9ZtTHNU9NJh4s1ybEg.AS2_lZo4gwwXcZSeQriv2G8HhZoKcDhbyvkYwcNqbYYg.JPEG.tech0195/%EC%95%84%EC%9D%B4%ED%8F%B0%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B43.jpg?type=w800");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(1);
  }
  .festival:hover {
    filter: brightness(0.5);
  }
`;

export const ThemeContainerWidths = styled.div`
  display: flex;
  align-items: center;
`;
