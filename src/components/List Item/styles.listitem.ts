import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
`;

export const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 14px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

export const StatusCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 24px;
  margin-right: 4px;
`;

export const StatusCircle = styled.div`
  width: 18px;
  height: 18px;
  background-color: #616d6450;
  border: 2px solid #78877b;
  border-radius: 50px;
  transition: scale 0.2s ease-in-out;
  :active {
    scale: 1.1;
  }
`;
