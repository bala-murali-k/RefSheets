import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function ViewLandingComponent () {
	return (
		<Box sx={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
			<Box sx={{ height: '80dvh', width: '60dvw' }} >
				<Link to='/html/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
					<Typography>
						Html
					</Typography>
				</Link>
				<Link to='/javascript/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
					<Typography>
						Javascript
					</Typography>
				</Link>
				<Link to='/linux/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
					<Typography>
						Linux
					</Typography>
				</Link>

				<Typography variant="h4" >
					Future Plans
				</Typography>
				<Typography>
					1. Expand the references
					<br />
					2. Add the Informations
					<br />
					3. Implement Side Bar
				</Typography>

			</Box>
		</Box>
	)
}

export default ViewLandingComponent