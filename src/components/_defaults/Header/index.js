import React from 'react';
import PropTypes from 'prop-types';
import defaults from '../../../defaults';
import DrawerToggle from './DrawerToggle';
import Title from './Title';
import TabBar from './TabBar';
import Auxiliar from './Auxiliar';
import './Header.css';
const Header = ({
  children,
  drawerOpen,
  onDrawerToggle,
  onTabSelect,
  orientation,
  tabs,
  tabIndex,
  title,
  version
}) => {
  return (
    <div styleName='wrapper'>
      <span>
        <DrawerToggle
          open={drawerOpen}
          toggle={onDrawerToggle}
        />
        <Title
          title={title}
          version={version}
        />
        <TabBar
          currentTab={tabIndex}
          onTabSelect={function (index) {
            onTabSelect(index);
          }}
          tabs={tabs}
        />
      </span>
      <span>
        <Auxiliar orientation={orientation}>
          {children}
        </Auxiliar>
      </span>
    </div>
  );
};
Header.propTypes = {
  children: PropTypes.object,
  drawerOpen: PropTypes.bool,
  onDrawerToggle: PropTypes.func,
  onTabSelect: PropTypes.func,
  orientation: PropTypes.string,
  tabIndex: PropTypes.number,
  tabs: PropTypes.array,
  title: PropTypes.string,
  version: PropTypes.string
};
Header.defaultProps = {
  drawerOpen: defaults.drawerOpen,
  onDrawerToggle: defaults.onDrawerToggle,
  onTabSelect: defaults.onTabSelect,
  orientation: defaults.orientation,
  tabIndex: defaults.tabIndex,
  tabs: defaults.tabs,
  title: defaults.title,
  version: defaults.version
};
Header.defaultProps = {
  children: null
};
export default Header;
