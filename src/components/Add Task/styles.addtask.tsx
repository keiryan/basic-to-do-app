import React from "react";
import styled from "styled-components";

export const PlusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50px;
`;

const SVG = styled.svg``;

export const AddTaskClosedLabel = styled.div`
  color: #666666;
  font-size: 14px;
`;

export const AddTaskClosed = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  :hover {
    cursor: pointer;
    ${PlusContainer} {
      background-color: #78877b;
    }
    ${SVG} {
      stroke: #fff;
    }
    ${AddTaskClosedLabel} {
      color: #666666;
    }
  }
`;

export const AddTaskExpanded = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px;
  border: 1px solid #78877b;
  border-radius: 6px;
`;

export const InputField = styled.input<{ bold?: { bold: boolean } }>`
  width: 100%;
  border: none;
  outline: none;
  font-weight: ${(bold) => (bold.bold ? "bold" : "normal")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 10px;
`;

export const CancelButton = styled.button`
  width: fit-content;
  background-color: #e5e5e5;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  :hover {
    cursor: pointer;
    background-color: #c9c9c9;
  }
`;

export const SubmitButton = styled(CancelButton)<{
  passesChecks: () => boolean;
}>`
  background-color: #78877b;
  color: #fff;
  pointer-events: ${({ passesChecks }) => (passesChecks() ? "auto" : "none")};
  opacity: ${({ passesChecks }) => (passesChecks() ? "1" : "0.5")};
  :hover {
    background-color: #616d64;
  }
`;

export function Plus(): JSX.Element {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1.7"
      className="w-6 h-6"
      viewBox="0 0 24 24"
      width="16"
      stroke="#000000"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      ></path>
    </SVG>
  );
}
