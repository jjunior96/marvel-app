import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #292d3abf;
  border-radius: 0 8px 8px 0;
  border: 0;
  padding: 0 1.6rem;
  width: 160px;
  /* margin-top: 1.6rem; */
  color: #fff;
  font-weight: 400;
  font-size: 1.6rem;
  height: 56px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#292d3abf')};
  }
`;
