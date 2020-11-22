import React, {PropTypes} from 'react';
const Auxiliar = ({children}) => (
  <span>
    {children}
  </span>
);
Auxiliar.propTypes = {
  orientation: PropTypes.string.isRequired
}
export default Auxiliar;
