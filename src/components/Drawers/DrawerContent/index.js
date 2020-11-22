import React, {PropTypes} from 'react';
import {UIView} from 'ui-router-react';
import SwipeableViews from 'react-swipeable-views';
import './DrawerContent.css';
const DrawerContent = ({
  tabs,
  currentTab,
  drawers,
  currentDrawer,
  onSwipe
}) => (
  <SwipeableViews
    index={drawers[currentDrawer] ? currentDrawer : 0}
    styleName='swipe'
    onChangeIndex={(index)=>(onSwipe(index))}
  >
    {
      drawers.map((drawer, drawerIndex) => (
        <div
          key={drawerIndex}
          styleName={drawerIndex === currentDrawer ? 'currentDrawer' : 'drawer'}
        >
          {
            drawer.contextual
            ? <SwipeableViews
              disabled={true}
              index={tabs[currentTab] ? currentTab : 0}
            >
              {tabs.map((tab, tabIndex) => (
                <div
                  key={`${drawerIndex}_${tabIndex}`}
                  styleName={
                    drawerIndex === currentDrawer
                    ? 'currentDrawer'
                    : 'drawer'
                  }
                >
                  <UIView name={`${tab.name}_${drawer.name}`}/>
                </div>
              ))}
            </SwipeableViews>
            : <UIView name={`${drawer.name}`}/>
          }
        </div>
      ))
    }
  </SwipeableViews>
);
DrawerContent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentTab: PropTypes.number.isRequired,
  drawers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentDrawer: PropTypes.number.isRequired,
  onSwipe: PropTypes.func.isRequired
};
export default DrawerContent;
