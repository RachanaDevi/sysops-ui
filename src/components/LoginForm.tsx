function LoginForm() {
    return (
        <>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" />
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
            </div>

        </>
    );
}

export default LoginForm;