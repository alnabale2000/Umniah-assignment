import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setStatus } from "./../reducers/login";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

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
    const type = localStorage.getItem("type");
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

    const loggedOut = () => {
        //clear localStorage and update the state
        localStorage.clear();
        dispatch(setToken({ token: "", user }));
        navigate("/");
    };
    const goTo = (endPoint) => {
        navigate(endPoint);
    };
    return (
        <nav className="navbar ">
            <div>
              
              <h1
                  className="title"
                  onClick={() => {
                    goTo("/");
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
