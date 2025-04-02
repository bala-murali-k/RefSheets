import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import useSidebarStore from './../store/sidebar/store.sidebar.global'
import SidebarComponent from './../layout/sidebar/layout.sidebar.component'
import LandingPage from './landing/Landing.App'
import AppJavascript from './javascript/Javascript.App'
import AppHtml from './html/Html.App'
import './../App.css'

function App() {

  const { isSidebarState, setSidebarState } = useSidebarStore()

  return (
    <BrowserRouter basename="/RefSheets" >
      <Box sx={{ m: 0, p: 0, width: '100dvw', height: '100dvh', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }} >
        {
          isSidebarState && 
            <SidebarComponent />
        }
        <Routes>
          <Route index path='/' element={ <LandingPage /> } />
          <Route path='/html/sheets' element={ <AppHtml /> } />
          <Route path='/javascript/sheets' element={ <AppJavascript /> } />
          <Route path='/linux/sheets' element={ <AppJavascript /> } />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App