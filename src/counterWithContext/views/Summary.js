import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import store from '../Store';

class Summary extends Component{
  constructor(){
    super(...arguments);

    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }
  onChange(){
    this.setState(this.getOwnState());
  }
  getOwnState(){
    const state = this.context.store.getState();
    let sum = 0;
    for (var cap in state){
      if(state.hasOwnProperty(cap)){
        sum += state[cap];
      }
    }
    return {sum :sum};
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.sum !== this.state.sum;
  }
  componentDidMount(){
    this.context.store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    this.context.store.unsubscribe(this.onChange);
  }
  render(){
    const sum = this.state.sum;
    return (
      <div>Total Count: {sum}</div>
    );
  }
}

Summary.contextTypes = {
  store: PropTypes.object
}

export default Summary;