import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxComponent from './view/reduxComponent.jsx';
import store from './redux/store';

export default class App extends Component {
  render() {
    return (
      <>
        <h2>Sopra Steria Kalkulator!</h2>
        <Provider store={store}>
          <ReduxComponent />
        </Provider>
      </>
    );
  }
}
