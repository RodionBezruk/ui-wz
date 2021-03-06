import {title, version} from '../package.json';
import TabA from './components/TabA';
import TabATools from './components/TabATools';
import TabB from './components/TabB';
import TabBTools from './components/TabBTools';
import Settings from './components/Settings';
export default {
  drawers: [{
    contextual: true,
    name: 'tools',
    params: {
      title: 'Tools'
    }
  }, {
    component: Settings,
    name: 'settings',
    params: {
      title: 'Settings'
    }
  }],
  shortName: 'CSUI',
  tabs: [{
    component: TabA,
    drawers: {
      tools: TabATools
    },
    name: 'taba',
    params: {
      title: 'Tab A'
    }
  }, {
    component: TabB,
    drawers: {
      tools: TabBTools
    },
    name: 'tabb',
    params: {
      title: 'Tab B'
    }
  }],
  title,
  version
};
