import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppJavascript from './javascript/Javascript.App'
import './../App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/RefSheets' element={ <AppJavascript /> } />
        <Route path='/RefSheets/javascript/cheats' element={ <AppJavascript /> } />
        <Route path='/RefSheets/linux/cheats' element={ <AppJavascript /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
