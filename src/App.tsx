import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* Routes */
import { Login, Home } from '@Pages'
import Endpoints from './components/Pages/Endpoints'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/endpoints" element={<Endpoints />} />
				<Route path="/auth" element={<Login />} />
			</Routes>
		</Router>
	)
}

export default App