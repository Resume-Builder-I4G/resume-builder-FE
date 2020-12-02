import styled from "styled-components";

const MainContent = styled.div`
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;
  margin: 30px 0;
  padding: 30px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 500px) {
    margin-top: 35px;
  }
`;
const StyledInputForm = styled.div`
  padding: 0;
  border-radius: 6px;
  margin-bottom: 30px;
`;

const StyledInputLabel = styled.label`
  .input-form label {
    color: #474747;
    font-size: 1.25rem;
    line-height: 24px;
    font-weight: 400;
  }
`;

const StyledInputInput = styled.input`
  background-color: #f8f8f8;
  border: 1px solid #cdcdcd;
  height: 50px;

  &::placeholder {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const StyledInputTextarea = styled.textarea`
  height: 300px;
`;

const StyledNext = styled.button`
  width: 210px;
  background-color: #216de0;
  border: 1px solid #216de0;
  color: #fff !important;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 1% 1%;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 6px;

  &:hover {
    text-decoration: underline #fff;
    color: #fff !important;
  }
`;

const StyledPrev = styled.button`
  width: 210px;
  background-color: #fff;
  color: #216de0;
  border: 1px solid #216de0;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 1% 1%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-right: 20px;
  border-radius: 6px;

  &:hover {
    color: #216de0;
    text-decoration: underline #216de0;
  }
`;

const StyledAddItemText = styled.button`
  font-size: 1.3rem;
  color: #216de0;
`;

const StyledAddItemWrap = styled.div`
  display: flex;
  justify-content: end;
  text-align: right;
  padding-right: 20px;

  @media (max-width: 500px) {
    display: flex !important;
    justify-content: end !important;
    text-align: right;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
`;

export {
  MainContent,
  StyledInputForm,
  StyledInputLabel,
  StyledInputInput,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
  StyledAddItemText,
  StyledAddItemWrap,
  Buttons,
};
