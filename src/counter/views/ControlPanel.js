import React, {Component} from 'react'
import Counter from './Counter'

class ControlPanel extends Component {
  constructor(props){
    super(props);
    this.initValues = [0,10, 20];
    const initSum = this.initValues.reduce((a,b)=>a+b, 0);
    this.state = {
      sum: initSum
    }
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
  }
  onCounterUpdate(newValue, preValue){
    const change = newValue - preValue;
    this.setState({sum: this.state.sum+change});
  }
  render(){
    return (
      <div>
        <Counter onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[0]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]}/>
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]}/>
        <div>Total count: {this.state.sum}</div>
        <button onClick={()=>this.forceUpdate()}>Click to repaint</button>
      </div>
    );
  }
}

export default ControlPanel;