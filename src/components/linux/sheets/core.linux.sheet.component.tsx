import ViewJavascriptCheat from './view.linux.sheet.component'
import javascriptCheatData from './../../../data/linux/sheets/data.sheet.linux.json'

function CoreJavascriptSheets () {

    
    return (
        <ViewJavascriptCheat
            inputData={{
                cheatData: javascriptCheatData
            }}
        />
    )
}

export default CoreJavascriptSheets
