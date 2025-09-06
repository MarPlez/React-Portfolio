import styled, { keyframes } from "styled-components";

export const RoleChange = keyframes`
  0%   { transform: translateY(0); }
  25%  { transform: translateY(-1.2em); }
  50%  { transform: translateY(-2.4em); }
  75%  { transform: translateY(-3.6em); }
  100% { transform: translateY(-4.8em); }
`;

export const TextChanger = styled.div`
  font-size: clamp(24px, 3vw, 36px);
  color: black;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RolesContainer = styled.div`
  overflow: hidden;
  height: 1.2em; 
  position: relative;
  width: 100%;
`;

export const RolesInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  animation: ${RoleChange} 4.5s infinite;
  animation-delay: 3s;
`;

export const Role = styled.span`
  height: 1.2em;
  line-height: 1em;
  font-weight: bold;
  color: #a85700;
  white-space: nowrap;
  overflow: hidden;

`;
