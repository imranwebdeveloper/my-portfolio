import styled from 'styled-components';

export const InputField = styled.input`
  width: 100%;
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme.mainSectionBg};
  border: none;
  border-radius: 3px;
  color: ${({ theme }) => theme.colorSec};
`;
