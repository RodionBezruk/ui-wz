import React, {Component, PropTypes} from 'react';
import {UIRouter, UIView, servicesPlugin, pushStateLocationPlugin} from 'ui-router-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {initRoot, initTab, initTransitions} from './util/initRouter';
import defaults from './defaults';
let defaultRouter;
export default class src extends Component {
  static propTypes = {
    drawerDocked: PropTypes.bool,
    drawerDrag: PropTypes.bool,
    drawerHover: PropTypes.bool,
    drawerIndex: PropTypes.number,
    drawerOpen: PropTypes.bool,
    drawers: PropTypes.array.isRequired,
    header: PropTypes.func,
    onDrawerChange: PropTypes.func,
    onDrawerToggle: PropTypes.func,
    onTabChange: PropTypes.func,
    orientation: PropTypes.string,
    shortName: PropTypes.string,
    tabIndex: PropTypes.number,
    tabs: PropTypes.array.isRequired,
    title: PropTypes.string,
    version: PropTypes.string
  }
  static defaultProps = {
    drawerDocked: defaults.drawerDocked,
    drawerDrag: defaults.drawerDrag,
    drawerHover: defaults.drawerHover,
    drawerIndex: defaults.drawerIndex,
    drawerOpen: defaults.drawerOpen,
    header: defaults.appHeader,
    onDrawerChange: defaults.onDrawerChange,
    onDrawerToggle: defaults.onDrawerToggle,
    onTabChange: defaults.onTabChange,
    orientation: defaults.orientation,
    shortName: defaults.shortName,
    tabIndex: defaults.tabIndex,
    title: defaults.title,
    version: defaults.version
  }
  constructor (props) {
    super(props);
    this.whenTabChange = this.whenTabChange.bind(this);
    this.whenDrawerChange = this.whenDrawerChange.bind(this);
    this.whenDrawerToggle = this.whenDrawerToggle.bind(this);
    if (!injectTapEventPlugin.init) {
      injectTapEventPlugin();
      injectTapEventPlugin.init = !injectTapEventPlugin.init;
    }
    this.state = {
      drawerDocked: this.props.drawerDocked,
      drawerDrag: this.props.drawerDrag,
      drawerHover: this.props.drawerHover,
      drawerIndex: this.props.drawerIndex,
      drawerOpen: this.props.drawerOpen,
      drawers: this.props.drawers,
      header: this.props.header,
      orientation: this.props.orientation,
      shortName: this.props.shortName,
      tabIndex: this.props.tabIndex,
      tabs: this.props.tabs,
      title: this.props.title,
      version: this.props.version,
      whenDrawerChange: this.whenDrawerChange,
      whenDrawerToggle: this.whenDrawerToggle,
      whenTabChange: this.whenTabChange
    };
    this.states = [
      ...initRoot(this.state.shortName, this.state.drawers, this.state.header, this.state.drawerHeader),
      ...this.state.tabs.map((tab) => {
        return initTab(tab, this.state.shortName, this.state.drawers);
      })
    ];
    this.config = initTransitions(this.state.shortName, this.state.tabs, this.state.tabIndex, this.state.whenTabChange);
    this.plugins = [servicesPlugin, pushStateLocationPlugin];
  }
  whenTabChange (tabIndex = 0, route = true, router = defaultRouter) {
    if (route) {
      router.stateService.go(this.state.shortName + '.tabs.' + this.state.tabs[tabIndex].name);
    }
    if (tabIndex !== this.state.tabIndex) {
      this.setState({tabIndex}); 
    }
    this.props.onTabChange(tabIndex);
  }
  whenDrawerChange (drawerIndex = 0) {
    this.setState({drawerIndex}); 
    this.props.onDrawerChange(drawerIndex);
  }
  whenDrawerToggle (drawerOpen) {
    this.setState({drawerOpen: drawerOpen || !this.state.drawerOpen});  
    this.props.onDrawerToggle(drawerOpen || !this.state.drawerOpen);
  }
  render () {
    return (
      <MuiThemeProvider>
        <UIRouter
          config={(router) => {
            defaultRouter = router;
            this.config(router);  
          }}
          plugins={this.plugins}
          states={this.states}
        >
          <UIView
            className='onlyForProps'
            style={this.state}
            test='testProp'
          />
        </UIRouter>
      </MuiThemeProvider>
    );
  }
}
