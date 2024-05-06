import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkBack = styled(Link)`
  display: grid;
  grid-template-columns: auto auto;
  width: 120px;

  text-decoration: none;
  border-radius: 100px;
  padding: 12px 18px 12px 12px;
  background-color: rgba(90, 90, 90, 0.2);

  margin-bottom: 20px;

  &:hover {
    background-color: rgba(90, 90, 90, 0.6);
  }

  &:focus {
    background-color: rgba(90, 90, 90, 0.6);
  }
`;

export const PriceText = styled.p`
  font-size: 24px;
  line-height: 150%;
  margin-top: 40px;
  text-decoration: underline;
`;
