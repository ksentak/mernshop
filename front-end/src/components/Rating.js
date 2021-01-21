import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : farStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : farStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : farStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : farStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : farStar}
        ></FontAwesomeIcon>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825'
};

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Rating;
