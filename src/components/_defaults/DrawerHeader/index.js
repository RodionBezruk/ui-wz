import React, {PropTypes} from 'react';
import './DrawerHeader.css';
const DrawerHeader = ({
  style: state
}) => {
  return (
    <div styleName='wrapper'>
      {
        state.drawers.length > 1 ?
        state.drawers.map((drawer, index) => {
          return (
            <button
              key={drawer.name}
              onClick={function () {
                return state.onTabClick(index);
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
  style: PropTypes.object.isRequired
};
export default DrawerHeader;
