import styled from 'styled-components';

export const Back = styled.p`
  display: block;
  width: 100px;
  height: 35px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  background-color: antiquewhite;
  margin: 25px 0px 0px 25px;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  img {
    display: block;
    width: 300px;
    margin: 25px;
  }
  div {
    width: 500px;
  }
`;

export const AdditionalInformation = styled.div`
  margin-left: 25px;
`;
