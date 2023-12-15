import styled from "@emotion/styled";

export const Rec = styled.div`
  h2 {
    font-size: 25px;
    margin-bottom: 35px;
  }
  .item-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    img {
      position: relative;
      width: 250px;
      height: 300px;
    }
  }
  .prev-btn{
    display: block;
    position: absolute;
    bottom: -85px;
    right: 280px;
  }
  .next-btn {
    position: absolute;
    bottom: -85px;
    right: 280px;
  }
`;
