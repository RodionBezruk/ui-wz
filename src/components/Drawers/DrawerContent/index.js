import React, {PropTypes} from 'react';
import {UIView} from 'ui-router-react';
import SwipeableViews from 'react-swipeable-views';
import './DrawerContent.css';
const DrawerContent = ({
  currentDrawer,
  currentTab,
  drawers,
  onSwipe,
  tabs
}) => {
  return (
    <SwipeableViews
      index={drawers[currentDrawer] ? currentDrawer : 0}
      onChangeIndex={function (index) {
        onSwipe(index);
      }}
      styleName='swipe'
    >
      {
        drawers.map((drawer, drawerIndex) => {
          return (
            <div
              key={drawer.name}
              styleName={drawerIndex === currentDrawer ? 'currentDrawer' : 'drawer'}
            >
              {
                drawer.contextual ?
                  <SwipeableViews
                    disabled={true}
                    index={tabs[currentTab] ? currentTab : 0}
                  >
                    {
                      tabs.map((tab) => {
                        return (
                          <div
                            key={tab.name}
                            styleName={
                              drawerIndex === currentDrawer ?
                              'currentDrawer' :
                              'drawer'
                            }
                          >
                            <UIView name={tab.name + '_' + drawer.name} />
                          </div>
                        );
                      })
                    }
                  </SwipeableViews> :
                  <UIView name={drawer.name} />
              }
            </div>
          );
        })
      }
    </SwipeableViews>
  );
};
DrawerContent.propTypes = {
  currentDrawer: PropTypes.number.isRequired,
  currentTab: PropTypes.number.isRequired,
  drawers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSwipe: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};
export default DrawerContent;
