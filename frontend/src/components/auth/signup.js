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
                const response= await axios.post("http://localhost:8000/users", {
                            username,
                            email,
                            password,
                            phoneNumber,
                });
                if(response){
                        console.log('response', response.data);
                        setMessage("The user has been created successfully ");

                        const result=await axios.get(`http://localhost:8000/user/${email}`);
                        const userId= result.data[0].id
                                    
                        // Add Registration To User Activities
                        await axios.post("http://localhost:8000/user-activity",{
                            userId,
                            type:'Account Created',
                            details:'No Details'
                        })
                        setTimeout(()=> {
                            navigate("/login");
                        }, 2300);
                }
                else {
                    setMessage("Error happened while register, please try again");
                }
                
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
        <main className="form-body">
            <div className="form-box">
                <h2 className="form-top-text">SIGN UP</h2>
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
                    <div className="form-input-box">
                        <label className="form-label">Username</label>
                        <br />
                        <input
                            className="form-input"
                            type="text"form
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-input-box">
                        <label className="form-label">PhoneNumber</label>
                        <br />
                        <input
                            className="form-input"
                            type="text"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <button onClick={handleSubmit} className="form-submit-btn">
                        SUBMIT
                    </button>
                    <div className="divider"></div>

                    {/* Avoiding extra white space*/}
                    <p className={message === "" ? "" : "form-message"}>{message} </p>
                    <p className="footer-form-text">
                        Already Have An Account? 
                        <span
                            className="switch-link"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            {" "}Login
                        </span>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default SignUp;
