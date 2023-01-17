import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Reviews = ({ review }) => {
  return (
    <Item>
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </Item>
  );
};

Reviews.propTypes = {
  review: PropTypes.object,
};

const Item = styled.li`
  padding-left: 16px;
`;
