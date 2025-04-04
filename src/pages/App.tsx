import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landing/Landing.App'
import AppJavascript from './javascript/Javascript.App'
import AppHtml from './html/Html.App'
import './../App.css'

function App() {

  return (
    <BrowserRouter basename="/RefSheets" >
      <Routes>
        <Route index path='/' element={ <LandingPage /> } />
        <Route path='/html/sheets' element={ <AppHtml /> } />
        <Route path='/javascript/sheets' element={ <AppJavascript /> } />
        <Route path='/linux/sheets' element={ <AppJavascript /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
