import styled from "styled-components";

export const InfoContainerStyled = styled.ul`
  background-color: ${({ theme }) => theme.lightTheme.mainBG};
  border-radius: 15px;
  padding: 15px 86px 17px 32px;

  grid-column: 2 / 3;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.lightTheme.darkBlue};
    font-size: 13px;
    font-weight: 400;
  }

  li > p:nth-child(2) {
    color: ${({ theme }) => theme.lightTheme.black};
    font-size: 22px;
    font-weight: 700;
    font-style: normal;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 18px 14px;
    justify-content: space-around;

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;
