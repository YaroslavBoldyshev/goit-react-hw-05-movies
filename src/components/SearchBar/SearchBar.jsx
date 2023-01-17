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
`;

const Button = styled.button`
  height: 30px;
  width: 70px;
`;
