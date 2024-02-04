import RegisterForm from "./forms/Registerform";
import LoginForm from "./forms/LoginForm";
const LoginOrRegister = () => {
    return(
        <>
        <h1>This will be our log in and register</h1>
        <div className="login">
        <p>Login to your user account</p>
        <LoginForm/>
        </div>
        <div className="register">
            <a>Not yet signed up? Register here</a>
            <p>Register will go here. </p>
            <RegisterForm/>
        </div>
        </>
    )
}
export default LoginOrRegister;