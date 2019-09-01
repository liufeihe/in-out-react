import React, {Component} from 'react'
import store from '../Store.js'
import * as Actions from '../Actions'

class Counter extends Component{
  render(){
    const {caption, onIncrement, onDecrement, value} = this.props;
    return (
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    )
  }
}

class CounterContainer extends Component {
  constructor(props){
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    // this.state = {count: this.props.initValue||0}
    this.state = this.getOwnState();
    console.log('enter constructor '+this.props.caption)
  }
  getOwnState(){
    return {
      value: store.getState()[this.props.caption]
    }
  }
  onChange(){
    this.setState(this.getOwnState())
  }
  componentWillMount(){
    console.log('enter componetWillMount '+this.props.caption)
  }
  componentDidMount(){
    console.log('enter componetDidMount '+this.props.caption)
    store.subscribe(this.onChange)
  }
  componentWillUnmount(){
    store.unsubscribe(this.onChange)
  }
  componentWillReceiveProps(nextProps){
    console.log('enter componentWillReceiveProps '+this.props.caption)
  }
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.caption !== this.props.caption || 
      nextState.value !== this.state.value)
  }
  onIncrement(){
    // this.updateCount(true);
    // this.setState({count: this.state.count+1})
    store.dispatch(Actions.increment(this.props.caption))
  }
  onDecrement(){
    // this.updateCount(false);
    // this.setState({count: this.state.count-1})
    store.dispatch(Actions.decrement(this.props.caption))
  }
  // updateCount(isIncrement){
  //   const preValue = this.state.count;
  //   const newValue = isIncrement ? preValue+1 : preValue-1;
  //   this.setState({count: newValue});
  //   this.props.onUpdate(newValue, preValue);
  // }
  render(){
    return (
      <Counter caption={this.props.caption}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
        value={this.state.value}/>
    );
  }
};
// CounterContainer.defaultProps = {
//   initValue: 0
// };
// Counter.propTypes = {
//   caption: PropTypes.string.isRequired,
//   initValue: PropTypes.number
// };

export default CounterContainer;