import React from 'react';
import PropTypes from 'prop-types';
import './TabBar.css';
const TabBar = ({onTabSelect, tabs}) => {
  return (
    <span>
      {
        tabs.map((tab, index) => {
          return (
            <button
              key={tab.name}
              onClick={function handleClick () {
                onTabSelect(index);
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
  onTabSelect: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};
export default TabBar;
