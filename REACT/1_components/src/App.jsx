import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextComponent from './components/TextComponents'
import { SecondText, ThirdText } from './components/OtherComponents'
// <> </>= fragment, sera usada semppre quando agente não quer um div dentro de outra
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div>
        <TextComponent/>
        <SecondText/>
        <ThirdText/>
        <TextComponent/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Alterando components App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


//jsx é basicammente a mistura de javascript com html
// components facilita na reutilização das function