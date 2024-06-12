import { useEffect, useState } from "react";
import CardLayout from "../../../layout/CardLayout";
import Button from "../../../components/Button";
import "../../../styles/_adminApp.scss";


const timerFunction = (tis: number) => {
    const hour = String(Math.floor(tis / 3600)).padStart(2, "0");
    const min = String(Math.floor((tis % 3600) / 60)).padStart(2, "0");
    const sec = String(tis % 60).padStart(2, "0");
  
    return `${hour}:${min}:${sec}`;
  };

  
const StopWatch = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resetTimer = () =>{
      setTimer(0)
        setIsRunning(false);

  }

  useEffect(() => {
    let timerId:ReturnType<typeof setInterval>;;
     if(isRunning)
         timerId= setInterval(() => {
             setTimer(prev=>prev+1)
            }, 1000);
    

    return ()=>{
        clearInterval(timerId)
    }
  }, [isRunning]);


  return (
    <div className="adminAppContainer">
      <CardLayout classname="stopWatchContainer">
        <h2 className="primary-text">StopWatch</h2>
        <span>{timerFunction(timer)}</span>
        <div className="btnGrp">
            <Button
            onClick={()=>setIsRunning(prev=>!prev)}
              text={isRunning?"Stop":"Start"} bgColor={isRunning?"red":''} />
            <Button onClick={resetTimer} text="Reset" bgColor="red"/>
        </div>
      </CardLayout>
    </div>
  );
};

export default StopWatch;
