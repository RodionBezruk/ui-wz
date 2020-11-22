import React from 'react';
import './DrawerHeader.css';
const drawerHeader = ({
  style: state
}) => (
  <div styleName='wrapper'>
    {state.drawers.length > 1
      ? state.drawers.map((drawer, index) => (
      <button
        styleName='button'
        key={index}
        onClick={()=>(state.onTabClick(index))}
      >
        {drawer.params.title ? drawer.params.title : drawer.name}
      </button>
    ))
    : null}
  </div>
);
export default drawerHeader;
