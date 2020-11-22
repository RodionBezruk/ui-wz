import React, {PropTypes} from 'react';
import DrawerToggle from './DrawerToggle';
import Title from './Title';
import TabBar from './TabBar';
import Auxiliar from './Auxiliar';
import './Header.css';
const Header = ({
  style: state,
  children
}) => (
  <div styleName='wrapper'>
    <span>
      <DrawerToggle
        toggle={state.whenDrawerToggle}
      />
      <Title
        title={state.title}
        version={state.version}
      />
      <TabBar
        tabs={state.tabs}
        currentTab={state.tabIndex}
        onTabClick={state.whenTabChange}
      />
    </span>
    <span>
      <Auxiliar orientation={state.orientation}>
        {children}
      </Auxiliar>
    </span>
  </div>
);
Header.propTypes = {
  style: PropTypes.object.isRequired
}
export default Header;
