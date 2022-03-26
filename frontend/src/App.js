import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/signup";
import Navigation from './components/navigation';
import Login from './components/auth/login';
const App = () => {
	return <div className="App">
		<Navigation/>
		{/* <SignUp/> */}
		<Routes>
			<Route path ='/login' element={<Login/>}/>
			<Route path ='/signup' element={<SignUp/>}/>
		</Routes>
	</div>;
};

export default App;
