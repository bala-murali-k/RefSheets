import ViewJavascriptCheat from './view.javascript.sheet.component'
import javascriptCheatData from './../../../data/javascript/sheets/data.sheet.javascript.json'

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
