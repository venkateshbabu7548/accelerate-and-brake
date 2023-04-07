// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.speed > 0 && prevState.speed < 200) {
        {
          speed: prevState.speed + 10
        }
      }
    })
  }
  onApplyBrake = () => {
    this.setState(prevState => {
      if (prevState.speed > 0 && prevState.speed < 200) {
        {
          speed = prevState.speed - 10
        }
      }
    })
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="Speedometer"
          />
        </div>
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="b-1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="b-2" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
