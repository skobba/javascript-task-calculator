import React, { Component } from 'react';
import ReduxComponent from './view/reduxComponent.jsx';
import ReactComponent from './view/component.jsx';
import ReactHooksComponent from './view/hooksComponent.jsx';
import store from './redux/store';
import { Provider } from 'react-redux'

export default class App extends Component {

  render() {
    return (
      <>
        <h2>Sopra Steria Kalkulator!</h2>
        <ReactComponent/>
        {/*<ReactHooksComponent />*/}
        {/*<Provider store={store}>
          <ReduxComponent/>
        </Provider>*/}
      </>
    );
  }
}
