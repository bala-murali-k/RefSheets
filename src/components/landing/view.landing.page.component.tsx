import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
// import useSidebarStore from './../../store/sidebar/store.sidebar.global'

function ViewLandingComponent () {

	// const { setSidebarState } = useSidebarStore()

	function landingPlaceholder() {
		return (
			<Box sx={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
				<Box sx={{ height: '80dvh', width: '60dvw' }} >
					<Link to='/html/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
						<Typography onClick={() => {}} >
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
					<Link to='/bugged/fixes' style={{ textDecoration: 'none', color: 'inherit' }} >
						<Typography>
							Bugged and Unplugged
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

	return (
		<Box sx={{ width: '100dvw', height: '100dvh', backgroundColor: '#000000ff' }} >
			{/*{landingPlaceholder()}*/}
			<Box sx={{ display: 'flex', width: '100%', height: '80%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
				<Typography variant="h1" sx={{ color: '#ffcf33ff', width: '50%' }} >
					Your Quick References Here.
				</Typography>
				<Box sx={{ width: '50%' }} >
				</Box>
			</Box>
			<Box sx={{ width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
				<Button color={'error'} variant={'contained'} sx={{ color: 'white', borderRadius: '40px' }} >
					<Link to='/html/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
						<Typography onClick={() => {}} >
							Html
						</Typography>
					</Link>
				</Button>
				<Button color={'error'} variant={'contained'} sx={{ color: 'white', borderRadius: '40px' }} >
					<Link to='/javascript/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
						<Typography>
							Javascript
						</Typography>
					</Link>
				</Button>
				<Button color={'error'} variant={'contained'} sx={{ color: 'white', borderRadius: '40px' }} >
					<Link to='/linux/sheets' style={{ textDecoration: 'none', color: 'inherit' }} >
						<Typography>
							Linux
						</Typography>
					</Link>
				</Button>
				<Button color={'error'} variant={'contained'} sx={{ color: 'white', borderRadius: '40px' }} >
					<Link to='/bugged/fixes' style={{ textDecoration: 'none', color: 'inherit' }} >
						<Typography>
							Problems
						</Typography>
					</Link>
				</Button>
				<Button color={'error'} variant={'contained'} sx={{ color: 'white', borderRadius: '40px' }} >
					<Link to='/bugged/fixes' style={{ textDecoration: 'none', color: 'inherit' }} >
						<Typography>
							Problems
						</Typography>
					</Link>
				</Button>
			</Box>
		</Box>
	)
}

export default ViewLandingComponent


/**
 * 
 * ( PRIMARY COLORS ) Dark Mode in Landing Page
 * 
 * --black: #000000ff;
 * 
 * --caribbean-current: #216869ff;
 * 
 * --sunglow: #ffcf33ff;
 * 
 * --fire-engine-red: #c1292eff;
 * 
 * --mint-green: #dcfffdff;
 * 
 */

/**
 * 
 * ( PRIMARY COLORS ) Light Mode in Landing Page
 * 
 * --mint-cream: #f7fff7ff;
 * 
 * --sandy-brown: #f5a65bff;
 * 
 * --slate-gray: #6f7c9bff;
 * 
 * --red-cmyk: #f50018ff;
 * 
 * --black-bean: #280003ff;
 * 
 */