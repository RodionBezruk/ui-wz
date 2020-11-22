import React, {PropTypes} from 'react';
import './TabBar.css';
const TabBar = ({tabs, onTabClick}) => (
  <span>
    {
      tabs.map((tab, index) => (
        <button
          styleName='button'
          key={index}
          onClick={()=>(onTabClick(index))}
        >
          {tab.params.title ? tab.params.title : tab.name.replace('_', ' ')}
        </button>
      ))
    }
  </span>
);
TabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired
}
export default TabBar;
