import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'

const App = () => {

  const currentTheme = localStorage.getItem('currentTheme');
  const [ theme, setTheme ] = useState(currentTheme? currentTheme : 'light');

  // update value of current theme in local storage
  useEffect(() => {
    localStorage.setItem('currentTheme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
