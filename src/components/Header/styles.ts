import styled from "styled-components";

export const MainDiv = styled.div`
  height: 10vh;
  width: 100vw;

  padding: 5px;
  margin: 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const SubDiv = styled.div`
  margin: 0px 50px 0px 50px;
  color: ${(props) => props.theme.colors.basic.white};

  a {
    margin-left: 20px;
    font-size: 25pt;
  }
`;