import styled from "styled-components";

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
  height: 300px !important;
`;

const StyledNext = styled.a`
  width: 210px;
  background-color: #216de0;
  border: 1px solid #216de0;
  color: #fff !important;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 1% 3%;
  text-align: center;
  border-radius: 6px;

  &:hover {
    text-decoration: underline #fff;
    color: #fff !important;
  }
`;

const StyledPrev = styled.a`
  width: 210px;
  background-color: #fff;
  color: #216de0;
  border: 1px solid #216de0;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 1% 1%;
  text-align: center;
  margin-right: 20px;
  border-radius: 6px;

  &:hover {
    color: #216de0;
    text-decoration: underline #216de0;
  }
`;

const StyledAddItemText = styled.a`
  font-size: 1.3rem;
  color: #216de0;
`;

const StyledAddItemWrap = styled.div`
  text-align: right;
  padding-right: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
`;

export {
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
