import {useState} from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme = (prevTheme => (prevTheme === "light" ? "dark" : "light"))
  }


  return (
    <>
      <div className={`app ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Content theme={theme}/>
      </div>
    </>
  )
}

export default App
