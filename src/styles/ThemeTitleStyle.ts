import styled from "@emotion/styled";
export const ThemeContainer = styled.div`
  h1 {
    color: #006dab;
    margin-top: 50px;
  }
  .theme-box-container {
    display: flex;
    justify-content: center;
    gap: 13px;
    margin-top: 20px;
  }
  .theme-box {
    width: 230px;
    height: 300px;
    font-weight: 700;
    background-color: #006dab;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 20px;
    cursor: pointer;
    p {
      font-size: 24px;
      color: #fff;
    }
  }
  .healing {
    background-image: url("https://s1.best-wallpaper.net/wallpaper/m/1708/Bamboo-forest-nature_m.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .sea {
    background-image: url("https://i.pinimg.com/originals/02/74/b4/0274b40fd63a761de0b05db9ee2f34c4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .life-shot {
    background-image: url("https://c.wallhere.com/photos/95/67/camera_Wood_Table-1996771.jpg!d");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .festival {
    background-image: url("https://mblogthumb-phinf.pstatic.net/MjAxNzA2MDhfMjUw/MDAxNDk2ODg4ODg0NzAy.dQl8d_MqgDXPnkbYkvZDHqFwuf9ZtTHNU9NJh4s1ybEg.AS2_lZo4gwwXcZSeQriv2G8HhZoKcDhbyvkYwcNqbYYg.JPEG.tech0195/%EC%95%84%EC%9D%B4%ED%8F%B0%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B43.jpg?type=w800");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const ThemeContainerWidths = styled.div`
  display: flex;
  align-items: center;
`;
