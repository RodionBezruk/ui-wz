import React, {PropTypes} from 'react';
import './TabBar.css';
const TabBar = ({onTabClick, tabs}) => {
  return (
    <span>
      {
        tabs.map((tab, index) => {
          return (
            <button
              key={tab.name}
              onClick={function () {
                onTabClick(index);
              }}
              styleName='button'
            >
              {
                tab.params.title ?
                tab.params.title :
                tab.name.replace('_', ' ')
              }
            </button>
          );
        })
      }
    </span>
  );
};
TabBar.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};
export default TabBar;
