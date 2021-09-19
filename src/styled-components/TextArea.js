import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: ${({ theme }) => theme.mainSectionBg};
  border: none;
  border-radius: 3px;
  height: 150px;
  color: ${({ theme }) => theme.colorSec};
`;
