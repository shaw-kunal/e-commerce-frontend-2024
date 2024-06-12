import  { useState } from 'react'
import CardLayout from '../../../layout/CardLayout';
import "../../../styles/_adminApp.scss"

const Coin = () => {
  const [angle,setAngle] = useState<number>(0);

  const flipCoin=()=>{
    if(Math.random()>0.5)  
      setAngle(prev=> prev+180+360)
    else 
       setAngle(prev=>prev+360+360)
  }
  return (
    <div className='adminAppContainer'>
     <CardLayout >
      <h2 className='primary-text'>Toss Your Coin</h2>
      <article className='tossCoin'
       onClick={flipCoin}
       style={{
        transform:`rotateY(${angle}deg)`
       }}
       >

        <div></div>
        <div></div>
      </article>

     </CardLayout>
    </div>
  )
}

export default Coin
