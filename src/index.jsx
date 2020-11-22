import React, {Component, PropTypes} from 'react';
import {
  UIRouter,
  UIView,
  servicesPlugin,
  pushStateLocationPlugin
} from 'ui-router-react';
import {initRoot, initTab, initTransitions} from './util/initRouter';
import defaults from './defaults';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
let defaultRouter;
export default class CSUI extends Component {
  static propTypes = {
    version: PropTypes.string,
    shortName: PropTypes.string,
    tabs: PropTypes.array.isRequired,
    tabIndex: PropTypes.number,
    onTabChange: PropTypes.func,
    drawers: PropTypes.array.isRequired,
    drawerIndex: PropTypes.number,
    ondrawerChange: PropTypes.func,
    ondrawerToggle: PropTypes.func,
    drawerOpen: PropTypes.bool,
    drawerDocked: PropTypes.bool,
    drawerHover: PropTypes.bool,
    drawerDrag: PropTypes.bool,
    orientation: PropTypes.string,
    header: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.whenTabChange = this.whenTabChange.bind(this);
    this.whenDrawerChange = this.whenDrawerChange.bind(this);
    this.whenDrawerToggle = this.whenDrawerToggle.bind(this);
    if (!injectTapEventPlugin.init) {
      injectTapEventPlugin();
      injectTapEventPlugin.init = !injectTapEventPlugin.init;
    }
    this.state = {
      title: this.props.title || defaults.title,
      version: this.props.version || defaults.version,
      shortName: this.props.shortName  || defaults.shortName,
      header: this.props.header || defaults.appHeader,
      tabs: this.props.tabs || defaults.tabs,
      tabIndex: this.props.tabIndex || defaults.tabIndex,
      whenTabChange: this.whenTabChange,
      drawers: this.props.drawers || defaults.drawers,
      drawerIndex: this.props.drawerIndex || defaults.drawerIndex,
      whenDrawerChange: this.whenDrawerChange,
      drawerOpen: this.props.drawerOpen || defaults.drawerOpen,
      whenDrawerToggle: this.whenDrawerToggle,
      drawerDocked: this.props.drawerDocked || defaults.drawerDocked,
      drawerHover: this.props.drawerHover || defaults.drawerHover,
      drawerDrag: this.props.drawerDrag || defaults.drawerDrag,
      orientation: this.props.orientation || defaults.orientation
    }
    this.states = [
      ...initRoot(
        this.state.shortName,
        this.state.drawers,
        this.state.header,
        this.state.drawerHeader
      ),
      ...this.state.tabs.map((tab) => (initTab(
        tab,
        this.state.shortName,
        this.state.drawers
      )))
    ];
    this.config = initTransitions(
      this.state.shortName,
      this.state.tabs,
      this.state.tabIndex,
      this.state.whenTabChange
    );
    this.plugins = [
      servicesPlugin,
      pushStateLocationPlugin
    ]
  }
  componentDidUpdate(prevProps) {
    if (prevProps.tabs.length !== prevProps.tabs.length) {
      console.log('modify tabs');
    }
  }
  whenTabChange(tabIndex = 0, route = true, router = defaultRouter) {
    if (route) {
      router.stateService
        .go(`${this.state.shortName}.tabs.${this.state.tabs[tabIndex].name}`);
    }
    tabIndex !== this.state.tabIndex && this.setState({tabIndex});
  }
  whenDrawerChange(drawerIndex = 0) {
    this.setState({drawerIndex});
  }
  whenDrawerToggle(drawerOpen) {
    drawerOpen = drawerOpen || !this.state.drawerOpen
    this.setState({drawerOpen});
  }
  render() {
    return(
      <MuiThemeProvider>
        <UIRouter
          states={this.states}
          config={(router)=>{
            defaultRouter=router;
            this.config(router);
          }}
          plugins={this.plugins}
        >
          <UIView
            test="testProp"
            className="onlyForProps"
            style={this.state}
          />
        </UIRouter>
      </MuiThemeProvider>
    );
  }
}
