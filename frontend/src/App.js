import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/signup";
import Navigation from './components/navigation';
import Login from './components/auth/login';
import ActivityPage from './components/activity-page/activity-page';
import EmailResetPass from "./components/forgetten-password/email-reset-password";
import ResetPassword from "./components/forgetten-password/reset-pass";

const App = () => {
	return <div className="App">
		<Navigation/>
		{/* <SignUp/> */}
		<Routes>
			<Route exact path ='/login' element={<Login/>}/>
			<Route exact path ='/signup' element={<SignUp/>}/>
			<Route path='/dashboard' element={<ActivityPage/>}/>
			<Route path='/reset-password' element={<EmailResetPass/>} />
			<Route path='/new-password' element={<ResetPassword/>} />
			<Route exact path='/' element={<SignUp/>} />
		</Routes>
	</div>;
};

export default App;
