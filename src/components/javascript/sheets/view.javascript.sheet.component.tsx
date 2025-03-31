import * as React from 'react'
import { Grid, Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function ViewJavascriptCheat ({ inputData }: any) {

    // const recievedDataHeaders: any = Object.keys(inputData.cheatData.data)
    const [recievedDataHeaders] = React.useState<any[]>(Object.keys(inputData.cheatData.data))
    const [firstColumn, setFirstColumn] = React.useState<any[]>([])
    const [secondColumn, setSecondColumn] = React.useState<any[]>([])
    const [thirdColumn, setThirdColumn] = React.useState<any[]>([])

    React.useEffect(() => {console.log("This is the main console ", firstColumn, secondColumn, thirdColumn)}, [firstColumn, secondColumn, thirdColumn])

    React.useEffect(() => {
        let firstColumn: any[] = []
        let secondColumn: any[] = []
        let thirdColumn: any[] = []
        for (let index = 0; index < recievedDataHeaders.length; index++) {
            if (index % 3 === 0) {
                firstColumn.push(recievedDataHeaders[index])
            } else if (index % 3 === 1) {
                secondColumn.push(recievedDataHeaders[index])
            } else {
                thirdColumn.push(recievedDataHeaders[index])
            }
        }
        setFirstColumn(firstColumn)
        setSecondColumn(secondColumn)
        setThirdColumn(thirdColumn)
    }, [recievedDataHeaders])

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <Grid container sx={{ backgroundColor: '#1F2937' }} >

                <Grid item xs={4} sx={{ pl: 1, pr: 1,  }} >
                    {firstColumn.length > 0 && 
                        firstColumn?.map((renderingData: any) => {
                            console.log("The mapping data is : ", renderingData, inputData.cheatData.data[renderingData])

                            let result: any = (
                                <Grid item xs={12} key={`${renderingData}_card`} sx={{  }} >
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
                                                            sx={{ backgroundColor: 'inherit' }}
                                                        >
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                                                aria-controls="includes_accordion_js_content"
                                                                id="includes_accordion_js"
                                                                sx={{ backgroundColor: '#1F2937', color: '#93C5FD' }}
                                                            >
                                                                <Typography>
                                                                    {renderingCheats.headers}
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails
                                                                sx={{ border: '0.3px solid #1F2937' }}
                                                            >
                                                                <Typography
                                                                    sx={{ color: 'white' }}
                                                                >
                                                                    {`syntax: ${renderingCheats.syntax}`}
                                                                </Typography>
                                                                <Typography sx={{ color: 'white' }} >
                                                                    {renderingCheats.details}
                                                                </Typography>
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
                </Grid>
                <Grid item xs={4} sx={{ pl: 1, pr: 1 }} >
                    {secondColumn.length > 0 && 
                        secondColumn?.map((renderingData: any) => {
                            console.log("The mapping data is : ", renderingData, inputData.cheatData.data[renderingData])

                            let result: any = (
                                <Grid item xs={12} key={`${renderingData}_card`} sx={{  }} >
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
                                                            sx={{ backgroundColor: 'inherit' }}
                                                        >
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                                                aria-controls="includes_accordion_js_content"
                                                                id="includes_accordion_js"
                                                                sx={{ backgroundColor: '#1F2937', color: '#93C5FD' }}
                                                            >
                                                                <Typography>
                                                                    {renderingCheats.headers}
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails
                                                                sx={{ border: '0.3px solid #1F2937' }}
                                                            >
                                                                <Typography
                                                                    sx={{ color: 'white' }}
                                                                >
                                                                    {`syntax: ${renderingCheats.syntax}`}
                                                                </Typography>
                                                                <Typography sx={{ color: 'white' }} >
                                                                    {renderingCheats.details}
                                                                </Typography>
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
                </Grid>
                <Grid item xs={4} sx={{ pl: 1, pr: 1 }} >
                    {thirdColumn.length > 0 && 
                        thirdColumn?.map((renderingData: any) => {
                            console.log("The mapping data is : ", renderingData, inputData.cheatData.data[renderingData])

                            let result: any = (
                                <Grid item xs={12} key={`${renderingData}_card`} sx={{  }} >
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
                                                            sx={{ backgroundColor: 'inherit' }}
                                                        >
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                                                aria-controls="includes_accordion_js_content"
                                                                id="includes_accordion_js"
                                                                sx={{ backgroundColor: '#1F2937', color: '#93C5FD' }}
                                                            >
                                                                <Typography>
                                                                    {renderingCheats.headers}
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails
                                                                sx={{ border: '0.3px solid #1F2937' }}
                                                            >
                                                                <Typography
                                                                    sx={{ color: 'white' }}
                                                                >
                                                                    {`syntax: ${renderingCheats.syntax}`}
                                                                </Typography>
                                                                <Typography sx={{ color: 'white' }} >
                                                                    {renderingCheats.details}
                                                                </Typography>
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
                </Grid>
                <Grid xs={12} >
                    <Box sx={{ height: '10dvh', backgroundColor: '#1F2937' }} >
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ViewJavascriptCheat
    