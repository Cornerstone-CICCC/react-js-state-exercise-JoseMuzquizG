import { useState } from 'react'
import './App.css'
import LightToggle from './components/LightToggle'
import Counter from './components/Counter'
import LottoNumbers from './components/LottoNumbers'

const App = () => {

  const [isLightsOn, setIsLightsOn] = useState<boolean>(true)
  const [counter, setCounter] = useState<number>(0)
  let [lottoNums, setLottoNum] = useState<string>("")


  const handleLightsOn = () => {
    setIsLightsOn(!isLightsOn)
  }

  const handleAddCounter = () => {
    setCounter(counter => counter + 1)
  }

  const handleSubtractCounter = () => {
    setCounter(counter => counter - 1)
  }

  const handleLottoNumbers = () => {
    let lottoPool: number[] = [0, 0, 0, 0, 0, 0, 0]
    const lottoVals = (lottoPool.map(generatedNum => generatedNum = Math.floor(Math.random()* 50))).map(String)
    lottoNums = lottoVals.join(", ")
    setLottoNum(lottoNums)
  }
  
  return (
    <div>
      <div style={{
        backgroundColor: isLightsOn ? "white" : "black",
        color: isLightsOn ? "black" : "white"
      }}>
        <h2>Light Toggle</h2>
        <LightToggle lightOn={handleLightsOn}/>
        <div>Change this background color using the style attribute</div>
      </div>

      <div>
        <h2>Lotto Numbers</h2>
        <LottoNumbers onClick={handleLottoNumbers}/>
        <div className="output">{lottoNums}</div>
      </div>

      <div>
        <h2>Click Counter</h2>
        <Counter addCount={handleAddCounter} subtractCount={handleSubtractCounter}/>
        <div className="output">{counter}</div>
      </div>
    </div>
  )
}

export default App