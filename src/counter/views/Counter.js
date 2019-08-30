import React, {Component} from 'react'

class Counter extends Component {
  constructor(props){
    super(props);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.state = {count: this.props.initValue||0}
    console.log('enter constructor '+this.props.caption)
  }
  componentWillMount(){
    console.log('enter componetWillMount '+this.props.caption)
  }
  componentDidMount(){
    console.log('enter componetDidMount '+this.props.caption)
  }
  componentWillReceiveProps(nextProps){
    console.log('enter componentWillReceiveProps '+this.props.caption)
  }
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.caption !== this.props.caption || 
      nextState.count !== this.state.count)
  }
  onClickIncrementButton(){
    this.updateCount(true);
    // this.setState({count: this.state.count+1})
  }
  onClickDecrementButton(){
    this.updateCount(false);
    // this.setState({count: this.state.count-1})
  }
  updateCount(isIncrement){
    const preValue = this.state.count;
    const newValue = isIncrement ? preValue+1 : preValue-1;
    this.setState({count: newValue});
    this.props.onUpdate(newValue, preValue);
  }
  render(){
    const {caption} = this.props;
    return (
    <div>
      <button onClick={this.onClickIncrementButton}>+</button>
      <button onClick={this.onClickDecrementButton}>-</button>
      <span>{caption} count: {this.state.count}</span>
    </div>
    );
  }
};
Counter.defaultProps = {
  initValue: 0
};
// Counter.propTypes = {
//   caption: PropTypes.string.isRequired,
//   initValue: PropTypes.number
// };

export default Counter;