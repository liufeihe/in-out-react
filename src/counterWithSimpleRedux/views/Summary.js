import React,{Component} from 'react';
import store from '../Store';

class Summary extends Component{
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }
  onChange(){
    this.setState(this.getOwnState());
  }
  getOwnState(){
    const state = store.getState();
    let sum = 0;
    for (let cap in state){
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
    store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    store.unsubscribe(this.onChange);
  }
  render(){
    const sum = this.state.sum;
    return (
      <div>Total Count: {sum}</div>
    );
  }
}

export default Summary;