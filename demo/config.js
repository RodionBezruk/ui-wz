import {title, version} from '../package.json';
import Tab1 from './components/Tab1';
import Tab1Tools from './components/Tab1Tools';
import Tab2 from './components/Tab2';
import Tab2Tools from './components/Tab2Tools';
import Settings from './components/Settings';
export default {
  shortName: "CSUI",
	title,
	version,
	drawers: [{
		name: "tools",
		contextual: true,
    params: {
      title: "Tools"
    }
	},{
		name: "settings",
		component: Settings,
    params: {
      title: "Settings"
    }
	}],
	tabs: [{
		name: "tab1",
		component: Tab1,
		drawers: {
			tools: Tab1Tools
		},
    params: {
      title: "Tab 1"
    }
	},{
		name: "tab2",
		component: Tab2,
		drawers: {
			tools: Tab2Tools
		},
    params: {
      title: "Tab 2"
    }
	}]
}
