import React from 'react';
import {render} from 'react-dom';
import UIRouterReactDigest from '../src';
import config from './config';
import './local';
if (module.hot) module.hot.accept(function(error) {
  console.error(error);
});
render(
  <UIRouterReactDigest
    title={config.title}
    version={config.version}
    shortName={config.shortName}
    tabs={config.tabs}
    drawers={config.drawers}
  />,
  document.getElementById('app')
);
