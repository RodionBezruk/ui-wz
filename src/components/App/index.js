import React, {PropTypes} from 'react';
import {UIView} from 'ui-router-react';
import './App.css';
import Drawers from '../Drawers';
const App = ({style: state}) => {
  return (
    <div styleName='content'>
      <UIView
        className='onlyForProps'
        name='header'
        style={state}
      />
      <div styleName='main'>
        <Drawers
          currentDrawer={state.drawerIndex}
          currentTab={state.tabIndex}
          docked={state.drawerDocked}
          drag={state.drawerDrag}
          drawers={state.drawers}
          hover={state.drawerHover}
          open={state.drawerOpen}
          orientation={state.orientation}
          selectDrawer={state.whenDrawerChange}
          tabs={state.tabs}
          toggle={state.whenDrawerToggle}
        />
        <UIView
          className='onlyForProps'
          name='tabs'
          style={state}
        />
      </div>
    </div>
  );
};
App.propTypes = {
  style: PropTypes.object.isRequired
};
export default App;
