import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

function Login() {
    let name, value;
    const [user, setUser] = useState({
        email: "", password: ""
    });
    const handleInput = (e) => {
        console.log(e);
        const name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    // login function
    const LoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = user;
            const res = await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                }),
            });
            const data = await res.json();

            if (res.status === 200 || !data) {
                window.alert("Please fill the field properly");

            } else if (res.status === 201 || !data) {
                window.alert("Login successfull");
                nav("/home")
            } else {
                window.alert("invalid credentials");
            }
        } catch (error) {
            console.log(error);
        }
        console.log("login")
    }
    // check if user is logged in or not
    const callHomePage = async () => {
        try {
            const res = await fetch('/home', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
            nav("/home")
        } catch (error) {
            console.log(error);
            nav("/")
        }
    }
    // function call it load only once when it opens first time
    useEffect(() => {
        callHomePage();
    }, [])


    //******************************************** */
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <div className="login_parent">
                <div className="login_child_image"></div>
                <div className="login_child_login">
                    <h1 className="login_child_login_RTM_heading">RTM</h1>
                    <h4 className="login_child_login_Black_Frog_Technologies">BlackFrog Technologies</h4>
                    <div className="login_child_login_form">
                        <div className="login_child_login_form_child">
                            <form method='POST'>
                                <h1 className="login_form_login_text">Login</h1>
                                <div>
                                    <h3 className="login_form_Username_text">Username</h3>
                                    <input type="email" className="login_form_user_type" name="email" placeholder="Username" value={user.email} onChange={handleInput} />
                                </div>

                                <div className="login_form_Password_div">
                                    <h3 className="login_form_Password">Password</h3>
                                    <input type={showPassword ? "text" : "password"} name="password" className="login_form_password_type" placeholder="Password" value={user.password} onChange={handleInput} />
                                    {showPassword ? <FaEye onClick={handleToggle} className="eye_icon" /> : <FaEyeSlash onClick={handleToggle} className="eye_icon" />}
                                </div>
                                <div className="Forget_Password">
                                    <a href="" className="Forget_Password_anchor_tag">Forget Password</a>
                                </div>
                                <button type="submit" name="login" className="LogIn" onClick={LoginSubmit}>LogIn</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
