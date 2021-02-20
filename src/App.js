import React from 'react';
import { Provider } from 'react-redux';
import ReduxComponent from './view/reduxComponent';
import store from './redux/store';

const App = () => (
  <>
    <h2>Sopra Steria Kalkulator!</h2>
    <Provider store={store}>
      <ReduxComponent />
    </Provider>
  </>
);
export default App;
