import {isValidElement} from 'react';
import App from '../components/App';
import Content from '../components/Content';
import defaultHeader from '../components/_defaults/Header';
import defaultDrawerHeader from '../components/_defaults/DrawerHeader';
import Missing from './Missing';
export const initRoot = (shortName, drawers, header, drawerHeader) => {
  const root = {
    tabs: {
      component: Content
    }
  };
  drawers.map((drawer) => {
    root[drawer.name] = drawer.component || Missing;
    return null;
  });
  root.header = header &&
    header.prototype &&
    header.prototype.isReactComponent || isValidElement(header) ?
    {component: header} :
    {component: defaultHeader};
  root.drawerHeader = drawerHeader &&
    drawerHeader.prototype &&
    drawerHeader.prototype.isReactComponent || isValidElement(drawerHeader) ?
    {component: drawerHeader} :
    {component: defaultDrawerHeader};
  return [
    {
      abstract: true,
      component: App,
      name: shortName
    }, {
      abstract: true,
      name: shortName + '.tabs',
      views: root
    }
  ];
};
export const initTab = (tab, shortName, drawers) => {
  const route = {
    [tab.name]: {
      component: tab.component || Missing
    }
  };
  drawers.map((drawer) => {
    if (drawer.contextual === true) {
      const viewName = tab.name + '_' + drawer.name + '@' + shortName;
      route[viewName] = {
        component: tab.drawers[drawer.name] || Missing
      };
    }
    return null;
  });
  return {
    name: shortName + '.tabs.' + tab.name,
    params: {
      name: tab.name,
      ...tab.params
    },
    url: '/' + tab.name,
    views: route
  };
};
export const initTransitions = (shortName, tabs, tabIndex, whenTabChange) => {
  return (router) => {
    router.transitionService.onSuccess({
      to: shortName + '.tabs.**'
    }, (transition) => {
      let name;
      if (typeof transition._targetState._identifier === 'string') {
        name = transition._targetState._identifier.split(/\./)[2];
      } else if (typeof transition._targetState._identifier.name === 'string') {
        name = transition._targetState._identifier.name.split(/\./)[2];
      }
      tabs.map((tab, index) => {
        if (tab.name === name) {
          whenTabChange(index, false, router);
        }
        return null;
      });
    });
    router.urlRouter.otherwise(() => {
      if (tabs[tabIndex]) {
        return '/' + tabs[tabIndex].name;
      } else {
        return '/' + tabs[0].name;
      }
    });
  };
};
