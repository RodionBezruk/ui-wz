import React, {PropTypes} from 'react';
import {UIView} from 'ui-router-react';
import Drawer from 'material-ui/Drawer';
import DrawerContent from './DrawerContent';
const Drawers = ({
  open,
  orientation,
  drag,
  docked,
  hover,
  toggle,
  tabs,
  currentTab,
  drawers,
  currentDrawer,
  selectDrawer
}) => {
  const styles = {
    drawer: {
      height: '100%',
      width: open ? 320 : 0,
      order: orientation === 'right' ? 999 : 0,
      transition: 'width 0.450s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      position: hover ? 'absolute' : 'relative',
      right: hover && orientation === 'right' ? 0 : 'initial'
    },
    drawerContainer: {
      top: 'auto',
      zIndex: 1500,
      position: 'relative',
      overflow: 'initial',
      display: 'flex',
      flexDirection: 'column'
    },
    drawerDirection: {
      flex: 1,
      overflowY: 'auto',
      direction: orientation === 'right' ? 'ltr' : 'rtl'
    },
    drawerContent: {
      direction: 'ltr',
      height: '100%'
    },
    overlay: {
      backgroundColor: 'rgba(255,255,255,0)'
    }
  };
  return (
    <Drawer
      open={open}
      style={styles.drawer}
      containerStyle={styles.drawerContainer}
      openSecondary={orientation === 'right'}
      width={320}
      docked={docked}
      disableSwipeToOpen={!drag}
      onRequestChange={() => (toggle())}
      overlayStyle={styles.overlay}
    >
      <UIView
        name="drawerHeader"
        className="onlyForProps"
        style={{drawers, currentDrawer, onTabClick: selectDrawer}}
      />
      <div style={styles.drawerDirection}>
        <div style={styles.drawerContent}>
          <DrawerContent
            tabs={tabs}
            currentTab={currentTab}
            drawers={drawers}
            currentDrawer={currentDrawer}
            onSwipe={selectDrawer}
          />
        </div>
      </div>
    </Drawer>
  )
}
Drawers.propTypes = {
  open: PropTypes.bool,
  orientation: PropTypes.string,
  drag: PropTypes.bool,
  docked: PropTypes.bool,
  hover: PropTypes.bool,
  toggle: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentTab: PropTypes.number.isRequired,
  drawers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentDrawer: PropTypes.number.isRequired,
  selectDrawer: PropTypes.func.isRequired
}
export default Drawers;
