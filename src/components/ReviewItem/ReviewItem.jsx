import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ReviewItem = ({ review }) => {
  return (
    <Item>
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </Item>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object,
};

const Item = styled.li`
  padding-left: 16px;
`;
