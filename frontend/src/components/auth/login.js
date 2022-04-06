import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { setToken, setStatus } from "../../reducers/login";
import CustomPopup from "../popup";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [toggleConfirmButton, setToggleConfirmButton] = useState(true);
    const [visibility, setVisibility] = useState(false);


    const openPopUb = () => {
        //re-setState
        if (toggleConfirmButton === false) setToggleConfirmButton(true);
        
        //open pop-up
        setVisibility(!visibility);
    };

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/login", { email, password })
            .then((result) => {
                const user = jwt_decode(result.data["token"]);
                if (result) {
                    dispatch(setToken({ token: result.data["token"], user }));
                    localStorage.setItem("token", result.data["token"]);
                    localStorage.setItem("id", user.userId);

                            // Add Login To User Activities
                            axios.post("http://localhost:8000/user-activity",{
                                userId:user.userId,
                                type:'Log in',
                                details:'No Details'
                            })
                    if (user.type === "user") {
                        navigate("/dashboard");
                        dispatch(setStatus(true));
                    } else {
                        // If we had another type of clients we can navigate here.
                    }
                } else {
                    setMessage("Error happened while login, please try again");
                    openPopUb();
                }
            })
            .catch((err) => {
                setMessage("Password or Email is incorrect");
                openPopUb()
            })
            
    };

    return (
        <main className="form-body fixed">
            <div className="form-box">
                <h2 className="form-top-text">LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-input-box">
                        <label className="form-label">Email</label>
                        <br />
                        <input
                            className="form-input"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-input-box">
                        <label className="form-label">Password</label>
                        <br />
                        <input
                            className="form-input"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button onSubmit={handleSubmit} className="form-submit-btn">
                        SUBMIT
                    </button>
                    <div className="divider"></div>

                    <CustomPopup
                        onClose={popupCloseHandler}
                        show={visibility}
                        title="Warning"
                    >
                        {message}
                    </CustomPopup>
                    <p className="footer-form-text reset">
                        forget your password?
                        <span
                            className="switch-link"
                            onClick={() => {
                                navigate("/reset-password");
                            }}
                        >
                            Reset
                        </span>
                    </p>
                    <p className="footer-form-text">
                        don't have an account?
                        <span
                            className="switch-link"
                            onClick={() => {
                                navigate("/signup");
                            }}
                        >
                            Create Account here
                        </span>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Login;
