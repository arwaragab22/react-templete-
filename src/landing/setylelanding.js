import styled from "styled-components";



export const Homesec = styled.div`
  height: 500px;
  background-image: url(${require(`../images/home-bg.jpg`)});
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;;
`;

export const Homeinformation = styled.div`
  display: flex;
  flex-direction: column;
align-items:center

`;

export const Hometitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #5e5e5e;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 30px;
width:100%
  }
`;

export const Homeinfo = styled.h4`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align:start;
  }
`;

export const Homedesc = styled.div`
  font-size: 20px;
  line-height: 1.5;
  color: #888;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: none;
  }
`;

export const Homedescspan = styled.span`
  color: #000;
`;

export const Homebtn = styled.button`
  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #a97155;
    color: #eb5424;
  }
`;
