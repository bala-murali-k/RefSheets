import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landing/Landing.App'
import AppJavascript from './javascript/Javascript.App'
import './../App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/RefSheets' element={ <LandingPage /> } />
        <Route path='/RefSheets/javascript/sheets' element={ <AppJavascript /> } />
        <Route path='/RefSheets/linux/sheets' element={ <AppJavascript /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
