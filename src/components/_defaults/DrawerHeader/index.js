import React, {PropTypes} from 'react';
import './DrawerHeader.css';
import defaults from '../../../defaults';
const DrawerHeader = ({
  drawers,
  onTabSelect
}) => {
  return (
    <div styleName='wrapper'>
      {
        drawers.length > 1 ?
        drawers.map((drawer, index) => {
          return (
            <button
              key={drawer.name}
              onClick={function () {
                return onTabSelect(index);
              }}
              styleName='button'
            >
              {drawer.params.title ? drawer.params.title : drawer.name}
            </button>
          );
        }) : null
      }
    </div>
  );
};
DrawerHeader.propTypes = {
  drawers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTabSelect: PropTypes.func.isRequired
};
DrawerHeader.defaultProps = {
  drawers: defaults.drawers,
  onTabSelect: defaults.onTabSelect
};
export default DrawerHeader;
