import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';
const Title = ({title, version}) => {
  return (
    <h3 styleName='title'>
      {title}&nbsp;{version}
    </h3>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired
};
export default Title;
