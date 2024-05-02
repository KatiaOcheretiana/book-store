import styled from "styled-components";

export const ItemBox = styled.div`
  height: 100%;
  padding: 20px;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardTextContent = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BookImg = styled.img`
  height: 250px;
  width: auto;
  object-fit: contain;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 20px;
  line-height: 150%;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #11101c;
`;

export const CardDescription = styled.span`
  font-weight: 500;
  color: #8a8a89;
`;
