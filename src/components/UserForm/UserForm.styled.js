import styled from "styled-components";

import { Field, Form } from "formik";

export const FormFieds = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 800px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 310px;
  }
`;

export const FieldForm = styled(Field)`
  border-radius: 12px;
  padding: 16px 18px 16px 18px;
  width: 100%;

  ::placeholder {
    font-size: 16px;
    line-height: 125%;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const ErrorText = styled.div`
  position: absolute;
  font-size: 12px;
  left: 6px;
  color: red;
`;
