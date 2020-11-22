import React, {PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views'
import {UIView} from 'ui-router-react';
const Content = ({style: state}) => {
  const styles = {
    view: {
      height: '100%',
      flex: 1
    },
    container: {
      height: '100%',
      direction: state.orientation === 'left' ? 'ltr' : 'rtl'
    },
    content: {
      height: '100%',
      direction: 'ltr'
    }
  };
  return (
    <div style={styles.view}>
      <SwipeableViews
        style={styles.container}
        containerStyle={styles.content}
        index={state.tabIndex}
        onChangeIndex={(index)=>(state.whenTabChange(index))}>
        {state.tabs.map((tab, index) => (
          <UIView
            key={index}
            name={tab.name}
          />
        ))}
      </SwipeableViews>
    </div>
  );
}
Content.propTypes = {
  style: PropTypes.object.isRequired
};
export default Content;
