import React, {PropTypes} from 'react';
import './Auxiliar.css';
const Auxiliar = ({children, orientation}) => {
  return (
    <span styleName={'.' + orientation}>
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
