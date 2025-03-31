import ViewJavascriptCheat from './view.javascript.sheet.component'
import javascriptCheatData from './../../../data/javascript/sheets/data.sheet.javascript.json'
import SidebarComponent from './../../../layout/sidebar/layout.sidebar.component'
import { Box } from '@mui/material'

function CoreJavascriptSheets () {

    // const [clipboardCopy, setClipboardCopy] = React.useState<string>("")

    // React.useEffect(() => {
    //     if (clipboardCopy) {
    //         console.log("The copied text is ", clipboardCopy)
    //     }
    // }, [clipboardCopy])

    function clipboardCopy (targetText: string) {
        if (!targetText) {
            return
        }
        navigator.clipboard.writeText(targetText)
    }
    
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <SidebarComponent />
            <ViewJavascriptCheat
                inputData={{
                    cheatData: javascriptCheatData
                }}
                inputFunction={{
                    handleClipboard: (data: string) => {clipboardCopy(data)}
                }}
            />
        </Box>
    )
}

export default CoreJavascriptSheets
