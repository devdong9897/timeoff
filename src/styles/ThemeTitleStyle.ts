import styled from "@emotion/styled";

export const ThemeContainer = styled.div`
  h1 {
    color: #006dab;
    margin-top: 50px;
  }
  .theme-box-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .theme-box {
    width: 350px;
    height: 500px;
    font-weight: 700;
    background-color: #006DAB;
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
}
`;
