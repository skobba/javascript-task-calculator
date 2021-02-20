import React from "react";
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    welcomeText : state.componentreducer.welcomeText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeText: () => {
      dispatch({type: actions.CHANGE_WELCOME_TEXT, data: 'Det skjedde noe'});
    }
  }
};

class ReduxComponent extends React.Component {

  render(){
    return(
      <div>
        <p>{this.props.welcomeText}</p>
        <button onClick={this.props.changeText}>Klikk her</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent)
