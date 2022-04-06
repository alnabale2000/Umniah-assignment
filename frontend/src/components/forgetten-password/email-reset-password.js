import React, { useState } from "react";

const EmailResetPass = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        
    };
    return (
        <main className="form-body fixed">
            <div className="form-box email-form">
                <h2 className="form-top-text email-top-text">Reset Password</h2>
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
                    <button onSubmit={handleSubmit} className="form-submit-btn">
                        Reset
                    </button>
                </form>
            </div>
        </main>
    )
}

export default EmailResetPass