import * as React from 'react'
import { Grid, Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

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
            <Grid container sx={{ backgroundColor: 'green' }} >

                <Grid item xs={4} sx={{ pl: 1, pr: 1,  }} >
                    {firstColumn.length > 0 && 
                        firstColumn?.map((renderingData: any) => {
                            console.log("The mapping data is : ", renderingData, inputData.cheatData.data[renderingData])

                            let result: any = (
                                <Grid item xs={12} key={`${renderingData}_card`} sx={{  }} >
                                    <Box sx={{ pt: 1, pl: 2, pr: 2, pb: 2, backgroundColor: 'orange', mt: 2 }} >
                                        <Box sx={{ p: 1, borderBottom: '1px solid grey' }} >
                                            <Typography variant="body1" sx={{ fontSize: '18px', fontWeight: 900 }} >
                                                {renderingData}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mt: 1 }} >
                                            {inputData.cheatData.data[renderingData].length > 0 &&
                                                inputData.cheatData.data[renderingData].map((renderingCheats: any, index: number) => {
                                                    let innerResult: any = (
                                                        <Accordion
                                                            key={`javascript_cheat_${index}`}
                                                            // transition={'fade'}
                                                            slots={{
                                                                heading: (properties: any) => {
                                                                    return (
                                                                        <Box {...properties} sx={{ borderRadius: 0 }} >
                                                                        </Box>
                                                                    )
                                                                },
                                                                root: (properties: any) => {
                                                                    return (
                                                                        <Box {...properties} sx={{ borderRadius: 0, backgroundColor: 'white' }} >
                                                                        </Box>
                                                                    )
                                                                },
                                                                // transition: (properties: any) => {
                                                                //     return (
                                                                //         <Fade in={checked} />
                                                                //     )
                                                                // }
                                                            }}
                                                        >
                                                            <AccordionSummary
                                                                expandIcon={<ArrowDownwardIcon />}
                                                                aria-controls="includes_accordion_js_content"
                                                                id="includes_accordion_js"
                                                            >
                                                                <Typography>
                                                                    {renderingCheats.headers}
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    {`syntax: ${renderingCheats.syntax}`}
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
                                <Grid item xs={12} key={`${renderingData}_card`} sx={{ backgroundColor: 'lightblue' }} >
                                    <Box sx={{ backgroundColor: '' }} >
                                        <Typography>
                                            {renderingData}
                                        </Typography>
                                        {inputData.cheatData.data[renderingData].length > 0 &&
                                            inputData.cheatData.data[renderingData].map((renderingCheats: any, index: number) => {
                                                let innerResult: any = (
                                                    <Accordion key={`javascript_cheat_${index}`} >
                                                        <AccordionSummary
                                                            expandIcon={<ArrowDownwardIcon />}
                                                            aria-controls="includes_accordion_js_content"
                                                            id="includes_accordion_js"
                                                        >
                                                            <Typography>
                                                                {renderingCheats.headers}
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                {`syntax: ${renderingCheats.syntax}`}
                                                                {renderingCheats.details}
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                )
                                                return innerResult
                                            })
                                        }
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
                                <Grid item xs={12} key={`${renderingData}_card`} sx={{ backgroundColor: 'lightblue' }} >
                                    <Box sx={{ backgroundColor: '' }} >
                                        <Typography>
                                            {renderingData}
                                        </Typography>
                                        {inputData.cheatData.data[renderingData].length > 0 &&
                                            inputData.cheatData.data[renderingData].map((renderingCheats: any, index: number) => {
                                                let innerResult: any = (
                                                    <Accordion key={`javascript_cheat_${index}`} >
                                                        <AccordionSummary
                                                            expandIcon={<ArrowDownwardIcon />}
                                                            aria-controls="includes_accordion_js_content"
                                                            id="includes_accordion_js"
                                                        >
                                                            <Typography>
                                                                {renderingCheats.headers}
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                {`syntax: ${renderingCheats.syntax}`}
                                                                {renderingCheats.details}
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                )
                                                return innerResult
                                            })
                                        }
                                    </Box>
                                </Grid>
                            )
                            return result
                        })
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default ViewJavascriptCheat
    