import styled from "@emotion/styled";

export const ThemeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const Card = styled.div`
  display: flex;
  width: 200px;
  padding: 10px;
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
export const CardContent = styled.div`
  flex: 1;
  text-align: left;
  padding-left: 10px;
`;
export const CardTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0;
  font-size: 18px;
`;
export const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 10px;
`;
