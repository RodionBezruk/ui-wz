import React from 'react';
import {render} from 'react-dom';
import UIRouterReactDigest from '../src';
import config from './config';
import './css';
if (module.hot && !module.hot.loaded) {
  module.hot.accept(() => {
    module.hot.loaded = true;
  });
}
render(
  <UIRouterReactDigest
    drawers={config.drawers}
    shortName={config.shortName}
    tabs={config.tabs}
    title={config.title}
    version={config.version}
  />,
  document.getElementById('app')
);
