import styled from 'styled-components';

export const Error = () => {
  return <Err>Not Found :{'('}</Err>;
};
const Err = styled.div`
  width: 400px;
  margin: auto;
  padding-top: 200px;
  font-size: 60px;
  font-weight: 700;
`;
