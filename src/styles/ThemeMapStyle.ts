import styled from "@emotion/styled";

interface ThemeMapContainerProps {
  id: string | undefined;
  uu: string | undefined;
}

export const ThemeMapContainer = styled.div<ThemeMapContainerProps>`
  h1 {
    color: #006dab;
    margin-top: 50px;
  }
  .map-box {
    width: 600px;
    height: 830px;
    margin-bottom: 50px;
    background: #c3ebff;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 45px;
    border-radius: 20px;
    svg path {
      background: red;
    }
    svg path {
      transition:
        fill 0.3s,
        filter 0.3s,
        transform 0.3s;
    }
  }

  svg g:hover text {
    outline: none;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }

  text {
    pointer-events: none;
  }
  svg path:hover {
    outline: none;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
    transform: translateY(-5px);
  }
  svg {
    #${props => props.id} {
      fill: ${props => props.uu};
    }
  }
`;
