import styled from "@emotion/styled";

export const ThemeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  h1 {
    color: #006dab;
    margin-bottom: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 10px;
    flex-grow: 1;
  }

  > div p {
    font-size: 16px;
    color: #555;
    margin-top: 10px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .explanation {
    font-size: 20px;
    font-weight: bold;
    color: #006dab;
  }
`;
export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
