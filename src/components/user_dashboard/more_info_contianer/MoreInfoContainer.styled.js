import styled from "styled-components";

export const MoreInfoContainerStyled = styled.ul`
  grid-column: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 19px;
  column-gap: 15px;

  li > p {
    color: ${({ theme }) => theme.lightTheme.darkBlue};

    display: flex;
    align-items: center;
    gap: 20px;
  }

  li > p > img {
    color: ${({ theme }) => theme.lightTheme.darkBlue};
    width: auto;
    height: 20px;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
