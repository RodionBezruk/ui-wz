import React, {PropTypes} from 'react';
const DrawerToggle = ({toggle}) => (
  <button onClick={()=>(toggle())}>
    Toggle Drawer
  </button>
)
DrawerToggle.propTypes = {
  toggle: PropTypes.func.isRequired
}
export default DrawerToggle;
