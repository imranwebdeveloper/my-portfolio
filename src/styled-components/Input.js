import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  background: rgb(28, 40, 73) none repeat scroll 0% 0%;
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  font-size: inherit;
  border-radius: 3px;
  color: inherit;
`;
