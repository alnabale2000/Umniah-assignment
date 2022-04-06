import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setStatus } from "./../reducers/login";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Navigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let user;
    const storedToken = localStorage.getItem("token");

    //to avoid (token!== string) error
    if (storedToken) {
        user = jwt_decode(storedToken, { header: true });
    }

    const id = localStorage.getItem("id");
    const state = useSelector((state) => {
        return {
            isLoggedIn: state.loginReducer.isLoggedIn,
        };
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        //check if the user was logged in or not
        setStatus(token ? true : false);
        setToken({ token, user });
    }, []);

    const loggedOut = async () => {
      // Add Logout To User Activities
        await axios.post("http://localhost:8000/user-activity",{
            userId:id,
            type:'Log Out',
            details:'No Details'
        })

        //clear localStorage and update the state
        localStorage.clear();
        dispatch(setToken({ token: "", user }));
        console.log('user', user);

        navigate("/");


    };
    const goTo = (endPoint) => {
        navigate(endPoint);
    };
    return (
        <nav className="navbar flex-box space-b">
            <div>             
                <h1
                    className="title"
                    onClick={() => {
                        // TODO: Go to home page
                    }}
                >
                    Home
                </h1>
            </div>
            {state.isLoggedIn ? (
                <h1 className="link" onClick={loggedOut}>
                    log out
                </h1>
            ) : (
                <h1
                    className="link"
                    onClick={() => {
                        goTo("/signup");
                    }}
                >
                    Sign Up
                </h1>
            )}
        </nav>
    );
};

export default Navigation;
