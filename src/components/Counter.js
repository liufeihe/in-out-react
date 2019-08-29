import React, {Component} from 'react'

class Counter extends Component {
  constructor(props){
    super(props);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.state = {count: this.initValue||0}
  }
  onClickIncrementButton(){
    this.setState({count: this.state.count+1})
  }
  onClickDecrementButton(){
    this.setState({count: this.state.count-1})
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