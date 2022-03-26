import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    async function addNewUser() {
        try {
            //client validation
            if (!username || !email || !password ||!phoneNumber) {
                setMessage("Please fill all the info");
            } else {
                await axios
                    .post("http://localhost:8000/users", {
                        username,
                        email,
                        password,
                    })
                    .then((response) => {
                        if (response) {
                            console.log('response', response.data);
                            setMessage("The user has been created successfully ");

                            // Add Registration To User Activities
                            // axios.post("http://localhost:8000/user-activity",{

                            // })
                            setTimeout(()=> {
                                navigate("/login");
                            }, 2000);
                        } else {
                            setMessage("Error happened while register, please try again");
                        }
                    });
            }
        } catch (error) {
            setMessage("Error 5000 happened while register, please try again");
            setTimeout(() => {
                setMessage("");
            }, 3000);
            throw error;
        }
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewUser();
    };

    return (
        <main className="login-body">
            <div className="login-box">
                <h2 className="login-top-text">SIGN UP</h2>
                <form onSubmit={handleSubmit}>
                   
                    <div className="login-input-box">
                        <label className="login-label">Email</label>
                        <br />
                        <input
                            className="login-input"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-box">
                        <label className="login-label">Password</label>
                        <br />

                        <input
                            className="login-input"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-box">
                        <label className="login-label">Username</label>
                        <br />
                        <input
                            className="login-input"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-box">
                        <label className="login-label">PhoneNumber</label>
                        <br />
                        <input
                            className="login-input"
                            type="text"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <button onClick={handleSubmit} className="login-submit-btn">
                        SUBMIT
                    </button>
                    <div className="divider"></div>

                    {/* Avoiding extra white space*/}
                    <p className={message === "" ? "" : "form-message"}>{message} </p>
                    <p className="footer-login-text">
                        Already Have An Account?
                        <span
                            className="switch-link"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            login
                        </span>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default SignUp;
