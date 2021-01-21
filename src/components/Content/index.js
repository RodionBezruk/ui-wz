import React, {PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {UIView} from 'ui-router-react';
const Content = ({style: state}) => {
  const styles = {
    container: {
      direction: state.orientation === 'left' ? 'ltr' : 'rtl',
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
        index={state.tabIndex}
        onChangeIndex={function (index) {
          state.whenTabChange(index);
        }}
        style={styles.container}
      >
        {state.tabs.map((tab) => {
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
  style: PropTypes.object.isRequired
};
export default Content;
