import React from 'react'
class Timer extends React.Component  {


  constructor (props){
    super(props)
    this.state ={
      StartStop: true,
      LastClick:0,
      time: 0,
    };
    
 
  }
  componentDidMount() {
    this.TimePlusOne = this.TimePlusOne.bind(this);
    this.StartBtn = this.StartBtn.bind(this);
    this.ResetBtn = this.ResetBtn.bind(this);
    this.WaitBtn = this.WaitBtn.bind(this); 

    setInterval(this.TimePlusOne, 1000)
  }


   ShowTimerHH () {
    let HH = Math.floor(this.state.time / 3600)
    return HH < 10 ? "0" + HH : HH
    
  }
  ShowTimerMin () {
    let MM = Math.floor(this.state.time / 60) % 60;
    return MM < 10 ? "0" + MM : MM
  }
   ShowTimerSec () {
    let SS = this.state.time % 60;
    return SS < 10 ? "0" + SS : SS
  }

  StartBtn () {
    this.setState(state =>({
      StartStop: !state.StartStop
    }))
  }

  ResetBtn () {
    this.setState({
      time: 0
    })
  }

  WaitBtn () {
    let TimeNow = Date.now();

    if((TimeNow - this.state.LastClick) < 300){
      this.setState(({
        StartStop: false
      }))
    }else{
      this.setState(({
        LastClick: TimeNow
      }))
    }
    

  }
  TimePlusOne (){
    
    if(this.state.StartStop){
      this.setState(state =>({

        time: state.time + 1,
        
      }))
    }
    
  }


  render(){
    

    return (
      <div>
        <h3>With Class</h3>
        <div>{`${this.ShowTimerHH()}:${this.ShowTimerMin()}:${this.ShowTimerSec()}`}</div>
        <button onClick={this.StartBtn}>Start|Stop</button>
        <button onClick={this.WaitBtn}>Wait</button>
        <button onClick={this.ResetBtn}>Reset</button>

    </div>
    
    )
    
  }
    
  
}


export default Timer