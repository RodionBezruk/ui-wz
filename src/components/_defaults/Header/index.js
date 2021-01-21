import React, {PropTypes} from 'react';
import DrawerToggle from './DrawerToggle';
import Title from './Title';
import TabBar from './TabBar';
import Auxiliar from './Auxiliar';
import './Header.css';
const Header = ({
  style: state,
  children
}) => {
  return (
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
          currentTab={state.tabIndex}
          onTabClick={function () {
            state.whenTabChange();
          }}
          tabs={state.tabs}
        />
      </span>
      <span>
        <Auxiliar orientation={state.orientation}>
          {children}
        </Auxiliar>
      </span>
    </div>
  );
};
Header.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object.isRequired
};
Header.defaultProps = {
  children: null
};
export default Header;
