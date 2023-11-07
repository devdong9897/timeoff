import styled from "@emotion/styled";

export const ThemeListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 200px;
  padding: 10px;
  background-color: #d2b6d3;
  border-radius: 8px;
  text-align: center;

  img {
    width: 100%;
    max-height: 200px;
  }

  h2 {
    margin: 10px 0;
    font-size: 18px;
  }
`;
