import styled from "styled-components";

export const UserDashBoardStyled = styled.div`
  width: 100%;
  padding: 48px 42px 48px 42px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 15px;
  box-shadow: 0px 16px 30px rgba(70, 96, 187, 0.198567);

  display: grid;
  grid-template-columns: 117px 2fr;
  gap: 32px 37px;

  li {
    list-style: none;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 32px 24px;
  }
`;
