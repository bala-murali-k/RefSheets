import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function ViewLandingComponent () {
	return (
		<Box sx={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
			<Box sx={{ height: '80dvh', width: '60dvw' }} >
				<Link to='/RefSheets/javascript/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
					<Typography>
						Javascript
					</Typography>
				</Link>
				<Link to='/RefSheets/linux/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
					<Typography>
						Linux
					</Typography>
				</Link>

				<Typography variant="h4" >
					Future Plans
				</Typography>
				<Typography>
					1. Copy Syntax to clipboard
					<br />
					2. Expand the references
					<br />
					3. Add the Informations
					<br />
					4. Implement Side Bar
				</Typography>

			</Box>
		</Box>
	)
}

export default ViewLandingComponent