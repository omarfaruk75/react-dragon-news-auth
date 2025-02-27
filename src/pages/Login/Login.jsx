import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));




    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="my-4 text-2xl text-center"> Please <span className="font-black">Login</span></h2>
            <div className="text-center">
                <form onSubmit={handleLogin} className="w-2/6 mx-auto border-2 p-4 rounded-xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" required type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>Do not have an account please <Link className="text-primary" to={'/register'}>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;