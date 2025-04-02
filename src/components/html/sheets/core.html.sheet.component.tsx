import ViewHtmlCheat from './view.html.sheet.component'
import htmlData from './../../../data/html/sheets/data.sheet.html.json'

function CoreHtmlSheets () {
    
    return (
        <ViewHtmlCheat
            inputData={{
                cheatData: htmlData
            }}
        />
    )
}

export default CoreHtmlSheets