const { default: styled } = require('styled-components');

export const Header = styled.header`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 25px;
  & > nav {
    display: flex;
    gap: 25px;
    & > a {
      font-weight: 800;
      font-size: 24px;
      color: black;
      text-decoration: none;
      padding: 5px;
      transition: color 250ms ease-in;
      &:hover {
        color: orangered;
      }
      &.active {
        color: orangered;
      }
    }
  }
`;
