import {isValidElement} from 'react';
import Missing from './Missing';
import App from '../components/App';
import Content from '../components/Content';
import defaultHeader from '../components/_defaults/Header';
import defaultDrawerHeader from '../components/_defaults/DrawerHeader';
export const initRoot = (shortName, drawers, header, drawerHeader) => {
  let root = {tabs:{component:Content}};
  drawers.map((drawer) => {
    root[drawer.name] = drawer.component || {component: Missing};
  });
  root.header = header
    && ((header.prototype && header.prototype.isReactComponent)
    || (isValidElement(header)))
  ? {component: header}
  : {component: defaultHeader};
  root.drawerHeader = drawerHeader
    && ((drawerHeader.prototype && drawerHeader.prototype.isReactComponent)
    || (isValidElement(drawerHeader)))
  ? {component: drawerHeader}
  : {component: defaultDrawerHeader};
  return [{
    name: shortName,
    abstract: true,
    component: App
  },{
    name: `${shortName}.tabs`,
    abstract: true,
    views: root
  }]
};
export const initTab = (tab, shortName, drawers) => {
  let route = {
    [tab.name] : {component: tab.component} || {component: Missing}
  };
  drawers.map((drawer) => {
    if (drawer.contextual === true) {
      const viewName = `${tab.name}_${drawer.name}@${shortName}`;
      route[viewName] = {component: tab.drawers[drawer.name]} || {component: Missing};
    }
  });
  return {
    name: `${shortName}.tabs.${tab.name}`,
    url: `${tab.name}`,
    views: route,
    params: {
      name: tab.name,
      ...tab.params
    }
  };
};
export const initTransitions = (shortName, tabs, tabIndex, whenTabChange) => (router) => {
  router.transitionService.onSuccess({
    to: `${shortName}.tabs.**`},
    function(transition){
      let name;
      if (typeof transition._targetState._identifier === 'string') {
        console.log(transition._targetState._identifier.split(/\./)[2])
        name = transition._targetState._identifier.split(/\./)[2];
      } else if (typeof transition._targetState._identifier.name === 'string') {
        console.log(transition._targetState._identifier.name.split(/\./)[2])
        name = transition._targetState._identifier.name.split(/\./)[2];
      }
      tabs.map((tab, index) => {
        if (tab.name === name) {
          console.log('test');
          whenTabChange(index, false, router);
        }
      });
    }
  );
  router.urlRouter.otherwise(() => {
    if (tabs[tabIndex]) {
      return `/${tabs[tabIndex].name}`;
    } else {
      return `/${tabs[0].name}`;
    }
  });
};
