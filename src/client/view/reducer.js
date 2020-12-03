import * as actions from '../actions/actions';
const _ = require('lodash');
const initialState = {
  welcomeText: "Velkommen til denne siden"
};

const componentreducer = (prevState = initialState, action) => {
  let newState;
  switch (action.type) {
    case actions.CHANGE_WELCOME_TEXT:
      newState = _.assign({},prevState);
      newState.welcomeText = "Magnus Carlsen er god i sjakk";
      if (action.data){
        newState.welcomeText = action.data;
      }
      return newState;
    default:
      return initialState;
  }
}

export default componentreducer;
