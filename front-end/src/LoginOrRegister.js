import RegisterForm from "./forms/Registerform";
import LoginForm from "./forms/LoginForm";
const LoginOrRegister = () => {
    return(
        <>
      
        <div className="login">
        <p>Login to your user account</p>
        <LoginForm/>
        </div>
        <div className="register">
            <a>Not yet signed up? Register here</a>
        
            <RegisterForm/>
        </div>
        </>
    )
}
export default LoginOrRegister;