import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  height: 100px;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;

  background: rgb(28, 40, 73);
`;
