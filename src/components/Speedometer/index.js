import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          alt="speedometer"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph,Max Limit is 200mph</p>
        <div>
          <button className="button1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button2" type="button" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
