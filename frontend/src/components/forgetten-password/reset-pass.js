import React, { useState } from "react";

const ResetPassword = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        
    };
    return (
        <main className="form-body fixed">
            <div className="form-box email-form">
                <h2 className="form-top-text email-top-text">Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-input-box">
                        <label className="form-label">Password</label>
                        <br />
                        <input
                            className="form-input"
                            type="password"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your new password'
                            required
                        />
                    </div>
                    <button onSubmit={handleSubmit} className="form-submit-btn">
                        Reset
                    </button>
                </form>
            </div>
        </main>
    )
}

export default ResetPassword