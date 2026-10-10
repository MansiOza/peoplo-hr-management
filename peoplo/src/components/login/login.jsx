import Button from "../button/button";
import TextInput from "../inputText/inputText";
import "./login.scss";
import LogoWhite from "../../assets/imgs/logo/logo-white.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const newError = {}

        if(email.trim() === "") {
            newError.email = "Email is required";
        } else if(!/^\S+@\S+\.\S+$/.test(email)) {
            newError.email = "Enter a valid email address";
        }

        if(password.trim() === "") {
            newError.password = "Password is required";
        } else if (password.length < 8) {
            newError.password = "Please enter atleast 8 characters";
        }

        setError(newError);

        if(Object.keys(newError).length === 0) {
            navigate("/dashboard")
        }
    }

    return(
        <div className="login">
            <div className="left">
                <div className="logo">
                    <img src={LogoWhite} alt="Peoplo White Logo" />
                </div>
                <div className="headline">
                    <h2>Your people, <br/> beautifully managed.</h2>
                    <p>Time off, payroll, hiring and performance — one calm workspace for your whole team.</p>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    <h2>Welcome back</h2>
                    <p>Sign in to manage your team, time off and payroll.</p>

                    <form noValidate onSubmit={handleSubmit}>
                        <TextInput
                            inputLabel="Work email"
                            inputType="email"
                            placeHolder="Enter your work email address"
                            inputName="email"
                            inputValue={email}
                            inputOnChange={(e) => setEmail(e.target.value)}
                            errorMessage={error.email}
                        />
                        <TextInput
                            inputLabel="Password"
                            inputType="password"
                            placeHolder="Enter your password"
                            inputName="password"
                            inputValue={password}
                            inputOnChange={(e) => setPassword(e.target.value)}
                            errorMessage={error.password}
                        />
                        <Button
                            buttonType="submit"
                            buttonClass="primary"
                            buttonName="Sign in"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;