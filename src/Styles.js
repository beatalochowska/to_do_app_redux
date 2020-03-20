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
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5em;
`;

export const ListElementText = styled.p`
  background-color: #e4e5f2;
  border-radius: 0.5em;
  font-size: 1.5em;
  color: #26309e;
  height: auto;
  width: 30vw;
  padding: 1em 2em;
  margin: 0.5em 0;
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

export const Button = styled.button`
  font-size: 1.2em;
  height: auto;
  width: auto;
  padding: 0.5em 1em;
  background-color: #fff;
  border-radius: 0.5em;
  transition: background-color 0.3s ease-in-out;
`;

export const DoneButton = styled(Button)`
  color: #097509;
  border: solid 1px #097509;

  &:hover {
    background-color: #c5ebc5;
  }
`;

export const DeleteButton = styled(Button)`
  color: #c21021;
  border: solid 1px #c21021;
  &:hover {
    background-color: #f7cbcf;
  }
`;
