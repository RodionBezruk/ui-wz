import React, {PropTypes} from 'react';
import './Title.css'
const Title = ({title, version}) => (
  <h3 styleName='title'>
    {title}&nbsp;{version}
  </h3>
);
Title.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired
}
export default Title;
