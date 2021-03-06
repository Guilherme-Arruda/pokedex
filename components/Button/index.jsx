import styled from 'styled-components';

const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.color};
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default Button;
