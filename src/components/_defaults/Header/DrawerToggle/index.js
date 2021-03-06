import React from 'react';
import PropTypes from 'prop-types';
const DrawerToggle = ({toggle}) => {
  return (
    <button
      onClick={function () {
        toggle();
      }}
    >
      Toggle Drawer
    </button>
  );
};
DrawerToggle.propTypes = {
  toggle: PropTypes.func.isRequired
};
export default DrawerToggle;
