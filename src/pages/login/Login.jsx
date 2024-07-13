import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
import LoginIntro from "./LoginIntro"

const Login = () => {
    return (
        <>
            {/* <a href="/">go to home</a> */}
            <Link to='/' >
                go to home
            </Link>
            <div className="grid-cols-1 grid bg-white md:grid-cols-2"  >
                <LoginForm />
                <LoginIntro />
            </div>
        </>
    )
}

export default Login