import React, {PropTypes} from 'react';
import {UIView} from 'ui-router-react';
import './App.css';
import Drawers from '../Drawers';
const App = ({style: state}) => (
  <div styleName='content'>
    <UIView
      name='header'
      className='onlyForProps'
      style={state}
    />
    <div styleName='main'>
      <Drawers
        open={state.drawerOpen}
        orientation={state.orientation}
        drag={state.drawerDrag}
        docked={state.drawerDocked}
        hover={state.drawerHover}
        toggle={state.whenDrawerToggle}
        tabs={state.tabs}
        currentTab={state.tabIndex}
        drawers={state.drawers}
        currentDrawer={state.drawerIndex}
        selectDrawer={state.whenDrawerChange}
      />
      <UIView
        name='tabs'
        className='onlyForProps'
        style={state}
      />
    </div>
  </div>
)
App.propTypes = {
  style: PropTypes.object.isRequired
};
export default App;
