import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 26px;
  color: white;
  line-height: 125%;
  letter-spacing: -0.01em;

  &:hover {
    stroke: orange;
    color: orange;
  }

  transition: all 0.5s ease-in-out;
`;
