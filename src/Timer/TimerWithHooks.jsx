import React, { useEffect, useState} from 'react'

const NewTimer = () =>{
  const [state, setState] = useState({
      StartStop: true,
      LastClick:0,
  })
  const [TimePlus, setTimePlus] = useState(0)
  
  useEffect(() =>{
    const Plusinterval = setInterval(() =>{
  
      if(state.StartStop){
          setTimePlus(prev => prev + 1)
      }
    }, 1000);
      return () => {
        clearInterval(Plusinterval)
      }
  }, )
 

  const ShowTimerHH = () => {
    let HH = Math.floor(TimePlus / 3600)
    return HH < 10 ? "0" + HH : HH
    
  }
  const ShowTimerMin = () => {
    let MM = Math.floor(TimePlus / 60) % 60;
    return MM < 10 ? "0" + MM : MM
  }
  const ShowTimerSec= () => {
    let SS = TimePlus % 60;
    return SS < 10 ? "0" + SS : SS
  }

  const StartBtn = () => {
    setState(prev =>{
      return {...prev,
           StartStop: !state.StartStop}
    }  )
      
    
  }

  const ResetBtn = () =>  {
    setTimePlus(0)
 
  }

  const WaitBtn = () =>  {
    let TimeNow = Date.now();

    if((TimeNow - state.LastClick) < 300){
      setState(prev =>{
        return {...prev,
          StartStop: false}
      }  )
    }else{
      setState(prev =>{
        return {...prev,
          LastClick: TimeNow}
      }  )
    
    }
  
  }

return (
  <div>
    <h3>With HOOKS</h3>
    <div>{`${ShowTimerHH()}:${ShowTimerMin()}:${ShowTimerSec()}`}</div>
    <button onClick={StartBtn}>Start|Stop</button>
    <button onClick={WaitBtn}>Wait</button>
    <button onClick={ResetBtn}>Reset</button>

</div>

)
}

export default NewTimer;


