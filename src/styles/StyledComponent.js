import styled from "styled-components";

//    ``

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.form`
  width: 100%;
  padding: 0 50px;
  display: flex;

  & > input {
    width: 100%;
  }
`;

export const ForecastWrapper = styled.div`
  min-width: 500px;
  min-height: 450px;
  background-color: blue;
  padding: 20px;
  margin-top: 30px;
  border-radius: 20px;
  & > ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    & > li {
      flex-direction: column;
    }
  }
`;
