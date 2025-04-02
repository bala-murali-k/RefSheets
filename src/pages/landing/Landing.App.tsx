import { useLocation } from 'react-router-dom'
import LandingCoreComponent from './../../components/landing/core.landing.page.component'
import useSidebarStore from './../../store/sidebar/store.sidebar.global'

function LandingPage () {

	const location = useLocation()
	const { isSidebarState, setSidebarState } = useSidebarStore()

	// if (location.pathname === '/') {
	// 	setSidebarState()
	// 	// console.log("the path name is : ", location.pathname === '/')
	// }

	return (
		<LandingCoreComponent />
	)
}

export default LandingPage