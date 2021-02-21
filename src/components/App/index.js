import React from 'react';
import PropTypes from 'prop-types';
import {UIView} from 'ui-router-react';
import './App.css';
import Drawers from '../Drawers';
import defaults from '../../defaults';
const App = ({
  drawerDocked,
  drawerDrag,
  drawerHover,
  drawerIndex,
  drawerOpen,
  drawers,
  orientation,
  tabIndex,
  tabs,
  title,
  version,
  whenDrawerSelect: onDrawerSelect,
  whenDrawerToggle: onDrawerToggle,
  whenTabSelect: onTabSelect
}) => {
  return (
    <div styleName='content'>
      <UIView
        name='header'
        render={(Header) => {
          return <Header
            drawerOpen={drawerOpen}
            onDrawerToggle={onDrawerToggle}
            onTabSelect={onTabSelect}
            orientation={orientation}
            tabIndex={tabIndex}
            tabs={tabs}
            title={title}
            version={version}
          />;
        }}
      />
      <div styleName='main'>
        <Drawers
          currentDrawer={drawerIndex}
          currentTab={tabIndex}
          docked={drawerDocked}
          drag={drawerDrag}
          drawers={drawers}
          hover={drawerHover}
          onSelect={onDrawerSelect}
          onToggle={onDrawerToggle}
          open={drawerOpen}
          orientation={orientation}
          tabs={tabs}
        />
        <UIView
          name='tabs'
          render={(Header) => {
            return <Header
              drawerDocked={drawerDocked}
              drawerDrag={drawerDrag}
              onTabSelect={onTabSelect}
              orientation={orientation}
              tabIndex={tabIndex}
              tabs={tabs}
            />;
          }}
        />
      </div>
    </div>
  );
};
App.propTypes = {
  drawerDocked: PropTypes.bool,
  drawerDrag: PropTypes.bool,
  drawerHover: PropTypes.bool,
  drawerIndex: PropTypes.number,
  drawerOpen: PropTypes.bool,
  drawers: PropTypes.array,
  orientation: PropTypes.string,
  tabIndex: PropTypes.number,
  tabs: PropTypes.array,
  title: PropTypes.string,
  version: PropTypes.string,
  whenDrawerSelect: PropTypes.func.isRequired,
  whenDrawerToggle: PropTypes.func.isRequired,
  whenTabSelect: PropTypes.func.isRequired
};
App.defaultProps = {
  drawerDocked: defaults.drawerDocked,
  drawerDrag: defaults.drawerDrag,
  drawerHover: defaults.drawerHover,
  drawerIndex: defaults.drawerIndex,
  drawerOpen: defaults.drawerOpen,
  drawers: defaults.drawers,
  header: defaults.appHeader,
  orientation: defaults.orientation,
  shortName: defaults.shortName,
  tabIndex: defaults.tabIndex,
  tabs: defaults.tabs,
  title: defaults.title,
  version: defaults.version,
  whenDrawerSelect: defaults.onDrawerSelect,
  whenDrawerToggle: defaults.onDrawerToggle,
  whenTabSelect: defaults.onTabSelect
};
export default App;
