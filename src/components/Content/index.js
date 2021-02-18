import React, {PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {UIView} from 'ui-router-react';
import defaults from '../../defaults';
const Content = ({
  onTabSelect,
  orientation,
  tabIndex,
  tabs
}) => {
  const styles = {
    container: {
      direction: orientation === 'left' ? 'ltr' : 'rtl',
      height: '100%'
    },
    content: {
      direction: 'ltr',
      height: '100%'
    },
    view: {
      flex: 1,
      height: '100%'
    }
  };
  return (
    <div style={styles.view}>
      <SwipeableViews
        containerStyle={styles.content}
        index={tabIndex}
        onChangeIndex={function (index) {
          onTabSelect(index);
        }}
        style={styles.container}
      >
        {tabs.map((tab) => {
          return (
            <UIView
              key={tab.name}
              name={tab.name}
            />
          );
        })}
      </SwipeableViews>
    </div>
  );
};
Content.propTypes = {
  onTabSelect: PropTypes.func.isRequired,
  orientation: PropTypes.string,
  tabIndex: PropTypes.number,
  tabs: PropTypes.array
};
Content.defaultProps = {
  onTabSelect: defaults.onTabSelect,
  orientation: defaults.orientation,
  tabIndex: defaults.tabIndex,
  tabs: defaults.tabs
};
export default Content;
