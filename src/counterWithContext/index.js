import React, {Component} from'react';
import ControlPanel from './views/ControlPanel';
import store from './Store.js';
import Provider from './Provider.js';


class ProviderWrap extends Component {
  render(){
    return (
      <Provider store={store}>
        <ControlPanel />
      </Provider>
    );
  }
}

export default ProviderWrap;