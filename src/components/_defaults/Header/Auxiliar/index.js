import React from 'react';
import PropTypes from 'prop-types';
import './Auxiliar.css';
const Auxiliar = ({children, orientation}) => {
  return (
    <span styleName={orientation}>
      {children}
    </span>
  );
};
Auxiliar.propTypes = {
  children: PropTypes.object,
  orientation: PropTypes.string.isRequired
};
Auxiliar.defaultProps = {
  children: null
};
export default Auxiliar;
