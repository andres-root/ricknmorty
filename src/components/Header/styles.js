import styled from 'styled-components';


const HeaderContainer = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-flow: column;
  height: 300px;
  justify-content: center;
`;

const Title = styled.h1`
  color: rgb(51, 51, 51);
  margin: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  background-color: #202329;
  color: rgb(255, 152, 0);
  margin: 0;
  padding: 4px 8px;
  text-transform: uppercase;
`;

export { HeaderContainer, Title, Subtitle };
