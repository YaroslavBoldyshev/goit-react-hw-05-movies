import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Casts = ({ cast }) => {
  return (
    <Item>
      <img
        width="100"
        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
        alt=""
      />
      <p>{cast.name}</p>
      <p>{cast.character || 'unknown'}</p>
    </Item>
  );
};

Casts.propTypes = {
  cast: PropTypes.object,
};

const Item = styled.li`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
`;
