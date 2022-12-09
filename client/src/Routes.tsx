import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home.tsx';

function AppRoutes () {

	return (

		<Router>
			

			<Routes>
				

				<Route path="/" element={<Home/>}/>


			</Routes>


		</Router>

	);

}

export default AppRoutes;