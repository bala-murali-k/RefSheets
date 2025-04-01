import ViewHtmlCheat from './view.html.sheet.component'
import htmlData from './../../../data/html/sheets/data.sheet.html.json'
import SidebarComponent from './../../../layout/sidebar/layout.sidebar.component'
import { Box } from '@mui/material'

function CoreHtmlSheets () {
    
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <SidebarComponent />
            <ViewHtmlCheat
                inputData={{
                    cheatData: htmlData
                }}
            />
        </Box>
    )
}

export default CoreHtmlSheets
