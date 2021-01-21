import React, {PropTypes} from 'react';
import {UIView} from 'ui-router-react';
import Drawer from 'material-ui/Drawer';
import DrawerContent from './DrawerContent';
const Drawers = ({
  currentDrawer,
  currentTab,
  docked,
  drag,
  drawers,
  hover,
  open,
  orientation,
  selectDrawer,
  tabs,
  toggle
}) => {
  const styles = {
    drawer: {
      height: '100%',
      order: orientation === 'right' ? 999 : 0,
      position: hover ? 'absolute' : 'relative',
      right: hover && orientation === 'right' ? 0 : 'initial',
      transition: 'width 0.450s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      width: open ? 320 : 0
    },
    drawerContainer: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'initial',
      position: 'relative',
      top: 'auto',
      zIndex: 1500
    },
    drawerContent: {
      direction: 'ltr',
      height: '100%'
    },
    drawerDirection: {
      direction: orientation === 'right' ? 'ltr' : 'rtl',
      flex: 1,
      overflowY: 'auto'
    },
    overlay: {
      backgroundColor: 'rgba(255,255,255,0)'
    }
  };
  return (
    <Drawer
      containerStyle={styles.drawerContainer}
      disableSwipeToOpen={!drag}
      docked={docked}
      onRequestChange={function () {
        toggle();
      }}
      open={open}
      openSecondary={orientation === 'right'}
      overlayStyle={styles.overlay}
      style={styles.drawer}
      width={320}
    >
      <UIView
        className='onlyForProps'
        name='drawerHeader'
        style={{
          currentDrawer,
          drawers,
          onTabClick: selectDrawer
        }}
      />
      <div style={styles.drawerDirection}>
        <div style={styles.drawerContent}>
          <DrawerContent
            currentDrawer={currentDrawer}
            currentTab={currentTab}
            drawers={drawers}
            onSwipe={selectDrawer}
            tabs={tabs}
          />
        </div>
      </div>
    </Drawer>
  );
};
Drawers.propTypes = {
  currentDrawer: PropTypes.number.isRequired,
  currentTab: PropTypes.number.isRequired,
  docked: PropTypes.bool.isRequired,
  drag: PropTypes.bool.isRequired,
  drawers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  hover: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  orientation: PropTypes.string.isRequired,
  selectDrawer: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggle: PropTypes.func.isRequired
};
export default Drawers;
