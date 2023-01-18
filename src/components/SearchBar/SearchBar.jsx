import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(keyword);
    setKeyword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={e => setKeyword(e.currentTarget.value)}
        value={keyword}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

const Form = styled.form`
  padding: 12px;
`;

const Input = styled.input`
  height: 24px;
  border: 1px solid black;
  background-color: #fff2f2;
`;

const Button = styled.button`
  height: 28px;
  width: 70px;
  border: 1px solid black;
  background-color: pink;
  text-decoration: none;
  font-weight: 500;
  transition-duration: 250ms;
  :hover {
    background-color: #ffe6e6;
  }
`;
