import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
box-sizing: border-box;
font-family: Arial, Helvetica, sans-serif;
}`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #26309e;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Info = styled.p`
  font-size: 1.5em;
  color: #26309e;
  text-align: center;
  @media (max-width: 500px) {
    width: 90vw;
  }
`;
export const InfoMax = styled(Info)`
  color: #c91a1a;
  font-weight: 700;
`;

export const Input = styled.input`
  font-size: 1.5em;
  color: #26309e;
  height: auto;
  width: 30vw;
  margin: 1em;
  padding: 0.5em;
  border-radius: 0.5em;
  border: solid 2px #26309e;
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

export const InputSubmit = styled(Input)`
  width: 150px;
  background-color: #fff;
  border: solid 2px #26309e;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #d1d3f0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListElement = styled.li`
  display: flex;

  align-items: center;
  margin-bottom: 1.5em;
`;

export const ListElementText = styled.p`
  border-radius: 0.5em;
  font-size: 1.5em;
  height: auto;
  width: 30vw;
  padding: 1em 2em;
  margin: 0.5em 0;
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

export const ListElementTextIncompleted = styled(ListElementText)`
  background-color: #e4e5f2;
  color: #26309e;
`;

export const ListElementTextCompleted = styled(ListElementText)`
  background-color: gray;
  text-decoration: line-through;
  color: black;
`;

export const Button = styled.i`
  color: black;
  font-size: 3em;
  opacity: 0.5;
  transition: 0.3s ease-in-out;
  margin-left: 1em;
  &:hover {
    opacity: 1;
  }
`;

export const DoneCheck = styled(Button)`
  &:hover {
    color: #097509;
  }
`;

export const DeleteCheck = styled(Button)`
  &:hover {
    color: red;
  }
`;
