import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  column-gap: 37px;

  grid-column: 1 / span 3;

  @media (max-width: ${({ theme }) => theme.tablet}) {
  }

  @media (min-width: ${({ theme }) =>
      theme.mobile.minWidth}) and (max-width: ${({ theme }) =>
      theme.mobile.maxWidth}) {
    column-gap: 19px;
  }
`;

export const ProfileImage = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;

  grid-column: 1 / 2;
  grid-row: 1 / -1;

  @media (min-width: ${({ theme }) =>
      theme.mobile.minWidth}) and (max-width: ${({ theme }) =>
      theme.mobile.maxWidth}) {
    width: 70px;
    height: 70px;
  }
`;

export const Name = styled.p`
  margin-bottom: 2px;
  font-size: 26px;
  font-weight: 700;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    grid-column: 2 / span 3;
  }

  @media (min-width: ${({ theme }) =>
      theme.mobile.minWidth}) and (max-width: ${({ theme }) =>
      theme.mobile.maxWidth}) {
    font-size: 16px;
  }
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: ${({ theme }) => theme.colors.userName};

  grid-column: 2 / 3;

  @media (min-width: ${({ theme }) =>
      theme.mobile.minWidth}) and (max-width: ${({ theme }) =>
      theme.mobile.maxWidth}) {
    font-size: 13px;
  }
`;

export const JoinDate = styled.p`
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: var(--grey-light-mode);

  justify-self: end;
  grid-column: 3 / span 3;
  grid-row: 1 / 2;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    grid-column: 2 / span 2;
    grid-row: 3 / 4;
    justify-self: unset;
  }

  @media (min-width: ${({ theme }) =>
      theme.mobile.minWidth}) and (max-width: ${({ theme }) =>
      theme.mobile.maxWidth}) {
    font-size: 13px;
  }
`;

export const ProfileBio = styled.p`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: var(--grey-light-mode);

  grid-column: 2 / span 3;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 38px;
    grid-column: 1 / span 4;
    grid-row: 4 / 4;
  }

  @media (min-width: ${({ theme }) =>
      theme.mobile.minWidth}) and (max-width: ${({ theme }) =>
      theme.mobile.maxWidth}) {
    margin-top: 30px;
    grid-column: 1 / span 4;
  }
`;
