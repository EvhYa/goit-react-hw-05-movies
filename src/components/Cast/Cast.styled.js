import styled from 'styled-components';

export const Container = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    li{
        display: flex;
        flex-direction: column;
        width: 200px;
        border: 1px solid black;
        justify-content: center;
        align-items: center;
    }
  }
`;

export const Card = styled.div`
img{
    display: block;
    width: 100px;
    height: 150px;
    margin-bottom: 5px;
}
p{
    margin: 0;
}
`;
