import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CastItem = ({ cast }) => {
  const photoSrc =
    cast.profile_path && `https://image.tmdb.org/t/p/w500/${cast.profile_path}`;

  return (
    <Item>
      <img width="100" src={photoSrc ?? ``} alt="" />
      <p>{cast.name}</p>
      <p>{cast.character || 'unknown'}</p>
    </Item>
  );
};

CastItem.propTypes = {
  cast: PropTypes.object,
};

const Item = styled.li`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
`;
