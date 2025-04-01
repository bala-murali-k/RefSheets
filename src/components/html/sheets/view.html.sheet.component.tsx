import * as React from 'react'
import { Grid, Accordion, AccordionDetails, AccordionSummary, Typography, Box, IconButton, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'

function ViewHtmlCheat ({ inputData }: any) {

    const [recievedDataHeaders] = React.useState<any[]>(Object.keys(inputData.cheatData.data))
    const [firstColumn, setFirstColumn] = React.useState<any[]>([])
    const [secondColumn, setSecondColumn] = React.useState<any[]>([])
    const [thirdColumn, setThirdColumn] = React.useState<any[]>([])
    const [copiedIndex, setCopiedIndex] = React.useState<any>(null)

    React.useEffect(() => {
        let firstColumn: any[] = []
        let secondColumn: any[] = []
        let thirdColumn: any[] = []
        for (let index = 0; index < recievedDataHeaders.length; index++) {
            if (index % 3 === 0) {
                firstColumn.push(recievedDataHeaders[index])
            } else if (index % 3 === 1) {
                secondColumn.push(recievedDataHeaders[index])
            } else if (index % 3 === 2) {
                thirdColumn.push(recievedDataHeaders[index])
            }
        }
        setFirstColumn(firstColumn)
        setSecondColumn(secondColumn)
        setThirdColumn(thirdColumn)
    }, [recievedDataHeaders])

    function renderColumn (column: any[]) {
        return column?.map((renderingData: any) => {
                            
            let result: any = (
                <Grid item xs={12} key={`${renderingData}_card`} >
                    <Box sx={{ pt: 1, pl: 2, pr: 2, pb: 2, backgroundColor: '#374151', mt: 2 }} >
                        <Box sx={{ p: 1, borderBottom: '1px solid grey' }} >
                            <Typography variant="body1" sx={{ fontSize: '18px', fontWeight: 900, color: 'white' }} >
                                {renderingData}
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 1, backgroundColor: '#374151' }} >
                            {inputData.cheatData.data[renderingData].length > 0 &&
                                inputData.cheatData.data[renderingData].map((renderingCheats: any, index: number) => {
                                    let innerResult: any = (
                                        <Accordion
                                            key={`javascript_cheat_${index}`}
                                            square={true}
                                            disableGutters={true}
                                            sx={{ backgroundColor: 'inherit', borderBottom: index === inputData.cheatData.data[renderingData].length - 1 ? 'none' : '1px solid #374151' }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                                aria-controls="includes_accordion_js_content"
                                                id="includes_accordion_js"
                                                sx={{ backgroundColor: '#1F2937', color: '#93C5FD' }}
                                            >
                                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                                    <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }} >
                                                        {renderingCheats.headers}
                                                    </Typography>
                                                    {
                                                        renderingCheats.isReferenceLink && 
                                                            <Button
                                                                variant={"outlined"} 
                                                                href={renderingCheats.referenceLink}
                                                                target={"_blank"}
                                                                rel={"noopener noreferrer"}
                                                                size="small"
                                                                startIcon={<MenuBookRoundedIcon sx={{ color: '#FBBF24' }} />}
                                                                sx={{ 
                                                                    color: 'white', 
                                                                    fontSize: '10px', 
                                                                    fontWeight: '450',
                                                                    border: '1px solid rgba(251, 191, 36, 0.5)', 
                                                                    borderRadius: '25px', 
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    textAlign: 'center', 
                                                                    textDecoration: 'none' 
                                                                }}
                                                            >
                                                                <Typography sx={{ fontWeight: 'inherit', fontSize: 'inherit', textAlign: 'center' }} >
                                                                    Docs
                                                                </Typography>
                                                            </Button>
                                                    }
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ border: '0.3px solid #1F2937' }} >
                                                {
                                                    renderingCheats?.isDescription &&
                                                        <Typography sx={{ color: '#d4d4d8', fontWeight: 'bold', fontSize: '14px' }} >
                                                            {renderingCheats?.description}
                                                        </Typography>
                                                }
                                                {
                                                    renderingCheats?.isSyntax &&
                                                        <Box sx={{ width: '98%', backgroundColor: '#111827', color: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} 
                                                        className={'clipboardCopy'}
                                                        >
                                                            <Typography sx={{ pl: '10px', color: '#F472B6' }} >
                                                                {renderingCheats.syntax}
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }} >
                                                                {
                                                                    copiedIndex === index &&
                                                                    <Box>copied !</Box>
                                                                }
                                                                <IconButton onClick={() => {
                                                                    if (!renderingCheats.syntax) {
                                                                        return
                                                                    }
                                                                    navigator.clipboard.writeText(renderingCheats.syntax)
                                                                    setCopiedIndex(index)
                                                                    setTimeout(() => {
                                                                        setCopiedIndex(null)
                                                                    }, 3000)
                                                                }} >
                                                                    <ContentCopyRoundedIcon sx={{ color: copiedIndex === index ? '#4caf50' : 'white', transition: 'color 0.3s ease-in-out' }} />
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                }
                                                {
                                                    renderingCheats.isSyntaxDescription &&
                                                    <Typography sx={{ color: '#d4d4d8', fontWeight: 'normal', fontSize: '14px', whiteSpace: 'preWrap' }} >
                                                        {renderingCheats.syntaxDescription}
                                                    </Typography>
                                                }
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                    return innerResult
                                })
                            }
                        </Box>
                    </Box>
                </Grid>
            )
            return result
        })
    }

    return (
        // <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90dvw', height: '100dvh' }} >
            <Grid container sx={{ backgroundColor: '#1F2937', height: '100dvh', pl: '1rem', pr: '1rem', overflowY: 'scroll' }} >

                <Grid item xs={4} sx={{ pl: 1, pr: 1,  }} >
                    {firstColumn.length > 0 && 
                        renderColumn(firstColumn)
                    }
                </Grid>
                <Grid item xs={4} sx={{ pl: 1, pr: 1 }} >
                    {secondColumn.length > 0 && 
                        renderColumn(secondColumn)
                    }
                </Grid>
                <Grid item xs={4} sx={{ pl: 1, pr: 1 }} >
                    {thirdColumn.length > 0 && 
                        renderColumn(thirdColumn)
                    }
                </Grid>
                <Grid xs={12} >
                    <Box sx={{ height: '10dvh', backgroundColor: '#1F2937' }} >
                    </Box>
                </Grid>
            </Grid>
        // </Box>
    )
}

export default ViewHtmlCheat
    