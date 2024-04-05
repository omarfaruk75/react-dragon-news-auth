import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('name'));
        console.log(form.get('email'));
        console.log(form.get('password'));




    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="my-4 text-2xl text-center"> Please <span className="font-black">Register</span></h2>
            <div className="text-center">
                <form onSubmit={handleRegister} className="w-2/6 mx-auto border-2 p-4 rounded-xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required type="text" name="name" placeholder="Write your Name" className="input input-bordered" />
                    </div>
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

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p>Already have an account please <Link className="text-primary" to={'/Login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;