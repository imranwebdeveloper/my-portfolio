import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.7rem;
  font-size: bold;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.color};
`;
